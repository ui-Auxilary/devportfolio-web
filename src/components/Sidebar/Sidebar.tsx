import { useState } from "react"
import S from './styles'

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <S.Sidebar>
            <S.Hamburger>
                <span></span>
                <span></span>
                <span></span>
            </S.Hamburger>
        </S.Sidebar>
    )
}
