import { motion } from "framer-motion";
import styled from "styled-components";

const Header = styled.header`
    padding: 40px 40px 0px 40px;
    margin: auto 50px;
    font-size: 18px;
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 5em;

    & > a {
        cursor: pointer;
        padding-bottom: 2px;
        background: linear-gradient(0deg, slateblue, slateblue) no-repeat right bottom / 0 2px;
        transition: background-size 350ms;
        
        &:where(:hover, :focus-visible) {
            background-size: 100% 2px;
            background-position-x: left;
        }
    }
    
    & li {
        list-style: none;
    }
`;


export default {
    Header,
    Nav
}