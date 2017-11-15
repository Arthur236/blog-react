import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import PostsNew from './components/PostsNew';

export default (
    <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/new" component={PostsNew} />
    </Switch>
);
