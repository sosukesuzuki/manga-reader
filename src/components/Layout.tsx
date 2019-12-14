import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <header>
                <h1>漫画リーダー</h1>
            </header>
            {children}
        </div>
    );
};

export default Layout;
