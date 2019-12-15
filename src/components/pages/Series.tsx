import React from 'react';
import styled from 'styled-components';
import { Series } from '../../lib/types';
import SeriesImage from '../organisms/SeriesPage/SeriesImage';
import { MAX_WIDTH } from '../../lib/constants';
import BookCard from '../organisms/SeriesPage/BookCard';
import { Link } from 'react-navi';

const Body = styled.div`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    padding: 20px;
    a {
        font-size: 20px;
    }
    h2 {
        font-size: 25px;
    }
    p {
        font-size: 18px;
        margin-bottom: 20px;
    }
`;
const BookCardList = styled.div`
    display: flex;
    flex-flow: column;
    @media screen and (min-width: 680px) {
        flex-flow: row;
        flex-wrap: wrap;
        .book-card {
            width: 350px;
            margin-right: 15px;
        }
    }
`;

interface Props {
    series: Series;
    seriesId: string;
}

const Series: React.FC<Props> = ({ series, seriesId }) => {
    const { seriesImage, title, description, books } = series;
    return (
        <main>
            <SeriesImage image={seriesImage} />
            <Body>
                <Link href="/">← 漫画一覧にもどる</Link>
                <h2>{title}</h2>
                <p>{description}</p>
                <BookCardList>
                    {books.map(book => (
                        <BookCard
                            key={book.id}
                            book={book}
                            seriesId={seriesId}
                        />
                    ))}
                </BookCardList>
            </Body>
        </main>
    );
};

export default Series;
