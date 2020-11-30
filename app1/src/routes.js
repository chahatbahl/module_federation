import React from 'react';

const FlightPage = React.lazy(() => import('./FlightPage'));

const routes = [
    {
        path: '/flight',
        component: FlightPage,
        exact: true
    }
];

export default routes;
