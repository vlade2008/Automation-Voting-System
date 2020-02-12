import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../components/Home/index';
import Login from '../components/Login/index';

const routes = [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/home",
      component: Home,
    }
  ];

  export default function RouteConfigExample() {
    return (
      <Router>
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }

  // A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }