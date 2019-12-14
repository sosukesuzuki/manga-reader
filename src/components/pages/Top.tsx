import React from 'react';
import styled from 'styled-components';
import { useCurrentRoute } from 'react-navi';
import { Series } from '../../lib/types';
import SeriesCard from '../organisms/SeriesCard';

const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    flex-wrap: wrap;
`;

const Top: React.FC = () => {
    const route = useCurrentRoute();
    const serieses: Series[] = route.data.data;
    return (
        <main>
            <p>ようこそ、漫画リーダーへ</p>
            <CardContainer>
                {serieses.map(series => {
                    return (
                        <SeriesCard
                            key={series.seriesId}
                            id={series.seriesId}
                            title={series.title}
                            description={series.description}
                            imgUrl={series.seriesImage}
                        />
                    );
                })}
            </CardContainer>
        </main>
    );
};

export default Top;
