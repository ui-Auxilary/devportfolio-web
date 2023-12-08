import Landing from "components/Landing";
import About from "pages/About";
import Contact from "pages/Contact";
import Experience from "pages/Experience";
import Projects from "pages/Projects";
import { useEffect, useRef } from "react";
import S from './styles';
import Cursor from "components/Cursor";

export default function Home() {
    const scrollConfig = {
        ease: 0.04,
        current: 0,
        previous: 0,
        rounded: 0
    }

    const scrollContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollContainer.current != null) {
            document.body.style.height = `${scrollContainer?.current.getBoundingClientRect().height}px`;
        }
        requestAnimationFrame(() => smoothScrolling());

    }, [])

    const smoothScrolling = () => {
        if (scrollContainer.current != null) {
            scrollConfig.current = window.scrollY;
            scrollConfig.previous += (scrollConfig.current - scrollConfig.previous) * scrollConfig.ease
            scrollConfig.rounded = Math.round(scrollConfig.previous * 100) / 100;
            scrollContainer.current.style.transform = `translateY(-${scrollConfig.rounded}px)`;
        }
        requestAnimationFrame(() => smoothScrolling());
    }

    return (
        <S.Container>
            <Cursor />
            <div ref={scrollContainer}>
                <Landing />
                <Projects />
                <About />
                <Experience />
                <Contact />
            </div>
        </S.Container>
    )
}
