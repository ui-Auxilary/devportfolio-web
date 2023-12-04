import S from './styles'

export default function Experience() {
    return (
        <S.Container id="contact" style={{ height: "1000px" }}>
            <S.Title>
                Experience
            </S.Title>
            <S.ExperienceList>
                <S.ExperienceAccordion>
                    <S.Role>Software engineer @ Resmed</S.Role>
                    <S.Year>2023-Present</S.Year>
                </S.ExperienceAccordion>
            </S.ExperienceList>
            Experience
        </S.Container>
    )
}
