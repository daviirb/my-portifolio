import { SectionTitle } from "../SectionTitle/sectionTitle"
import Image from 'next/image'

import './technologies.scss'

export function Technologies(){
    return(
        <div className="technologies">
            <SectionTitle text="Tecnologias" />
            <div className="tech-list">
            <div className="tech-icon">
            <Image
                src="/images/JS.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>JavaScript</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/typescript.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>TypeScript</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/React-icon.png"
                alt="Foto de perfil"
                width={60}
                height={50}
                priority
            />
            <span>React</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/Angular.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>Angular</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/sass.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>Sass</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/JS.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>JavaScript</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/JS.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>JavaScript</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/JS.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>JavaScript</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/JS.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>JavaScript</span>
            </div>
            <div className="tech-icon">
            <Image
                src="/images/JS.png"
                alt="Foto de perfil"
                width={50}
                height={50}
                priority
            />
            <span>JavaScript</span>
            </div>
            </div>
        </div>
    )
}
