import S from './styles'
import Header from 'components/Header'
import upper from 'assets/uppertron.svg'
import lower from 'assets/lowertron.svg'
import Linkedin from 'assets/linkedin.svg'
import Github from 'assets/github.svg'
import Diagonal from 'assets/diagonals.svg'
import Mouse from 'assets/mouse.svg'
import { useEffect } from 'react'

export default function Landing() {
    return (
        <S.Hero>
            <Header />
            <S.Upper src={upper} />
            <S.Container>
                <S.Wrapper>
                    <S.Tab>
                        <S.Line></S.Line>
                        <span>SOFTWARE DEVELOPER</span>
                    </S.Tab>
                    <S.Title>
                        <div>
                            <h1 className='titleUnderlay'>CHRISTIAN</h1>
                            <h1 className='title'>CHRISTIAN</h1>
                        </div>
                        <S.Logos>
                            <S.Github src={Github} />
                            <S.Linkedin src={Linkedin} />
                        </S.Logos>
                    </S.Title>
                    <p>Hi, I’m a software developer based in <span>SYDNEY</span> with a passion for UI/UX</p>
                    <S.Mouse src={Mouse} />
                </S.Wrapper>
            </S.Container>
            <S.Diagonal src={Diagonal} />
            <S.Lower src={lower} />
        </S.Hero>
    )
}
