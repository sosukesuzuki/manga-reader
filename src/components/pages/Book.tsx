import React from 'react';
import { Book } from '../../lib/types';
import Viewer from '../organisms/BookPage/Viewer';

interface Props {
    book: Book;
}

const Book: React.FC<Props> = ({ book }) => {
    return <Viewer book={book} />;
};

export default Book;
