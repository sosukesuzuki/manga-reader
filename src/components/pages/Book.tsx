import React, { useReducer, Reducer } from 'react';
import styled from 'styled-components';
import { Book } from '../../lib/types';
import Viewer from '../organisms/BookPage/Viewer';
import BackButton from '../organisms/BookPage/BackButton';

const Container = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
    z-index: 0;
`;

interface Props {
    book: Book;
}

interface State {
    currentPage: number;
}

export interface Action {
    type: 'incrementPage' | 'decrementPage';
    payload?: any;
}

const initialState: State = {
    currentPage: 0,
};

const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case 'incrementPage':
            return { ...state, currentPage: state.currentPage + 1 };
        case 'decrementPage':
            return { ...state, currentPage: state.currentPage - 1 };
    }
};

const Book: React.FC<Props> = ({ book }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Container>
            <BackButton seriesId={book.seriesId} />
            <Viewer
                book={book}
                currentPage={state.currentPage}
                dispatch={dispatch}
            />
        </Container>
    );
};

export default React.memo(Book);
