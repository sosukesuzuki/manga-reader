import React from 'react';
import styled from 'styled-components';
import { useCurrentRoute } from 'react-navi';
import { Series } from '../../lib/types';
import SeriesCard from '../organisms/TopPage/SeriesCard';
import { MAX_WIDTH } from '../../lib/constants';

const Container = styled.div`
    padding-top: 10px;
    margin: 0 auto;
    max-width: ${MAX_WIDTH};
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Top: React.FC = () => {
    const route = useCurrentRoute();
    const serieses: Series[] = route.data.data;
    return (
        <Container>
            <h1>漫画一覧</h1>
            <CardContainer>
                {serieses.map(series => (
                    <SeriesCard
                        key={series.seriesId}
                        id={series.seriesId}
                        title={series.title}
                        description={series.description}
                        imgUrl={series.seriesImage}
                    />
                ))}
            </CardContainer>
        </Container>
    );
};

export default Top;
