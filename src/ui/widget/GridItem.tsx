import React from "react";

type GridItemProps = {
  children?: React.ReactNode;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  width?: string;
  height?: string;
  id?: string;
  className?: string;
};

const GridItem: React.FC<GridItemProps> = ({
  children = undefined,
  gridColumnStart = undefined,
  gridColumnEnd = undefined,
  gridRowStart = undefined,
  gridRowEnd = undefined,
  justifySelf = undefined,
  alignSelf = undefined,
  width = 'auto',
  height = 'auto',
  id = undefined,
  className = undefined,
  ...otherAttributes
}) => {
  return (
    <div id={id} className={className}
      style={{
        gridColumnStart: gridColumnStart,
        gridColumnEnd: gridColumnEnd,
        gridRowStart: gridRowStart,
        gridRowEnd: gridRowEnd,
        justifySelf: justifySelf,
        alignSelf: alignSelf,
        width: width,
        height: height,
        ...otherAttributes,
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;
