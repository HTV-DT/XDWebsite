import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

const titlePages = [
    { id: '', title: 'Trang chủ' },
    { id: 'sanpham', title: 'Sản phẩm' },
    { id: 'giamgia', title: 'Giảm giá' },
    { id: 'bosuutap', title: 'Bộ sưu tập' },
    { id: 'bophoi', title: 'Bộ phối' },
    { id: 'lienhe', title: 'Liên hệ' },
    { id: 'chamsockhachhang', title: 'Chăm sóc khách hàng' },
];

function DefaultLayout({ children, props }) {
    return (
        <>
            <Header titlePages={titlePages} />
            <Main>{children}</Main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
