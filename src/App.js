import React, { useState } from "react";
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Layout from "./hoc/Layout";
import Quiz from "./containers/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreate from "./containers/QuizCreate/QuizCreate";
import MenuToggle from "./components/MenuToggle";
import MenuList from "./components/MenuList";

import classes from "./App.module.scss";

const routes = [
  {
    path: "/",
    component: QuizList,
    exact:true
  },
{
  path: "/quiz/:quiz",
  component: Quiz,
},

  {
    path: "/quiz",
    component: Quiz,
    routes: [
      {
        path: "/quiz/:quiz",
        component: Quiz,
      },
    ],
  },
  {
    path: "/quizcreate",
    component: QuizCreate,
  },
  {
    path: "/auth",
    component: Auth,
  },
];

function App() {
  let [state, setState] = useState(false);

  const toggleНandler = () => {
    setState((state = !state));
  };

  const onCloseMenuHAndler = () => {
    setState((state = false));
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <MenuList state={state} onClickHAndler={onCloseMenuHAndler} />
      <Layout>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}  />
          ))}
          <Redirect to="/" />
        </Switch>
        <MenuToggle toggleНandler={toggleНandler} status={!state} />
      </Layout>
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact ={route.exact}
      render={(props) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


export default App;
