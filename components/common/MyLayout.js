import Head from "./Head";
import NavBar from "./NavBar";

const Layout = props => (
  <>
    <Head title={ props.title } description={ props.description } />
    <NavBar />

    <div className="container">{props.children}</div>
  </>
);

export default Layout;
