import { About } from './components/About/about'
import { Header } from './components/Header'
import { Infos } from './components/Infos/infos'
import { SocialBtns } from './components/Social-btns/social-btns'
import { Technologies } from './components/Technologies/technologies'
import { EmailIcon } from './components/icons/email-icon'

import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <About />
      <Infos />
      <Technologies />
        <div className="buttons">
          <SocialBtns />
          <a className='btn-primary' href='mailto:davi.rb@hotmail.com'>
            Entre em contato
            <EmailIcon />
          </a>
        </div>
    </main>
  )
}
