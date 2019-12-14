import React, { Suspense } from 'react';
import { routes } from '../lib/routes';
import { Router, View } from 'react-navi';
import Layout from '../components/Layout';
import Loading from './molecules/Loading';

const App: React.FC = () => {
    return (
        <Router routes={routes}>
            <Layout>
                <Suspense fallback={<Loading />}>
                    <View />
                </Suspense>
            </Layout>
        </Router>
    );
};

export default App;
