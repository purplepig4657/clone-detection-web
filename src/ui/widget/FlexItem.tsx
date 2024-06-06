import React from "react";

type FlexItemProps = {
    children?: React.ReactNode,
    flexBasis?: string,
    flexGrow?: number,
    flexShrink?: number,
    width?: string,  // <length>
    height?: string  // <length>
    id?: string,
    className?: string
}

const FlexItem: React.FC<FlexItemProps> = ({
    children = undefined,
    flexBasis = 'auto',
    flexGrow = 0,
    flexShrink = 1,
    width = 'auto',
    height = 'auto',
    id = undefined,
    className = undefined,
    ...otherAttributes
}) => {
    return <div id={id} className={className} style={{
        flexBasis: flexBasis,
        flexGrow: flexGrow,
        flexShrink: flexShrink,
        width: width,
        height: height,
        ...otherAttributes
    }}>
        {children}
    </div>
};

export default FlexItem;
