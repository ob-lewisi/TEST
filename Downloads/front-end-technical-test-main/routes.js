import { Route, Switch, Router} from 'react-router-dom';
import React from 'React';
import ProductPage from './pages/productPage'
// import { HomePage, ProductPage } from './containers/';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/product" component={ProductPage} />
    </Router>
  );
};

export default Routes;
