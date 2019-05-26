import Head from './components/Head';
import NavBar from './components/NavBar';

import "../scss/bootstrap.scss";

export default function Error() {
  return (
    <div>
        <Head title="Todo List" />
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            <h1>Oops</h1>
            <p>Something has gone a little wrong.</p>
            <p></p>
            </div>
          </div>
        </div>
      </div>  
  );
}
