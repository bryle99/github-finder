import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const inititalState = null; // there is only one state which is alert

  const [state, dispatch] = useReducer(AlertReducer, inititalState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    // this.setState({
    //   alert: { msg: msg, type: type },
    // });
    // set alert to null after timeout
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), '3000');
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
