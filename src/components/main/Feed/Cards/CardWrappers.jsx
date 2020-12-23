import React from 'react'
import styled from 'styled-components'

const CardWrapper = ({ children, className }) => React.cloneElement(children, { ...children.props, className })

export const FrontCardWrapper = styled(CardWrapper)`
    z-index: 3;
    padding: 1em;
    position: absolute;
`

export const BackCardWrapper = styled(CardWrapper)`
    z-index: 2;
    transform: scale(0.9);
    opacity: 0.7;
    padding: 1em;
    position: absolute;
    margin-top: -20vh;
`
