import { AnimatePresence, motion } from "framer-motion";
import { SVGProps } from "react"
import S from './styles';

export default function MouseSVG(props: SVGProps<SVGSVGElement>) {
    return (
        <S.Mouse>
            <svg
                width={"3vw"}
                height={132}
                viewBox="0 0 84 132"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <motion.rect
                    x={1.5}
                    y={1.5}
                    width={81}
                    height={129}
                    rx={40.5}
                    stroke="#F0ABF1"
                    strokeWidth={3}
                    initial={{ pathLength: 0, pathOffset: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 3, repeatDelay: 4, repeat: Infinity }}
                />
                <motion.rect
                    x={1.5}
                    y={1.5}
                    width={81}
                    height={129}
                    rx={40.5}
                    stroke="#A71DFC"
                    strokeWidth={3}
                    initial={{ pathLength: 0, pathOffset: 0 }}
                    animate={{ pathLength: 1, pathOffset: 1 }}
                    transition={{ duration: 0.8, delay: 3.3, repeatDelay: 4, repeat: Infinity }}
                />
                <motion.path
                    d="M43.5 68C43.5 67.1716 42.8284 66.5 42 66.5C41.1716 66.5 40.5 67.1716 40.5 68L43.5 68ZM40.9393 101.061C41.5251 101.646 42.4749 101.646 43.0607 101.061L52.6066 91.5147C53.1924 90.9289 53.1924 89.9792 52.6066 89.3934C52.0208 88.8076 51.0711 88.8076 50.4853 89.3934L42 97.8787L33.5147 89.3934C32.9289 88.8076 31.9792 88.8076 31.3934 89.3934C30.8076 89.9792 30.8076 90.9289 31.3934 91.5147L40.9393 101.061ZM40.5 68L40.5 100L43.5 100L43.5 68L40.5 68Z"
                    fill="#A71DFC"
                    initial={{ opacity: 0, y: -3, pathLength: 0, pathOffset: 0 }}
                    animate={{ opacity: [0, 1, 1], y: [-8, 5, -8, 5, -8], pathLength: 1, pathOffset: 1 }}
                    transition={{ duration: 1.5, delay: 4.5 }}
                />
                <AnimatePresence>
                    <motion.path
                        d="M36.0003 2C48.0003 0.500017 54.0008 17.5001 37.5004 30.5C21 43.5 42.0005 48.4999 42.0004 60.4999C42.0004 72.4999 42.0005 69.4999 42.0005 72.4999"
                        stroke="#A71DFC"
                        strokeWidth={3}
                        strokeLinecap="round"
                        initial={{ opacity: 0, pathLength: 0, pathOffset: 0 }}
                        animate={{ opacity: [0, 1, 1, 1, 0], pathLength: 1, pathOffset: 1 }}

                        transition={{ duration: 1.2, delay: 4.1, repeatDelay: 4, repeat: Infinity }}
                    />
                </AnimatePresence>
            </svg>
        </S.Mouse>
    );
}

