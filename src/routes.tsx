import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'src/redux/store';
import Home from 'src/pages/home/home';
import About from 'src/pages/about/about';
import ActivateUser from 'src/pages/activate-user/activate-user';
import CategoryDetail from 'src/pages/category-detail/category-detail';
import PostDetail from 'src/pages/post-detail/post-detail';

const Routes = (): React.ReactElement => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/activate/:token">
          <Provider store={store}>
            <ActivateUser />
          </Provider>
        </Route>
        <Route path='/about'>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}><About /></PersistGate>
          </Provider>
        </Route>
        <Route path="/:category/:post">
          <Provider store={store}>
            <PostDetail />
          </Provider>
        </Route>
        <Route path="/:category">
          <Provider store={store}>
            <CategoryDetail />
          </Provider>
        </Route>
        <Route path='/'>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}><Home /></PersistGate>
          </Provider>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
