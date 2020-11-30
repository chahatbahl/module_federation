import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from 'app1/Navigation';
import React from 'react';
import localRoutes from './routes';
// import remoteRoutesApp0 from 'app1/routes';
import remoteRoutesApp1 from 'app1/routes';

const routes = [...localRoutes, ...remoteRoutesApp1];

const App = () => (
    <HashRouter>
        <div>
            <Navigation />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    ))}
                </Switch>
            </React.Suspense>
        </div>
    </HashRouter>
);

export default App;
