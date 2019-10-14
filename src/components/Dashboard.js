import React from 'react';
import ProjectItems from './Project/ProjectItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => (
  <div className="projects">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4 text-center">Projects</h1>
          <br />
          <a href="ProjectForm.html" className="btn btn-lg btn-info">
                Create a Project
          </a>
          <br />
          <hr />
          <ProjectItems />
        </div>
      </div>
    </div>
  </div>
);


export default Dashboard;
