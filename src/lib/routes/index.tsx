import React from 'react';
import { mount, route, lazy } from 'navi';
import { getAllSeries } from '../api';
import Top from '../../components/pages/Top';

export const routes = mount({
    '/': route({
        title: '漫画リーダーへようこそ！',
        getData: () => getAllSeries(),
        view: <Top />,
    }),
    '/series': lazy(() => import('./series')),
});
