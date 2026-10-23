import './App.css';

function App() {
  return (
    <div className="page">
      <aside className="sidebar">
        <nav className="side-menu" aria-label="Menu lateral">
          <a href="#inicio">INÍCIO</a>
          <a href="#novidades" className="selected">NEWS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">LOGIN</a>
        </nav>

        <div className="location-icon" aria-hidden="true">
          <svg viewBox="0 0 32 42" role="img">
            <path
              d="M16 1C7.7 1 1 7.7 1 16c0 11 15 25 15 25s15-14 15-25C31 7.7 24.3 1 16 1Z"
              fill="#df27e9"
            />
            <circle cx="16" cy="15" r="5" fill="white" />
          </svg>
        </div>
      </aside>

      <main className="content" id="inicio">
        <section className="hero">
          <img
            className="illustration"
            src="/imagens/img1.jpg"
            alt="Pessoas explorando destinos em um globo terrestre"
          />

          <div className="text-content">
            <h1>
              O seu próximo <span>destino</span> pode estar aqui...
            </h1>

            <p className="subtitle">
              Aqui você encontra uma seleção de{' '}
              <strong>pacotes completos</strong> para as suas férias!
            </p>

            <p className="description" id="sobre">
              No <strong>ConnectFlight</strong> você encontra pacotes de viagens
              nacionais e internacionais que incluem: passagens aéreas, hotéis,
              café da manhã, e até seguro viagem com{' '}
              <strong>preços arrasadores!</strong>
            </p>

            <p className="offers-text" id="novidades">
              Se você ainda não tem um destino definido, confira nossa seção de ofertas.
            </p>
          </div>

          <nav className="bottom-links" aria-label="Links do rodapé">
            <a href="#sobre">Destinos</a>
            <a href="#novidades">Ofertas</a>
            <a href="#contato">Contato</a>
          </nav>
        </section>

        <footer className="wave-footer" id="contato">
          <img src="/imagens/Wave.png" alt="" />
        </footer>
      </main>
    </div>
  );
}

export default App;