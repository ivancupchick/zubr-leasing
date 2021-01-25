import React, { FC } from 'react';

type ElementaryType = {
  x: number;
  y: number;
};

const Container: FC<{}> = ({children}) => {
  return <div>{children}</div>
}

const Elementary = ({x, y}: ElementaryType) => {
  return <div>{x}x{y}</div>
}

export {
  Elementary
}
