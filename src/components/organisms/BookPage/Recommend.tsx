import React from 'react';
import styled from 'styled-components';
import { Card } from '@blueprintjs/core';

const AbsolutedCard = styled(Card)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 500px;
    height: 300px;
    @media screen and (max-width: 679px) {
        margin: auto;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and (min-width: 680px) {
        margin: auto;
    }
`;

const Recommend: React.FC = () => {
    return (
        <AbsolutedCard>
            <h2>読み終わりました！</h2>
        </AbsolutedCard>
    );
};

export default Recommend;
