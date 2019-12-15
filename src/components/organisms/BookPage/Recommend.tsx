import React, { useCallback, lazy } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { useNavigation } from 'react-navi';
const Button = lazy(() => import('react-bootstrap/Button'));

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
            <Card.Body>
                <Card.Title>読み終わりました！</Card.Title>
                <Button onClick={navigatoToTop}>トップページにもどる</Button>
                <Button onClick={decrementPage}>前のページに戻る →</Button>
            </Card.Body>
        </AbsolutedCard>
    );
};

export default React.memo(Recommend);
