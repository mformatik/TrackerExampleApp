import {Route, Routes as RoutesRRD} from 'react-router-dom';
import Home from "../../pages/Home/Home";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Posts from "../../pages/Posts/Posts";
import Clients from "../../pages/Clients/Clients";
import Products from "../../pages/Products/Products";


export const Routes = () => (
  <RoutesRRD>
    <Route element={<Home/>} path="/"/>
    <Route element={<Clients/>} path="/clients"/>
    <Route element={<Products/>} path="/products"/>
    <Route element={<Posts/>} path="/posts"/>
    <Route element={<PageNotFound/>} path="*"/>
  </RoutesRRD>
);
