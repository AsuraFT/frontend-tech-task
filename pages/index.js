import Layout from "../components/common/MyLayout";
import ToDos from "../components/ToDo/ToDos";
import ToDoForm from "../components/ToDo/ToDoForm";

import data from '../data/sample.json';

import "../scss/bootstrap.scss";

const Index = props => (
  <Layout title="ToDo list" description="The homepage for my ToDo application">
    <div className="jumbotron">
      <h1>ToDo</h1>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <ToDos items={data} />
      </div>
      <div className="col-sm-6">
        <ToDoForm />
      </div>
    </div>
  </Layout>
);

export default Index;
