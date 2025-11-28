import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Description = styled(P)`
    margin-top: 24px;
    margin-bottom: 40px;
`;

export const Button = styled.button`
    background-color: rgba(29, 27, 30, 1); 
    border: 2px solid #747272ff;
    color: #eeeeee;
    border-radius: 12px;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #424242ff;
        color: #ffffff;
    }
`;

export const SidebarContainer = styled.div`
    position: sticky;
    top: 24px;
    left: 0;
    padding: 24px;
`;