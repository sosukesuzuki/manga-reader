import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Card, Button } from '@blueprintjs/core';
import { useNavigation } from 'react-navi';

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

interface Props {
    decrementPage: () => void;
}

const Recommend: React.FC<Props> = ({ decrementPage }) => {
    const navigation = useNavigation();
    const navigatoToTop = useCallback(() => {
        navigation.navigate('/');
    }, []);
    return (
        <AbsolutedCard>
            <h2>読み終わりました！</h2>
            <Button onClick={navigatoToTop}>トップページにもどる</Button>
            <Button onClick={decrementPage}>前のページに戻る →</Button>
        </AbsolutedCard>
    );
};

export default React.memo(Recommend);
