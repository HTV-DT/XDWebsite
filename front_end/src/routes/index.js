import Home from "~/pages/Home";
import Product from "~/pages/Product";

const publicRoutes = [
    { path: '/', component: Home, },
    { path: '/sanpham', component: Product, layout: <></> },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};