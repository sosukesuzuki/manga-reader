import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { MAX_WIDTH } from '../../lib/constants';
import { useNavigation } from 'react-navi';

const CenteredGroup = styled(Navbar.Group)`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
`;

const TopNav: React.FC = () => {
    const navigation = useNavigation();
    const handleClickHomeButton = useCallback(() => {
        navigation.navigate('/');
    }, [navigation]);
    return (
        <Navbar fixedToTop>
            <CenteredGroup align={Alignment.CENTER}>
                <Navbar.Heading>漫画リーダー</Navbar.Heading>
                <Navbar.Divider />
                <Button
                    className="bp3-minimal"
                    icon="home"
                    text="Home"
                    onClick={handleClickHomeButton}
                />
            </CenteredGroup>
        </Navbar>
    );
};

export default TopNav;
