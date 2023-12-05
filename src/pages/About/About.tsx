import S from './styles'

export default function About() {
    const TechStack = [
        "React",
        "Javascript",
        "Node",
        "HTML",
        "C++",
        "C",
        "FastAPI",
        "Typescript",
        "Python",
        "MongoDB"
    ]

    return (
        <S.Container id="about">
            <S.Wrapper>
                <S.About>
                    <h1>ABOUT ME</h1>
                    <p>
                        I’m a 2nd year computer science student @ UNSW.<br /><br />
                        I’ve always had a keen interest in designing interfaces<br />
                        and seeing it all come to life.<br /><br />
                        When I’m not programming, I’m usually out bouldering or<br />
                        drawing. Sometimes I’ll use a language app and try a new language.
                    </p>
                </S.About>
                <S.TechWrapper>
                    <span>Tech Stack</span>
                    <S.TechStack>
                        {TechStack.map((node) => <S.TechBubble>{node}</S.TechBubble>)}
                    </S.TechStack>
                </S.TechWrapper>
            </S.Wrapper>
        </S.Container>
    )
}
