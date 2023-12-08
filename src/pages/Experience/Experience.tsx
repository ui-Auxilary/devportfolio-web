import { AnimatePresence, easeOut } from 'framer-motion'
import S from './styles'
import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const experienceList = [
    {
        id: 1,
        title: 'Software Engineer @ Resmed',
        year: 'Nov 2023 - present',
        description: 'blah'
    },
    {
        id: 2,
        title: 'Software Developer @ Singtel Optus Pty Limited',
        year: 'May 2023 - Nov 2023',
        description: 'blah'
    },
    {
        id: 3,
        title: 'Junior Developer @ NewsCorp',
        year: 'Oct 2022 - Feb 2023',
        description: 'blah'
    },
]

const ExperienceAccordion = ({ idx, active, title, year, description, onShow }: any) => {
    return (
        <>
            <S.ExperienceAccordion onClick={() => { active ? onShow(0) : onShow(idx) }}>
                <S.Role>{title}</S.Role>
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <S.Year>{year}</S.Year>
                    {active ? <FaMinusCircle /> : <FaPlusCircle />}
                </div>
            </S.ExperienceAccordion>

            <AnimatePresence>
                {active &&
                    (
                        <S.Answer
                            key={idx}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto " }}
                            exit={{ opacity: 0, height: 0, transition: { duration: 0.3, type: easeOut } }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={{ padding: "25px", height: "100px" }}>
                                {description}
                            </div>
                        </S.Answer >
                    )
                }
            </AnimatePresence>

        </>
    );
}
export default function Experience() {
    const [activeQ, setActiveQ] = useState(1);

    return (
        <IconContext.Provider value={{ size: "2em" }}>
            <S.Container id="experience">
                <S.Title>
                    Experience
                </S.Title>
                <S.ExperienceList>
                    {
                        experienceList.map(({ id, title, year, description }) => {
                            return <ExperienceAccordion key={id} idx={id} title={title} active={activeQ === id} year={year} description={description} onShow={setActiveQ} />
                        })
                    }
                </S.ExperienceList>
            </S.Container >
        </IconContext.Provider>
    )
}
