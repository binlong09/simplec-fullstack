import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  CREATE_EVENTS,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAIL,
  UPDATE_EVENTS,
  UPDATE_EVENTS_SUCCESS,
  UPDATE_EVENTS_FAIL,
  DELETE_EVENTS,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAIL,
  EVENTS_LOADING
} from './types';
import { tokenConfig } from './authActions';

export const getEvents = () => dispatch => {
  dispatch({ type: EVENTS_LOADING });

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjODgxODNhMzcwNDkzOWVjMGM0OTE5OCIsImlhdCI6MTU1NjQ3MzY3MSwiZXhwIjoxNTU2NDc3MjcxfQ.jbp1wBSygY_z0w1SEDdkhrWia2_9VpnyABh4UZZe_lI'
    }
  }

  axios
    .get('/api/events', config)
    .then(res => dispatch({
        type: GET_EVENTS,
        payload: res.data
      })
    )
    .catch(err =>
      // dispatch(returnErrors(err.response.data, err.response.status))
      console.log(err)
    );
  console.log("get event called")
}

export const createEvents = (date, text) => {
  console.log("Im here in actions boy");
  console.log(date.format());
  console.log(text);
}