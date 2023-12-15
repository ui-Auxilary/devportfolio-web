import styled from "styled-components";

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

    @media (max-width: 1024px) {
        display: none;
    }
`;

export default {
    Nav
}