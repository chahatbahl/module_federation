import React from 'react';

const HotelPage = React.lazy(() => import('./HotelPage'));

const routes = [
    {
        path: '/hotel',
        component: HotelPage,
        exact: true
    },
];

export default routes;
