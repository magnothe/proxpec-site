import { Link } from 'react-router-dom'

const funcionalidades = [
  {
    titulo: 'Buscar comércios',
    texto:
      'Consulta o OpenStreetMap por tipo de comércio e cidade, com filtros para achar quem não tem site e tem celular. Também entende frases como “restaurantes em Fortaleza sem site”.',
  },
  {
    titulo: 'Carteira de leads',
    texto:
      'Organiza cada prospect em cinco etapas — novo, contatado, em negociação, fechado e perdido — com histórico datado de cada movimento.',
  },
  {
    titulo: 'Templates de mensagem',
    texto:
      'Modelos com as variáveis {{nome}}, {{empresa}} e {{segmento}}, substituídas em tempo real na prévia antes do envio.',
  },
  {
    titulo: 'Disparo pelo WhatsApp',
    texto:
      'Abre conversas em lote via wa.me com intervalo configurável, registra a tentativa e avança os leads novos para “contatado”.',
  },
  {
    titulo: 'Painel de conversão',
    texto:
      'Total de leads, novos do dia, taxa de conversão e gráfico semanal por status, com acesso direto ao WhatsApp dos leads recentes.',
  },
  {
    titulo: 'Importar e exportar',
    texto:
      'Importação de leads por CSV e exportação da carteira filtrada, aceitando separador vírgula ou ponto e vírgula.',
  },
]

const tecnologias = [
  'React 18', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts', 'Framer Motion',
  'Supabase', 'PostgreSQL + RLS', 'OpenStreetMap', 'Vercel Functions',
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Relatório Final · Etapa 3</span>
          <h1>
            Funil de prospecção para quem vende serviços a <span className="accent">negócios locais</span>
          </h1>
          <p className="lead">
            O Proxpec organiza a prospecção de freelancers e microagências que vendem sites, landing pages e
            tráfego pago — da busca do comércio até o cliente fechado.
          </p>

          <div className="video-frame">
            <video
              src="/media/prospecta.mp4"
              poster="/media/poster.jpg"
              controls
              preload="metadata"
              playsInline
            >
              Seu navegador não suporta vídeo.
            </video>
          </div>
          <p className="video-caption">Demonstração do sistema em uso</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>O problema</h2>
            <p>
              Quem vende serviços digitais para comércio local costuma prospectar em planilhas soltas, sem
              histórico de contato, sem lembrete de retorno e sem medir conversão. O Proxpec junta tudo isso em
              um só lugar, pensado para ser usado pelo celular entre uma visita e outra.
            </p>
          </div>
          <div>
            <h2>Para quem</h2>
            <ul className="checklist">
              <li>Quem trabalha sozinho ou em dupla, sem equipe comercial</li>
              <li>Quem gerencia entre 50 e 500 prospects por mês</li>
              <li>Quem usa o WhatsApp como primeiro contato</li>
              <li>Quem não tem orçamento nem tempo para um CRM comercial</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>O que o sistema faz</h2>
          <div className="features">
            {funcionalidades.map((f, i) => (
              <article className="feature" key={f.titulo}>
                <span className="feature-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.titulo}</h3>
                <p>{f.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Tecnologias</h2>
          <p className="muted">
            JavaScript da tela ao banco, com backend gerenciado: uma pilha escolhida para cinco pessoas e um
            semestre.
          </p>
          <div className="chips">
            {tecnologias.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container cta-inner">
          <div>
            <h2>Quem construiu o Proxpec</h2>
            <p className="muted">Cinco integrantes, quatro sprints de duas semanas.</p>
          </div>
          <div className="cta-actions">
            <a className="btn ghost" href="https://proxpec.vercel.app" target="_blank" rel="noreferrer">
              Abrir o sistema
            </a>
            <Link className="btn" to="/equipe">Conhecer a equipe →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
