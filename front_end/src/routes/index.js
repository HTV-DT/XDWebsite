import Checkout from "~/pages/Checkout";
import Home from "~/pages/Home";
import Product from "~/pages/Product";

const publicRoutes = [
    { path: '/', component: Home, },
    { path: '/sanpham', component: Product, layout: <></> },
    { path: '/checkout',component: Checkout,layout: <></>},
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};