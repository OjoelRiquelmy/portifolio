import styled from "styled-components";

import type { Props } from ".";

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : '14px')};
    color: ${(props) => (props.tipo === 'principal' ? '#424242ff' : '#9c9c9cff')};
    line-height: 22px;
`;