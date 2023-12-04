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

    & > * {
        cursor: pointer;
    }
    
    & li {
        list-style: none;
    }
`;

export default {
    Header,
    Nav
}