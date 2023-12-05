import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
    background: linear-gradient(180deg, #2C313A 10.79%, #2C313A 100%);
    padding: 50px;
    height: 100vh;;
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
`

const ExperienceList = styled.div`
    display: flex;
    padding: 25px;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const ExperienceAccordion = styled.div`
    height: 60px;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 25px;
    border-radius: 15px;
    background: linear-gradient(90deg, #A109FF 17.86%, #505050 122.32%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Role = styled.h1`

`

const Year = styled.h3`

`


const Answer = styled(motion.div)`
    height: auto;
    display: flex;
    background: hsl(252deg 19.84% 32.32% / 40%);
    border-radius: 20px;
    width: 60%;
`;
export default {
    Answer,
    Container,
    ExperienceAccordion,
    ExperienceList,
    Role,
    Title,
    Year
}