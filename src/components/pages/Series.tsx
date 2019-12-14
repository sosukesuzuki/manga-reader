import React from 'react';
import { Series } from '../../lib/types';
import SeriesImage from '../organisms/SeriesPage/SeriesImage';

interface Props {
    series: Series;
}

const Series: React.FC<Props> = ({ series }) => {
    const { seriesImage } = series;
    return (
        <main>
            <SeriesImage image={seriesImage} />
        </main>
    );
};

export default Series;
