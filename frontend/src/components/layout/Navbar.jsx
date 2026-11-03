/* ----------------------------
Navbar.jsx -> Barre navigation du portfolio 

==> Affiche logo + lien nav 
---------------------------- */
import './Navbar.css'
import { useState } from 'react' 

//Fonction : affiche barre de navigation 
//Paramètre : aucun
//Return : du JSX (structure navbar) 
function Navbar() {
    //State : indique si menu mobiile est ouvert / fermé
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    //Fonction : fermer menu mobile apres clic sur un lien
    //Paramètre : aucun
    //Return : aucun (MAJ state)
    function closeMenu() {
        setIsMenuOpen(false)
    }
    return (
        <header className='navbar'>

            <nav className='navbar-content' aria-label='Navigation principale'>
                <a className='navbar-logo' href='#home' onClick={closeMenu}>
                    Clara<span>.</span>
                </a>

                {/* bouton ouvre / ferme menu mobile */}
                <button 
                    className='navbar-toggle'
                    type='button'
                    aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls='navbar-links'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                <div id='navbar-links' className={`navbar-links ${isMenuOpen ? 'is-open' : ''}`}>
                    <a href='#home' onClick={closeMenu}>Accueil</a>
                    <a href='#about' onClick={closeMenu}>À propos</a>
                    <a href='#experiences' onClick={closeMenu}>Expériences</a>
                    <a href='#skills' onClick={closeMenu}>Compétences</a>
                    <a href='#education' onClick={closeMenu}>Formation</a>
                    <a href='#projects' onClick={closeMenu}>Projets</a>
                    <a href='#contact' onClick={closeMenu}>Contact</a>
                </div>
            </nav>
        </header>
    )
}


export default Navbar