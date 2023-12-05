import { Link } from 'react-scroll'
import S from './styles'

export default function Header() {
    return (
        <S.Header>
            <S.Nav>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >
                    Projects
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >
                    Experience
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >
                    Contact
                </Link>
            </S.Nav>
        </S.Header>
    )
}
