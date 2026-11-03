/* ----------------------------
App.jsx -> Composant principal de l'application React

==> Affiche les diff parties du portfolio 
---------------------------- */
import './App.css'


//Fonction : affiche le contenu principal du portfolio 
//Paramètre : aucun 
//Return : du JSX (élément affiché par React)
function App() {
  return (
    <main>
      <section className='hero'>

        <div className='hero-content'>
          <p className='hero-label'>
            Développement Web · Cybersécurité
          </p>
          <h1 className='hero-title'>
            Bonjour, moi c'est <span>Clara.</span>
          </h1>
          <p className='hero-description'>
            Étudiante en deuxième année de Bachelor Développement Web, je souhaite me spécialiser en cybersécurité.
          </p>
          <a className='hero-button' href='#projects'>
            Découvrir mes projets
          </a>
        </div>

      </section>
    </main>
  )
}


export default App