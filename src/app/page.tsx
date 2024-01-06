import { Experience } from './components/Experience/experience'
import { Header } from './components/Header'
import Infos from './components/Infos/infos'

import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Infos />
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
    </main>
  )
}
