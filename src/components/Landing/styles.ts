import styled from 'styled-components';

const Hero = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, #240E2C 14.21%, #2C313A 100%);
    padding: 0px 3vw;
`;

const Container = styled.div`
    display: flex;
    height: 80%;
    justify-content: center;
    flex-direction: column;
    margin: auto 13em;

    & h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 11vw;
        width: fit-content;
    }

    & .titleUnderlay {  
        background: #793A73;
        margin-left: -18px;
        background-clip: text;
        position: absolute;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & .title {
        background: linear-gradient(180deg, #FFF 0%, #9E87F8 101.87%);
        background-clip: text;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Wrapper = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    & > p {
        font-size: 20px;
    }
`

const Tab = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    gap: 10px;

    & > span {
        background-color: #7C3579;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 15px;
    }
`

const Title = styled.div`
    display: flex;
    gap: 20px;
`

const Logos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

const Line = styled.div`
    width: 5px;
    height: 100%;
    padding: 5px 0px;
    background: #E0CCFF;    
`
const Diagonal = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 31vw;
    height: 100vh;
`

const Upper = styled.img`
    width: fit-content;
    height: 20vh;
    position: absolute;
    top: 0;
`

const Lower = styled.img`
    width: fit-content;
    height: 20vh;
    bottom: 0;
    position: fixed;
    right: 3vw;
    position: absolute;
    top: 80vh;
    right: 3vw;
`

const Github = styled.img`
    width: 3.5vw;
    &:hover {
        stroke: #000;
    }
`

const Linkedin = styled.img`
    width: 3.5vw;
`

const Mouse = styled.img`
    width: 3vw;
    display: flex;
    align-self: center;
    margin-top: 50px;
    margin-left: -5vw;
`

export default {
    Container,
    Github,
    Hero,
    Line,
    Diagonal,
    Linkedin,
    Logos,
    Lower,
    Mouse,
    Tab,
    Title,
    Upper,
    Wrapper
}