import { useEffect, useRef } from 'react';
import S from './styles';

export default function Cursor() {
    const mainCursor = useRef(null);
    const secondaryCursor = useRef(null);

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destX: 0,
        destY: 0,
        distX: 0,
        distY: 0,
        key: -1
    });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;

        const mouseX = clientX;
        const mouseY = clientY;

        positionRef.current.mouseX = clientX -
            secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY = clientY -
            secondaryCursor.current.clientHeight / 2;
        mainCursor.current.style.transform = `translate3d(${mouseX -
            mainCursor.current.clientWidth / 2}px, ${mouseY -
            mainCursor.current.clientHeight / 2}px, 0)`;
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouse)

        return () => {
            document.removeEventListener("mousemove", handleMouse)
        }
    }, [])

    useEffect(() => {
        const follow = () => {
            positionRef.current.key = requestAnimationFrame(follow);

            const { mouseX, mouseY, destX, destY, distX, distY } = positionRef.current;

            if (!destX || !destY) {
                positionRef.current.destX = mouseX;
                positionRef.current.destY = mouseY;
            } else {
                positionRef.current.distX = (mouseX - destX) * 0.1;
                positionRef.current.distY = (mouseY - destY) * 0.1;

                if (Math.abs(positionRef.current.distX) + Math.abs(positionRef.current.distY) < 0.1) {
                    positionRef.current.destX = mouseX;
                    positionRef.current.destY = mouseY;
                } else {
                    positionRef.current.destX += distX;
                    positionRef.current.destY += distY;
                }
            }

            secondaryCursor.current.style.transform = `translate3d(${destX}px, ${destY}px, 0)`
        }

        follow();
    }, [])
    return (
        <>
            <S.Cursor ref={mainCursor} />
            <S.Secondary ref={secondaryCursor} />
        </>
    )
}
