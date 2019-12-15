import React, { useReducer, Reducer, useMemo } from 'react';
import styled from 'styled-components';
import { Book } from '../../lib/types';
import Viewer from '../organisms/BookPage/Viewer';
import BackButton from '../organisms/BookPage/BackButton';
import Recommend from '../organisms/BookPage/Recommend';

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
    const { imageData, seriesId } = book;
    const [state, dispatch] = useReducer(reducer, initialState);
    const { currentPage } = state;
    const isCompletedReading = useMemo(
        () => !(currentPage < imageData.length),
        [imageData, currentPage],
    );
    return (
        <Container>
            <BackButton seriesId={seriesId} />
            {isCompletedReading ? (
                <Recommend />
            ) : (
                <Viewer
                    imageData={imageData}
                    currentPage={currentPage}
                    dispatch={dispatch}
                />
            )}
        </Container>
    );
};

export default React.memo(Book);
