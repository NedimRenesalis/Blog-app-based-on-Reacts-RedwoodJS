import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Blog application</Link>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <p>This page tells you about stuff!</p>
      </main>
    </>
  )
}

export default AboutPage
