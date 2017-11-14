import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';

const Greeting = () => {
    return (
        <div>
            What's up
        </div>
    );
};

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/greet" component={Greeting} />
    </Switch>
);
