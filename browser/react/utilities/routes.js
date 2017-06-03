import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import App from '../components/App';
import Page from '../components/Page';
// import ContactContainer from '../containers/ContactContainer';
import ProductTemplate from '../templates/Product.jsx';
import TeamTemplate from '../templates/Team.jsx';
import NullTemplate from '../templates/Null.jsx';

import receiveTemplate from '../action-creators/templates';


const loadPage = (type) => {
  switch (type){
    case 'product':
      store.dispatch(receiveTemplate(ProductTemplate));
      break;

    case 'team':
      store.dispatch(receiveTemplate(TeamTemplate));
      break;

    default:
      store.dispatch(receiveTemplate(NullTemplate));
  }
};

export default function Root () {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/product" component={Page} onEnter={() => loadPage('product')} />
          <Route path="/team" component={Page} onEnter={() => loadPage('team')} />
        </div>
      </Router>
    </Provider>
  );
}
