import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, #240E2C 14.21%, #2C313A 100%);
    padding: 0px 3vw;

    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
    }
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

    @media (max-width: 1024px) {
        margin: auto 4em;
    }
`

const Wrapper = styled.div`
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    & > p {
        font-size: 20px;
    }

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`

const Tab = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    gap: 10px;
`

const HeroTitle = styled(motion.div)`
    display: flex;
    gap: 20px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const Logos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        flex-direction: row;
        margin-bottom: 20px;
    }
`

const Line = styled(motion.div)`
    width: 5px;
    height: 100%;
    padding: 5px 0px;
    background: #E0CCFF;    
`

const Upper = styled.img`
    width: fit-content;
    height: 20vh;
    position: absolute;
    top: 0;

    @media (max-width: 400px) {
        height: 15vh
    }
`

const Lower = styled.img`
    width: fit-content;
    height: 20vh;
    bottom: 0;
    position: fixed;
    right: 3vw;
    position: absolute;
    top: 80vh;

    @media (max-width: 1024px) {
        right: unset;
        top: 80vh;
    }

    @media (max-width: 400px) {
        height: 15vh
    }
`

const Github = styled(motion.img)`
    width: 3.5vw;
    &:hover {
        stroke: #000;
    }

    @media (max-width: 1024px) {
        width: 7.5vw;
    }
`

const Linkedin = styled(motion.img)`
    width: 3.5vw;

    @media (max-width: 1024px) {
        width: 7.5vw;
    }
`

const Tag = styled(motion.span)`
    background-color: #7C3579;
    border-radius: 5px;
    font-size: 15px;
`

const Title = styled.img`
    width: 60vw;

    @media (max-width: 1024px) {
        width: 80vw;
    }
`

export default {
    Container,
    Github,
    Hero,
    Line,
    Linkedin,
    Logos,
    Lower,
    Tab,
    Tag,
    Title,
    HeroTitle,
    Upper,
    Wrapper
}