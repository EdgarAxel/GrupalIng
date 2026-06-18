import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca de nosotros</h1>

      <div id="info">
        Somos el equipo nº 02
      </div>

      <section className="team-section">
        <h2>Integrantes del equipo</h2>

        <article className="team-member">
          <h3>SAUS AMORÓS</h3>
          <p>
            Aportación: participación en el desarrollo de la actividad, centrada principalmente en la implementación del footer y su prueba automatizada.
          </p>
        </article>

        <article className="team-member">
          <h3>CASTILLO ZARAPUZ</h3>
          <p>
            Aportación: participación en el desarrollo de la actividad, centrada principalmente en la ampliación de la sección About, su prueba de aceptación y la documentación asociada.
          </p>
        </article>

        <article className="team-member">
          <h3>GONZÁLEZ FERNÁNDEZ</h3>
          <p>
            Aportación: participación en el desarrollo de la actividad, centrada principalmente en la revisión del Header, el ajuste de la navegación y la validación de su prueba.
          </p>
        </article>

        <article className="team-member">
          <h3>RAMOS AÍSA</h3>
          <p>
            Aportación: pendiente de registrar en el desarrollo de la actividad.
          </p>
        </article>

        <article className="team-member">
          <h3>ALONSO CANO</h3>
          <p>
            Aportación: pendiente de registrar en el desarrollo de la actividad.
          </p>
        </article>
      </section>
    </div>
  )
}

export default About