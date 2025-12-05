import styled from "styled-components";

export const Card = styled.div`
    border: 2px solid ${(props) => props.theme.borderColor ?? '#c1c1c1'};
    border-radius: 8px;
    padding: 16px;
`;

export const LinkBotao = styled.a`
    display: inline-block;
    color: ${(props) => props.theme.background};
    font-size: 14px;
    background-color: ${(props) => props.theme.backgroundButton};
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    margin-top: 24px;

    &:hover {
        opacity: 0.8;
    }
`;