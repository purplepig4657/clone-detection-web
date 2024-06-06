// 마우스 hover시 색상 변경
import React, { useState } from 'react';
import CSS from 'csstype';

interface HoverEffectButtonProps {
    backgroundColor: CSS.Property.BackgroundColor;
    backgroundColorOnHover: CSS.Property.BackgroundColor;
    color: CSS.Property.Color;
    colorOnHover: CSS.Property.Color;
    onClick?: Function;
    children: JSX.Element;
};

const HoverEffectButton = ({
    backgroundColor,
    backgroundColorOnHover,
    color,
    colorOnHover,
    onClick,
    children,
}: HoverEffectButtonProps) => {
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState(backgroundColor);
    const [currentColor, setCurrentColor] = useState(color);

    return (
        <div
            style={{
                color: currentColor,
                backgroundColor: currentBackgroundColor,
                cursor: 'pointer',
            }}
            onClick={() => { if (onClick != undefined) onClick(); }}
            onMouseOver={() => {
                setCurrentBackgroundColor(backgroundColorOnHover);
                setCurrentColor(colorOnHover);
            }}
            onMouseOut={() => {
                setCurrentBackgroundColor(backgroundColor);
                setCurrentColor(color);
            }}
        >
            {children}
        </div>
    );
}

export default HoverEffectButton;
