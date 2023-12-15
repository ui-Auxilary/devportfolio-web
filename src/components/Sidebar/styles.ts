import styled from "styled-components";

const Sidebar = styled.div`
    @media (min-width: 1024px) {
        display: none;
    }
`

const Hamburger = styled.div`
    border-radius: 50%;
    background: #A71DFC;
    width: 45px;
    height: 45px;
    position: absolute;
    top: 5vh;
    right: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;
    gap: 5px;

    & > span {
        display: block;
        width: 25px;
        height: 3px;
        border-radius: 10px;
        background: #FFF;
    }

    @media (min-width: 650px) and (max-width: 1024px) {
        width: 50px;
        height: 50px;

        & > span {
            width: 30px;
        }
    }
`

export default {
    Hamburger,
    Sidebar
}