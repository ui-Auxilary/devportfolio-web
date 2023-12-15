import Sidebar from 'components/Sidebar'
import S from './styles'
import Navbar from 'components/Navbar'
import { useEffect } from 'react'

export default function Header() {
    return (
        <S.Header>
            <Navbar />
        </S.Header>
    )
}
