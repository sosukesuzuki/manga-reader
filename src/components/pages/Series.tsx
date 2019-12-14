import React from 'react';
import { Series } from '../../lib/types';

interface Props {
    series: Series;
}

const Series: React.FC<Props> = ({ series }) => {
    return (
        <main>
            <h2>{series.title}</h2>
        </main>
    );
};

export default Series;
