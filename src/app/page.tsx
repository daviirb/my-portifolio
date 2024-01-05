import { Header } from './components/Header'

import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <div className="experience">
        <h3>Experience</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eveniet rerum inventore fugiat modi atque quasi dolorem neque enim, iusto dolores dignissimos velit voluptates earum est minus, autem tempora aspernatur.</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>EN - Fluent</span>
            <span>PT-BR - Native</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
          <span></span>
          <span>Computer Science Bachelors Degree - Estácio</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
      </div>
    </main>
  )
}
