import * as React from 'react';
import {
  SliderItem,
  GetHandleProps,
  GetTrackProps
} from 'react-compound-slider';

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
interface IHandleProps {
  domain: ReadonlyArray<number>;
  handle: SliderItem;
  getHandleProps: GetHandleProps;
}

export const Handle: React.SFC<IHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps
}) => (
  <div
    role="slider"
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: 'absolute',
      marginLeft: '-11px',
      marginTop: '-12px',
      zIndex: 2,
      width: 32,
      height: 32,
      boxShadow: `0 0 3px 0 rgb(97 158 0 / 54%)`,
      border: `8px solid #fff`,
      backgroundColor: `#7ab800`,
      cursor: 'pointer',
      borderRadius: '50%',
      // boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
      // backgroundColor: '#34568f'
    }}
    {...getHandleProps(id)}
  />
);

// *******************************************************
// TRACK COMPONENT
// *******************************************************
interface ITrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
}

export const Track: React.SFC<ITrackProps> = ({
  source,
  target,
  getTrackProps
}) => (
  <div
    style={{
      position: 'absolute',
      height: 8,
      zIndex: 1,
      background: `linear-gradient(
        90deg
        ,#2b5099,#00979a 49%,#78b801)`,
      borderRadius: 4,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);
