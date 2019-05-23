import  Link from 'next/link'

const NavBar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link href="">
            <a className="navbar-brand">ToDo</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navBar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>       
        </nav>
      );
}

export default NavBar;