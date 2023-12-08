import S from './styles'
import Pipe from 'assets/Pipe.png'

export default function Projects() {
    return (
        <S.Container id="projects" style={{ height: "1000px" }}>
            <S.Title>
                PROJECTS
            </S.Title>
            Projects
            <S.Grid>
                <S.ProjectOne>Content1</S.ProjectOne>
                <S.ProjectTwo>Content2</S.ProjectTwo>
                <S.ProjectThree>
                    <img src={Pipe}></img>
                    <S.Subsection>
                        <S.LeftSubsection>
                            <h1>Pipe.io</h1>
                            <span>Web application</span>
                        </S.LeftSubsection>
                        <S.RightSubsection>
                            Learn more
                        </S.RightSubsection>
                    </S.Subsection>
                </S.ProjectThree>
                <S.ProjectFour>

                </S.ProjectFour>
            </S.Grid>

        </S.Container>
    )
}
