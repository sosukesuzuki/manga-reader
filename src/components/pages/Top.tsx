import React from 'react';
import { useCurrentRoute } from 'react-navi';
import { Series } from '../../lib/types';

const Top: React.FC = () => {
    const route = useCurrentRoute();
    const serieses: Series[] = route.data.data;
    return (
        <main>
            <p>ようこそ、漫画リーダーへ</p>
            {serieses.map(series => {
                return (
                    <div key={series.seriesId}>
                        <p>{series.title}</p>
                        <img src={series.seriesImage} width="200" />
                        <p>{series.description}</p>
                    </div>
                );
            })}
        </main>
    );
};

export default Top;
