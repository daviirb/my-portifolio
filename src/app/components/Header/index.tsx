import Image from 'next/image'
import './header.scss'

export function Header() {
    return(
        <div className="header">
        <Image
            src="/foto-perfil.png"
            alt="Foto de perfil"
            width={300}
            height={300}
            priority
        />
        <div>
        <h1>Olá, eu sou Davi! 👋</h1>
        <h2>Desenvolvedor Front-end</h2>
        </div>
    </div>
    )
}
