import React from "react";

interface PaddingAllProps {
    size: number;
    children?: JSX.Element;
};

interface PaddingSymmetricProps {
    horizontal?: number;
    vertical?: number;
    children?: JSX.Element;
};

interface PaddingOnlyProps {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    children?: JSX.Element;
};

const Padding = {
    all: paddingAll,
    symmetric: paddingSymmetric,
    only: paddingOnly,
}

function paddingAll({
    size,
    children,
}: PaddingAllProps) {
    return (
        <div style={{
            padding: size,
        }}>
            {children}
        </div>
    );
}

function paddingSymmetric({
    horizontal,
    vertical,
    children,
}: PaddingSymmetricProps) {
    return (
        <div style={{
            display: "inline-block",
            paddingTop: vertical,
            paddingBottom: vertical,
            paddingLeft: horizontal,
            paddingRight: horizontal,
        }}>
            {children}
        </div>
    )
}

function paddingOnly({
    top,
    bottom,
    left,
    right,
    children,
}: PaddingOnlyProps) {
    return (
        <div style={{
            display: "inline-block",
            paddingTop: top,
            paddingBottom: bottom,
            paddingLeft: left,
            paddingRight: right,
        }}>
            {children}
        </div>
    )
}

export default Padding;
