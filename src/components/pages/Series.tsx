import React from 'react';
import styled from 'styled-components';
import { Series } from '../../lib/types';
import SeriesImage from '../organisms/SeriesPage/SeriesImage';
import { MAX_WIDTH } from '../../lib/constants';

const Body = styled.div`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    padding: 20px;
`;

interface Props {
    series: Series;
}

const Series: React.FC<Props> = ({ series }) => {
    const { seriesImage, title, description } = series;
    return (
        <main>
            <SeriesImage image={seriesImage} />
            <Body>
                <h2>{title}</h2>
                <p>{description}</p>
            </Body>
        </main>
    );
};

export default Series;
