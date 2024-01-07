import { SectionTitle } from "../SectionTitle/sectionTitle"
import './infos.scss'

export function Infos() {
return (
    <div className="informations">
        <SectionTitle text="Educação" />
        <div className="educational-info">
        <span>🎓 Ciência da Computação - Estácio</span>
        <span>📚 Desenvolvedor Full Stack Python - EBAC</span>
        <span>📚 Bootcamp Desenvolvimento Frontend com Angular - DIO</span>
        </div>
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
        <span>🇺🇸 EN - Intermediário</span>
        <span>🇧🇷 PT-BR - Nativo</span>
        </div>
    </div>
)
}
