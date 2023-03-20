import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

export const inject = parentElementId =>
  ReactDOM.render(<App />, document.getElementById(parentElementId));

export const unmount = parentElementId => {
  const element = document.getElementById(parentElementId);
  if (!element) {
    return
  }
  ReactDOM.unmountComponentAtNode(document.getElementById(parentElementId));
}

export const appName = 'remote-app3';

