import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";


const fadeIn = keyframes`
    0% {
      opacity: 0;
    }

  
    100% {
      opacity: 1;
    }
`

const Cursor = styled(motion.div)`
    background: #CAE9F1;
    position: fixed;
    z-index: 2;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
    transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
    animation: ${fadeIn} 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

    pointer-events:none;
`;

const Secondary = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #CAE9F1;
    background: none;
    pointer-events: none;
    overflow: hidden;
    position: fixed;
    z-index: 2;
`

export default {
  Secondary,
  Cursor
}