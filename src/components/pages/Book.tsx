import React from 'react';
import styled from 'styled-components';
import { Book } from '../../lib/types';
import Viewer from '../organisms/BookPage/Viewer';

const Container = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
    z-index: 0;
`;
const BackButton = styled.div`
    position: absolute;
    left: 2px;
    top: 10px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
`;

interface Props {
    book: Book;
}

const Book: React.FC<Props> = ({ book }) => {
    return (
        <Container>
            <BackButton />
            <Viewer book={book} />
        </Container>
    );
};

export default React.memo(Book);
