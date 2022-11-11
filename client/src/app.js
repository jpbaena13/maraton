import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Popup from 'unc-react-creator/dist/Containers/Popup';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';
import TimeAgo from 'javascript-time-ago'; // eslint-disable-line
import es from 'javascript-time-ago/locale/es'; // eslint-disable-line
import reducers from './redux/reducers';

import WelcomePage from './pages/WelcomePage';

import 'antd/dist/antd.less';
import './assets/sass/app.scss';

TimeAgo.addDefaultLocale(es);

const App = () => (
  <Switch>
    <Route exact path='/'>
      <WelcomePage />
    </Route>
  </Switch>
);

/* eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */

const store = createStore(
  reducers,
  {},
  composeSetup(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Popup />
    <BrowserRouter>
      <ConfigProvider locale={esES}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
