import logo from './logo.svg';
import './styles/styles.scss'
import Curso from './Curso';

function App() {
  return (
    <>
    <section className="main-banner background grey-800 l-section">
      <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">

        <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
          <h1>Banner principal de dos columnas con EDgrid</h1>
          <p>Creado utilizando los componentes de columnas. Totalmente responsive.</p>
          <div className="s-main-center">
            <a className="button s-mr-2 s-mb-2 m-mb-0">Botón 1</a>
            <a className="button s-mb-2 m-mb-0">Botón 2</a>
          </div>
        </div>
        <div>
          <div className="img-container s-ratio-16-9">
            <img className="s-radius-1" alt="logo" src="https://crehana-blog.s3.amazonaws.com/media/filer_public/6f/0d/6f0d1782-237a-40aa-a5b9-25b1b15cc694/crehana-cursos-gratis-setiembre.jpg" />
          </div>
        </div>
      </div>
    </section>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
    </>
  );
}

export default App;
