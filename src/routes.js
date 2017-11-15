import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';

export default (
    <Switch>
        <Route exact path="/" component={Posts} />
    </Switch>
);
