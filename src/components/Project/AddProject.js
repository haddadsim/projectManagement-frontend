/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import createProject from '../../Actions/projectActions';

const AddProject = (props) => {
  const [values, setValues] = useState({
    projectName: '', projectIdentifier: '', description: '', startDate: '', endDate: '', errors: {},
  });

  useEffect(() => {
    if (props.errors) {
      setValues({ ...values, errors: props.errors });
    }
  }, [props.errors]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      projectName: values.projectName,
      projectIdentifier: values.projectIdentifier,
      description: values.description,
      startDate: values.startDate,
      endDate: values.endDate,
    };

    props.createProject(newProject);
  };


  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Create / Edit Project form</h5>

            <hr />
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Project Name"
                  name="projectName"
                  value={values.projectName}
                  onChange={onChange}
                  required
                />
                <p>{values.errors.projectName}</p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={values.projectIdentifier}
                  onChange={onChange}
                  required
                />
                <p>{values.errors.projectIdentifier}</p>
              </div>

              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  name="description"
                  value={values.description}
                  onChange={onChange}
                  required
                />
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="startDate"
                  value={values.startDate}
                  onChange={onChange}
                  required
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="endDate"
                  value={values.endDate}
                  onChange={onChange}
                />
                <p>{values.errors.description}</p>
              </div>

              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

AddProject.defaultProps = {
  errors: {},
};

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.objectOf({}),
};

export default connect(mapStateToProps, { createProject })(AddProject);
