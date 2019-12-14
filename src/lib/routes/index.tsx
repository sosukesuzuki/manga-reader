import React from 'react';
import { mount, route, redirect } from 'navi';
import { getAllSeries, getSeries, getBook } from '../api';
import Top from '../../components/pages/Top';
import Series from '../../components/pages/Series';
import Book from '../../components/pages/Book';

export const routes = mount({
    '/': route({
        title: '漫画リーダーへようこそ！',
        getData: () => getAllSeries(),
        view: <Top />,
    }),
    '/series': mount({
        '/': redirect('/'),
        '/:series_id': route(async req => {
            const id = req.params.series_id;
            const series = await getSeries({ id });
            return {
                view: <Series series={series} />,
            };
        }),
        '/:series_id/:book_id': route(async req => {
            const bookId = req.params.book_id;
            const book = await getBook({ id: bookId });
            return {
                view: <Book book={book} />,
            };
        }),
    }),
});
