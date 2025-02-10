import React from "react";

const Header = React.lazy(() => import("./Header"));
const Lists = React.lazy(() => import("./Lists"));

const Context = () => {
   return (
      <React.Suspense fallback={<h2>🌀 Loading...</h2>}>
         <Header />
         <Lists />
      </React.Suspense>
   );
};
export default Context;
