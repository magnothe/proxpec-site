import { equipe } from '../data/equipe.js'

function iniciais(nome) {
  const partes = nome.split(' ')
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase()
}

function Membro({ m }) {
  return (
    <article className="member">
      <div className="avatar">
        {m.foto ? <img src={m.foto} alt={`Foto de ${m.nome}`} /> : <span>{iniciais(m.nome)}</span>}
      </div>
      <h3>{m.nome}</h3>
      <span className="role">{m.frente}</span>
      <p className="member-summary">{m.resumo}</p>
      <ul className="member-list">
        {m.fez.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="matricula">Matrícula {m.matricula}</span>
    </article>
  )
}

export default function Equipe() {
  return (
    <section className="section team">
      <div className="container">
        <div className="team-head">
          <span className="eyebrow">Divisão da equipe</span>
          <h1>Nosso time</h1>
          <p className="lead">
            Cada integrante assumiu uma frente do projeto. Todo requisito virou uma issue, fechada apenas depois de
            revisão por Pull Request.
          </p>
        </div>

        <div className="members">
          {equipe.map((m) => (
            <Membro key={m.matricula} m={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
