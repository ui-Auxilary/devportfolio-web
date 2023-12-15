import { motion } from "framer-motion";
import styled from "styled-components";

const Mouse = styled(motion.div)`
    width: 3vw
    display: flex;
    align-self: center;
    margin-top: 50px;
    margin-left: -5vw;

    @media (max-width: 1024px) {
        display: none
    }
`

export default {
    Mouse
}