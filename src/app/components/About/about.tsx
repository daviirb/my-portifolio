import { SectionTitle } from '../SectionTitle/sectionTitle'
import './about.scss'

export function About(){
    return(
        <div className="about">
        <SectionTitle text="Sobre mim" />
        <p>Sou Desenvolvedor Front-end e estou me graduando em Ciência da Computação.</p>
        </div>  
    )
}
