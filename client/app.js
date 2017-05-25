import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { render } from 'react-dom';
import css from './css/common.styl';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/itemList';
import Main from './components/Main.component';
import Cards from './components/cardList/cards';
import CardDescription from './components/cardDetails/Details';

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
