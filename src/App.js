import React from "react";
import Map from "./components/map"
import {
  HashRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function App() {
  let routes = [
    '/agropuro/baderan',
    '/ijen/paltuding',
    '/kerinci/kerisik-tuo',
    '/lawu/cemoro-kandang',
    '/merapi/selo',
    '/merbabu/selo',
    '/merbabu/suwanting',
    '/rinjani/sembalun',
    '/rinjani/senaru',
    '/semeru/raung-kalibaru',    
    '/sindoro/kledung',    
  ]
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/:mountainId/:trackId' component={Map}/>
          <Route path='/'>
            <ul>
              {
                routes.map((route) => {
                  return (
                    <li key={route}>
                      <Link to={route}>{route}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </Route>
        </Switch>
    </Router>
  );
}

