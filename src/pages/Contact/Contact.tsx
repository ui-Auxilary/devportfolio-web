import S from './styles'
import ArrowUp from 'assets/arrowUp.svg'

import { animateScroll as scroll } from 'react-scroll';

export default function Contact() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <S.Container id="contact" style={{ height: "auto", minHeight: "100vh" }}>
            <S.Title>
                Contact
            </S.Title>
            Contact

            <S.ScrollButton onClick={scrollToTop} src={ArrowUp}></S.ScrollButton>

        </S.Container>
    )
}
