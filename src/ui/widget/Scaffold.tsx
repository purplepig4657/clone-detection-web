import React from "react"
import { styled } from "styled-components"

type ScaffoldProps = {
    children?: React.ReactNode,
    height?: string,
    width?: string,
    minheight?: string,
    minwidth?: string
}

const scaffoldConstant = {
    SCREEN_HEIGHT: '100vh',
    SCREEN_WIDTH: '100vw',
    SCREEN_MIN_WIDTH: '280px'
}

const StyledScaffold = styled.div<ScaffoldProps>`
    height: ${props => props.height};
    width: ${props => props.width};
    min-height: ${props => props.minheight};
    min-width: ${props => props.minwidth};
`;

const Scaffold: React.FC<ScaffoldProps> = ({
    children = undefined,
    height = scaffoldConstant.SCREEN_HEIGHT,
    width = scaffoldConstant.SCREEN_WIDTH,
    minheight = undefined,
    minwidth = scaffoldConstant.SCREEN_MIN_WIDTH,
    ...otherAttributes
}) => {
    return (
        <StyledScaffold 
            height={height} 
            width={width} 
            minheight={minheight} 
            minwidth={minwidth} 
            style={{...otherAttributes}}
        >
            {children}
        </StyledScaffold>
    )
}

export default Scaffold;
