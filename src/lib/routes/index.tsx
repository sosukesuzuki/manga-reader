import React from 'react';
import { mount, route } from 'navi';
import { getAllSeries } from '../api';
import Top from '../../components/pages/Top';
import series from './series';

export const routes = mount({
    '/': route({
        title: '漫画リーダーへようこそ！',
        getData: () => getAllSeries(),
        view: <Top />,
    }),
    '/series': series,
});
