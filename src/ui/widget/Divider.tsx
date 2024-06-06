import React, { Children } from "react";
import { useMediaQuery } from 'react-responsive';

type DivideContainerProps = {
    children?: React.ReactNode,
    ratio?: number,
    direction?: 'row' | 'column',
    disappearable?: boolean,
    minConditionWidth?: number,
    maxConditionWidth?: number,
    minConditionHeight?: number,
    maxConditionHeight?: number,
    width?: string,
    height?: string
}

const DivideContainer: React.FC<DivideContainerProps> = ({
    children = undefined,
    ratio = 1,
    direction = 'row',
    disappearable = false,
    minConditionWidth = undefined,
    maxConditionWidth = undefined,
    minConditionHeight = undefined,
    maxConditionHeight = undefined,
    width = '100%',
    height = 'auto',
    ...otherAttributes
}) => {

    if (!disappearable) minConditionWidth = 0;  // unavailable value. need to resolve "Invalid or missing MediaQuery" error

    const mediaQueryCondition = {
        minWidth: minConditionWidth,
        maxWidth: maxConditionWidth,
        minHeight: minConditionHeight,
        maxHeight: maxConditionHeight
    }

    const isConditionSatisfied = useMediaQuery(mediaQueryCondition);
    let containerDisplay = isConditionSatisfied ? 'none' : 'flex';

    return (
        <div style={{
            display: disappearable ? containerDisplay : 'flex',
            flexDirection: direction,
            flexBasis: 0,
            flexGrow: ratio,
            width: width,
            height: height,
            ...otherAttributes
        }}>
            {children}
        </div>
    );
};

export default DivideContainer;
