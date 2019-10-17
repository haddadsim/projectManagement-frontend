/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import axios from 'axios';
import { GET_ERRORS } from './types';
// import history from '../history';


const createProject = (project) => async dispatch => {
  try {
    await axios.post('http://localhost:8080/api/project', project);
    window.history.back();
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    });
  }
};

export default createProject;
