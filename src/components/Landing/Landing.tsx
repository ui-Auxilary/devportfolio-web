import S from './styles'
import Header from 'components/Header'
import upper from 'assets/uppertron.svg'
import lower from 'assets/lowertron.svg'
import Linkedin from 'assets/linkedin.svg'
import Github from 'assets/github.svg'
import { motion } from 'framer-motion'
import Diagonals from 'components/DiagonalSVG'
import MouseSVG from 'components/MouseSVG'
import Sidebar from 'components/Sidebar'
import Title from 'assets/title.svg'

export default function Landing() {
    return (
        <S.Hero>
            <Header />
            <Sidebar />
            <S.Upper src={upper} />
            <S.Container>
                <S.Wrapper>
                    <S.Tab>
                        <S.Line
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "100%" }}
                            transition={{ duration: 1 }}
                        />
                        <S.Tag
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 180 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div style={{ padding: "5px 10px", width: "fit-content" }}>
                                <p style={{ height: "100%", whiteSpace: "nowrap" }}>SOFTWARE DEVELOPER</p>
                            </div>
                        </S.Tag>
                    </S.Tab>
                    <S.HeroTitle>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <S.Title src={Title} />
                            {/* <h1 className='titleUnderlay'>CHRISTIAN</h1>
                            <h1 className='title'>CHRISTIAN</h1> */}
                        </motion.div>
                        <S.Logos>
                            <S.Github
                                src={Github}
                                initial={{ opacity: 0, y: -80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            />
                            <S.Linkedin
                                src={Linkedin}
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            />
                        </S.Logos>
                    </S.HeroTitle>
                    <motion.p
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Hi, I’m a software developer based in <span>SYDNEY</span> with a passion for UI/UX
                    </motion.p>
                    <MouseSVG />
                </S.Wrapper>
            </S.Container>
            <Diagonals />
            {/* <S.Diagonal src={Diagonal} /> */}
            <S.Lower src={lower} />
        </S.Hero>
    )
}
