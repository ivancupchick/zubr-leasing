import React, { useState } from "react"

import './CustomSlider.scss'

import { Slider, Handles, Tracks, Rail } from 'react-compound-slider'
import { Handle, Track } from "./sliderComponents";

// const sliderStyle: React.CSSProperties = {
//   position: "relative",
//   width: "80%",
//   margin: "20% 10%",
// };

const sliderStyle: React.CSSProperties = {
  margin: '5%',
  position: 'relative',
  width: '90%'
};
const railStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 8,
  borderRadius: 4,
  cursor: 'pointer',
  backgroundColor: '#ced4da'
};


type CustomSliderProps = {
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  onChange: (value: number) => void;
}

const CustomSlider = ({ value, onChange, min, max, step }: CustomSliderProps) => {
  const [
    state,
    setState
  ] = useState({
    values: [value || 0],
    update: [200],
    domain: [min || 0, max || 100000]
  } as {
    values: ReadonlyArray<number>,
    update: ReadonlyArray<number>,
    domain: number[]
  })
  // const state = {
  //   values: [200, 400],
  //   update: [200, 400],
  //   domain: [100, 500]
  // };

  // const onUpdate = (update: ReadonlyArray<number>) => {
  //   console.log(update);
  //   // setState({ update, values: state.values, domain: state.domain });
  // };

  const onChangeSlider = (values: ReadonlyArray<number>) => {
    setState({ update: state.update, values, domain: state.domain });
    onChange(values[0]);
  };

  return <div className="custom-slider" style={{ height: 120, width: '100%' }}>
    <Slider
      mode={1}
      step={step || 1}
      domain={state.domain}
      rootStyle={sliderStyle}
      // onChange={onChangeSlider}
      onUpdate={onChangeSlider}
      values={[value || 0]}
    >
      <Rail>
        {({ getRailProps }) => (
          <div style={railStyle} {...getRailProps()} />
        )}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                domain={state.domain}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
    </Slider>
  </div>
}



export {
  CustomSlider
}
