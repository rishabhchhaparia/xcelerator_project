import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ItemList';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Main from './components/Main.component';
import Cards from './components/cardList/cards';
import CardDescription from './components/cardDescription/description';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()
const store = configureStore();

render(
    <Provider store={ store }>
      <Router history={hashHistory}>
        <Route path={`/`} component={ App }>
          <IndexRoute component={ Cards } />
          <Route path="details/:id" component={CardDescription}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);
