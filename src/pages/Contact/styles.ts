import styled from "styled-components";

const Container = styled.div`
    background: #281F30;
    padding: 50px;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    width: fit-content;
    font-size: 4vw;
    background: linear-gradient(89deg, #AAFFD6 1.18%, #D5C6FF 75.74%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 25px;
    padding-top: 50px;

    @media (max-width: 1024px) {
        font-size: 8vw;
    }
`

const ScrollButton = styled.img`
    width: 3vw;
    background: #FFD7D7;
    border-radius: 100%;
    position: absolute;
    right: 3vw;
    bottom: 10vh;
`;

export default {
    Container,
    ScrollButton,
    Title
}