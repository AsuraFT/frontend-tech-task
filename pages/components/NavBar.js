import  Link from 'next/link'

const NavBar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
          <Link href="">
            <a className="navbar-brand">Todo</a>
          </Link>          
        </nav>
      );
}

export default NavBar;