import React from 'react';
import TopNav from './template/TopNav';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <TopNav />
            {children}
        </div>
    );
};

export default Layout;
