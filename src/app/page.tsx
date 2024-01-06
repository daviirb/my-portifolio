import { Experience } from './components/Experience/experience'
import { Header } from './components/Header'
import { Infos } from './components/Infos/infos'
import { SocialBtns } from './components/Social-btns/social-btns'
import { EmailIcon } from './components/icons/email-icon'

import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Infos />
        <div className="buttons">
          <SocialBtns />
          <a className='btn-primary' href='mailto:davi.rb@hotmail.com'>
            Contact me
            <EmailIcon />
          </a>
        </div>
    </main>
  )
}
