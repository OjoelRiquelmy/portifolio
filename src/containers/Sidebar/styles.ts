import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Description = styled(P)`
    margin-top: 24px;
    margin-bottom: 40px;
`;

export const Button = styled.button`
    background-color: ${(props) => props.theme.primary}; 
    border: 2px solid #747272ff;
    color: ${(props) => props.theme.background};
    border-radius: 12px;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;


    &:hover {
        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.background};
    }
`;

export const SidebarContainer = styled.div`
    position: sticky;
    top: 24px;
    left: 0;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    /* Estilo para o avatar dentro da sidebar */
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        margin-bottom: 16px;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
        align-items: center; /* centraliza avatar e elementos */
        text-align: center;  /* centraliza textos */

        img {
            width: 120px;
            height: 120px;
            margin-bottom: 12px;
        }
    }
`;