import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`
const Cursor = styled(motion.div)`
    background: #FFF;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transform: translate(-50%, -50%);
    pointer-events:none;
`;

export default {
    Container,
    Cursor
}