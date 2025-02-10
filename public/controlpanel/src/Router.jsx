import React from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = React.lazy(() => import("./page/dashboard/Context"));
const Pendaftar = React.lazy(() => import("./page/pendaftar/Context"));

const Router = () => {
   return (
      <Routes>
         <Route path="/" loader={<Loading />} element={<Dashboard />} />
         <Route path="pendaftar" loader={<Loading />} element={<Pendaftar />} />
      </Routes>
   );
};
export default Router;

const Loading = () => {
   return <h2>🌀 Loading...</h2>;
};
