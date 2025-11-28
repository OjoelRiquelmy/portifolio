import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle `
        *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        .inter-<uniquifier> {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
        }
    }

    body {
        padding-top: 80px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f0f0f0;

        @media (max-width: 768px) {
            padding-top: 16px;
        }
    }
`

export default EstiloGlobal

const Container = styled.div `
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 128px auto;
    column-gap: 56px;
    align-items: stretch;

    @media (max-width: 768px) {
        max-width: 80%;
        display: block;
    }


    img {
        max-width: 100%;

    }
`
export { Container }