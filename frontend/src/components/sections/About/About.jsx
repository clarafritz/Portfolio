/* ----------------------------
About.jsx -> Section "A propos" portfolio
---------------------------- */
import './About.css';


//Fonction : affiche section "A propos"
//Paramètre : aucun 
//Return : du JSX
function About() {
    return (
        <section className='about' id='about'>

            <div className='about-title'>
                <h2>A propos</h2>
                <h3>Du développement Web à la cybersécurité</h3>
            </div>

            <div className='about-timeline'>
                <div className='timeline-labels'>
                    <span>Mon parcours</span>
                    <span>Mes découvertes</span>
                    <span>La suite</span>
                </div>

                <div className='timeline-line' aria-hidden='true'>
                    <span className='timeline-circle'></span>
                    <span className='timeline-circle'></span>
                    <span className='timeline-star'>✦</span>
                </div>
            </div>

            <div className='about-cards'>
                <article className='about-card'>
                    <span className='card-status'>01 · Acquis</span>
                    <h4>Développement Fullstack</h4>
                    <p>
                        En deuxième année de Bachelor Développement Web
                        à la 3W Academy. J'ai déjà effectué un stage
                        en développement web.
                    </p>
                </article>

                <article className='about-card'>
                    <span className='card-status'>02 · En cours</span>
                    <h4>Découverte de la cybersécurité</h4>
                    <p>
                        Je découvre la cybersécurité avec TryHackMe,
                        Root-Me et des formations en ligne,
                        notamment Columbia+.
                    </p>
                </article>

                <article className='about-card'>
                    <span className='card-status'>03 · À venir</span>
                    <h4>Spécialisation cyber</h4>
                    <p>
                        Je souhaite me spécialiser en cybersécurité
                        en troisième année de Bachelor,
                        à partir de septembre 2027.
                    </p>
                </article>
            </div>

            <div className='opportunities-title'>
                <span>Opportunités 2027</span>
                <h3>Et si on travaillait ensemble ?</h3>
            </div>

            <div className='opportunities-cards'>
                <article className='opportunity-card'>
                    <div className='opportunity-heading'>
                        <svg
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.7'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            aria-hidden='true'
                        >
                            <rect x='3' y='5' width='18' height='16' rx='2' />
                            <path d='M16 3v4M8 3v4M3 10h18' />
                        </svg>

                        <h4>Stage en cybersécurité</h4>
                    </div>

                    <p className='opportunity-date'>05 avril - 31 juillet 2027</p>
                    <p className='opportunity-description'>
                        Découvrir la cybersécurité en entreprise 
                        et apprendre aux côtés de professionnels.
                    </p>
                    <span className='opportunity-note'>Première expérience en cyber recherchée</span>
                </article>

                <article className='opportunity-card'>
                    <div className='opportunity-heading'>
                        <svg
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.7'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            aria-hidden='true'
                        >
                            <rect x='3' y='7' width='18' height='14' rx='2' />
                            <path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2' />
                        </svg>

                        <h4>Alternance en cybersécurité</h4>
                    </div>

                    <p className='opportunity-date'>12 mois · Septembre 2027</p>
                    <p className='opportunity-description'>
                        Accompagner ma spécialisation en troisième
                        année, avec une poursuite possible en master.
                    </p>
                    <span className='opportunity-note'>Possibilité de poursuivre 24 mois supplémentaires par la suite</span>
                </article>
            </div>

            <a className='about-contact-button' href='#contact'>
                Me contacter
            </a>
        </section>
    )
}


export default About; 