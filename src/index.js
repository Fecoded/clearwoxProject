import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { store, persistor } from  './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.register()
