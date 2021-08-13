import React, { useState } from 'react';
import axios from 'axios';
import Backdrop from '../UI/Backdrop';

const withLoading = WrappedComponent => props => {

  const [show, setShow] = useState(false);

  axios.interceptors.request.use(
    (config) => {
      setShow(true);
      return config;
    },
    (error) => {
      setShow(false);
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (response) => {
      setShow(false);
      return response;
    },
    (error) => {
      setShow(false);
      return Promise.reject(error);
    },
  );

    return (
      <div>
        <Backdrop show={show} message="Loading...." />
        <WrappedComponent {...props}/>
      </div>
    );
}

export default withLoading;