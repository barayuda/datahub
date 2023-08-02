import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import { SideBar } from './SideBar';
import { PageLayout } from './PageLayout';

function MainLayout() {
  let match = useRouteMatch();
  return (
    <div id='main-wrapper'>
      <SideBar />
      <Switch>
        <Route path={`${match.path}/page-1`}>
          <PageLayout id={1} />
        </Route>
        <Route path={`${match.path}/page-2`}>
          <PageLayout id={2} />
        </Route>
        <Route path={match.path}>
          <h4>Home Page </h4>
        </Route>
      </Switch>
    </div>
  );
}

export {
  MainLayout
};