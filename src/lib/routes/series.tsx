import React from 'react';
import { mount, route, redirect } from 'navi';
import { getSeries, getBook } from '../api';
import Series from '../../components/pages/Series';
import Book from '../../components/pages/Book';

export default mount({
    '/': redirect('/'),
    '/:series_id': route(async req => {
        const id = req.params.series_id;
        const series = await getSeries({ id });
        return {
            view: <Series series={series} seriesId={id} />,
        };
    }),
    '/:series_id/:book_id': route(async req => {
        const bookId = req.params.book_id;
        const book = await getBook({ id: bookId });
        return {
            view: <Book book={book} />,
        };
    }),
});
