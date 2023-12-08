import styled from "styled-components";

const Container = styled.div`
    background: linear-gradient(180deg, #2C313A 10.79%, #2C313A 100%);
    padding: 50px;
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

const ProjectOne = styled.div`
    background: #a6b8b9;
    grid-area: project1;
    padding: 25px;
    border-radius: 10px;
`;

const ProjectTwo = styled.div`
    background: #9aaab7;
    grid-area: project2;
    padding: 25px;
    border-radius: 10px;
`;

const ProjectThree = styled.div`
    background: #1f2128;
    grid-area: project3;
    border-radius: 10px;
    overflow: hidden;

    & > img {
        width: 100%;    
    }
`;

const ProjectFour = styled.div`
    background: #3a3a55;
    grid-area: project4;
    padding: 25px;
    border-radius: 10px;
`;

const Grid = styled.div`
    display: grid;
    grid-template: 
        [row1-start] "project1 project2 project3" max-content [row1-end]
        [row2-start] "project4 project4 project3" max-content [row2-end]
        / 1fr 1fr 2fr;
    grid-gap: 20px;
`;

const Subsection = styled.div`
    display: flex;
    padding: 25px 50px;
    justify-content: space-between;
`

const LeftSubsection = styled.div`
    padding: 25px;
`;

const RightSubsection = styled.div`
    padding: 25px;
    align-self: flex-end;
`;

export default {
    Container,
    Grid,
    RightSubsection,
    LeftSubsection,
    ProjectOne,
    ProjectTwo,
    ProjectThree,
    ProjectFour,
    Subsection,
    Title
}