import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import redux from "./redux";
import Routing from "./Router";

import "~/css/01-googlefonts.css";
import "~/css/02-font-awesome.css";
import "~/css/03-icofont.css";
import "~/css/04-themify.css";
import "~/css/05-feather-icon.css";
import "~/css/06-slick-theme.css";
import "~/css/07-scrollbar.css";
import "~/css/08-animate.css";
import "~/css/09-prism.css";
import "~/css/10-bootstrap.css";
import "~/css/11-style.css";
import "~/css/12-responsive.css";

const PageHeader = React.lazy(() => import("./component/Header"));
const Sidebar = React.lazy(() => import("./component/Sidebar"));

const App = () => {
   return (
      <React.Suspense fallback={<h2>🌀 Loading...</h2>}>
         <PageHeader />
         <div className="page-body-wrapper horizontal-menu">
            <Sidebar />
            <div className="page-body">
               <Routing />
            </div>
         </div>
      </React.Suspense>
   );
};

const store = configureStore({
   reducer: { redux },
});

const container = document.getElementById("pageWrapper");
const root = createRoot(container);
root.render(
   <Provider store={store}>
      <Router basename="controlpanel">
         <App />
      </Router>
   </Provider>
);
