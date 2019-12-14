import React from 'react';
import styled from 'styled-components';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { MAX_WIDTH } from '../../lib/constants';

const CenteredGroup = styled(Navbar.Group)`
    width: ${MAX_WIDTH};
    margin: 0 auto;
`;

const TopNav: React.FC = () => {
    return (
        <Navbar fixedToTop>
            <CenteredGroup align={Alignment.CENTER}>
                <Navbar.Heading>漫画リーダー</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
            </CenteredGroup>
        </Navbar>
    );
};

export default TopNav;
