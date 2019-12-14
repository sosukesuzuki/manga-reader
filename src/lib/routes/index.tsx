import React from 'react';
import { mount, route } from 'navi';
import { getAllSeries, getSeries } from '../api';
import Top from '../../components/pages/Top';
import Series from '../../components/pages/Series';

export const routes = mount({
    '/': route({
        title: '漫画リーダーへようこそ！',
        getData: () => getAllSeries(),
        view: <Top />,
    }),
    '/series': mount({
        '/:id': route(async req => {
            const id = req.params.id;
            const series = await getSeries({ id });
            return {
                view: <Series series={series} />,
            };
        }),
    }),
});
