import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
`
const Container = styled.div`
    height: 500px;
    background: linear-gradient(180deg, #2C313A 10.79%, #3c5e99 100%);
    padding: 50px;
`

const About = styled.div`
    flex: 1;
    padding: 25px;

    & > h1 {
        font-family: "Poppins", sans-serif;
        width: fit-content;
        font-size: 4vw;
        background: linear-gradient(89deg, #AAFFD6 1.18%, #D5C6FF 75.74%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & > p {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.7px;
    }
`

const TechWrapper = styled.div`
    display: flex;
    flex: 1.5;
    flex-direction: column;

    & > span {
        font-size: 2em;
        font-weight: 800;
    }
`

const TechStack = styled.div`
    padding: 25px;
    flex: 0.5;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const TechBubble = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 10px 20px;
    height: 20px;
    font-weight: 500;
    border-radius: 627px;
    background: rgba(45, 212, 191, 0.10);
    flex-shrink: 0;
`

export default {
    About,
    Container,
    TechStack,
    TechBubble,
    TechWrapper,
    Wrapper
}