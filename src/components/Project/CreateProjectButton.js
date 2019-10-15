import React from 'react';
import { Link } from 'react-router-dom';
import './CreateProjectButton.css';

const CreateProjectButton = () => (
  <div className="create-button">
    <Link to="/addProject" className="btn btn-lg btn-info">
    Create a Project
    </Link>
  </div>
);

export default CreateProjectButton;
