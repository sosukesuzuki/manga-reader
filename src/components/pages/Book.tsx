import React from 'react';
import { Book } from '../../lib/types';

interface Props {
    book: Book;
}

const Book: React.FC<Props> = ({ book }) => {
    const { title } = book;
    return <h1>{title}</h1>;
};

export default Book;
