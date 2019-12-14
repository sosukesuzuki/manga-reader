import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';

const TopNav: React.FC = () => {
    return (
        <Navbar fixedToTop>
            <Navbar.Group align={Alignment.CENTER}>
                <Navbar.Heading>漫画リーダー</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
            </Navbar.Group>
        </Navbar>
    );
};

export default TopNav;
