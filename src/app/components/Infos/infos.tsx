import { SectionTitle } from "../SectionTitle/sectionTitle"
import './infos.scss'

export function Infos() {
return (
    <div className="informations">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
        <span>🇺🇸 EN - Fluent</span>
        <span>🇧🇷 PT-BR - Native</span>
        </div>
        <SectionTitle text="Education" />
        <div className="educational-info">
        <span></span>
        <span>🎓 Computer Science Bachelors Degree - Estácio</span>
        </div>
    </div>
)
}
