import { SectionTitle } from '../SectionTitle/sectionTitle'
import './about.scss'

export function About(){
    return(
        <div className="about">
        <SectionTitle text="Sobre mim" />
        <p>Como desenvolvedor front-end, transformo linhas de código em experiências visuais, buscando constantemente a inovação e aprimoramento.</p>
        <p>Minha jornada acadêmica não é apenas um percurso, mas sim o alicerce sólido que sustenta minha paixão pela tecnologia, proporcionando um conhecimento profundo e uma base robusta.</p>
        <p><q>A tecnologia move o mundo e a criatividade o faz girar.</q> - Neil Armstrong</p>
        </div>  
    )
}
