import { SVGProps } from "react"
import S from './styles';
import { motion } from "framer-motion";

const LINE_PATHS = [
    "M770.224 1692.76L-226.146 -33L-236.482 -27.0322L759.887 1698.73L770.224 1692.76Z",
    "M742.672 1708.67L-253.697 -17.0933L-264.033 -11.1255L732.336 1714.64L742.672 1708.67Z",
    "M715.16 1724.55L-281.209 -1.20909L-291.546 4.75871L704.824 1730.52L715.16 1724.55Z",
    "M687.648 1740.44L-308.721 14.6751L-319.058 20.6429L677.311 1746.41L687.648 1740.44Z",
    "M660.097 1756.34L-336.272 30.5818L-346.609 36.5496L649.76 1762.31L660.097 1756.34Z",
    "M632.584 1772.23L-363.785 46.466L-374.121 52.4339L622.248 1778.2L632.584 1772.23Z",
    "M605.072 1788.11L-391.297 62.3503L-401.633 68.3181L594.736 1794.08L605.072 1788.11Z",
    "M577.521 1804.02L-418.848 78.257L-429.185 84.2248L567.184 1809.99L577.521 1804.02Z",
    "M550.009 1819.9L-446.36 94.1412L-456.697 100.109L539.672 1825.87L550.009 1819.9Z",
    "M522.496 1835.79L-473.873 110.025L-484.21 115.993L512.16 1841.76L522.496 1835.79Z"




]
export default function Diagonals(props: SVGProps<SVGSVGElement>) {
    return (
        <S.Diagonal>
            <svg
                width="100%"
                height={1080}
                viewBox="0 0 771 1080"
                preserveAspectRatio="xMinYMin slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                {LINE_PATHS.map((diagonal, idx) => (
                    <motion.path
                        id="Line"
                        d={diagonal}
                        fill="#FE8ECB"
                        fillOpacity={0.25}
                        animate={{ scale: [0, 1], opacity: [0, 1] }}
                        transition={{
                            duration: 1 + idx / LINE_PATHS.length,
                            delay: idx / LINE_PATHS.length
                        }}
                    />
                ))}

                {/* <path
                    id="Line_01"
                    d="M742.672 1708.67L-253.697 -17.0933L-264.033 -11.1255L732.336 1714.64L742.672 1708.67Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_02"
                    d="M715.16 1724.55L-281.209 -1.20909L-291.546 4.75871L704.824 1730.52L715.16 1724.55Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_03"
                    d="M687.648 1740.44L-308.721 14.6751L-319.058 20.6429L677.311 1746.41L687.648 1740.44Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_04"
                    d="M660.097 1756.34L-336.272 30.5818L-346.609 36.5496L649.76 1762.31L660.097 1756.34Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_05"
                    d="M632.584 1772.23L-363.785 46.466L-374.121 52.4339L622.248 1778.2L632.584 1772.23Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_06"
                    d="M605.072 1788.11L-391.297 62.3503L-401.633 68.3181L594.736 1794.08L605.072 1788.11Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_07"
                    d="M577.521 1804.02L-418.848 78.257L-429.185 84.2248L567.184 1809.99L577.521 1804.02Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_08"
                    d="M550.009 1819.9L-446.36 94.1412L-456.697 100.109L539.672 1825.87L550.009 1819.9Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                />
                <path
                    id="Line_09"
                    d="M522.496 1835.79L-473.873 110.025L-484.21 115.993L512.16 1841.76L522.496 1835.79Z"
                    fill="#FE8ECB"
                    fillOpacity={0.25}
                /> */}
            </svg>
        </S.Diagonal>
    );
}


