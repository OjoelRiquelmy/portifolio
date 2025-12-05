import styled from "styled-components";

import type { Props } from ".";

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : '14px')};
    color: ${(props) => (props.tipo === 'principal' 
        ? props.theme.primary 
        : props.theme.secondary)};
    line-height: 22px;
`;