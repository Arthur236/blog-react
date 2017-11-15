import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>Header</h1>
            <Router>
                {routes}
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
