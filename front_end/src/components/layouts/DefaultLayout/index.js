import React from 'react';
import Footer from '~/Footer';
import Header from '~/Header';

function DefaultLayout({ children, props }) {
    return (
        <div className="container-scroller">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
