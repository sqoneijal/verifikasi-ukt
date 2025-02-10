import feather from "feather-icons";
import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar";
import { Each } from "~/Each";

const Sidebar = () => {
   const sidebarElement = useRef(null);

   const menuLists = [
      {
         name: "Dashboard",
         icon: "stroke-home",
         link: "/",
         sub: false,
      },
      {
         name: "Pendaftar",
         icon: "stroke-social",
         link: "/pendaftar",
         sub: false,
      },
   ];

   useLayoutEffect(() => {
      new SimpleBar(sidebarElement.current);
      feather.replace();
      return () => {};
   }, [sidebarElement]);

   return (
      <div className="sidebar-wrapper" data-layout="stroke-svg">
         <div>
            <div className="logo-wrapper">
               <Link to="/controlpanel">
                  <img className="img-fluid" src="/assets/img/logo-uin.png" alt="logo uin" />
               </Link>
               <div className="back-btn">
                  <i className="fa fa-angle-left" />
               </div>
               <div className="toggle-sidebar">
                  <i className="status_toggle middle sidebar-toggle" data-feather="grid" />
               </div>
            </div>
            <div className="logo-icon-wrapper">
               <Link to="/controlpanel">
                  <img className="img-fluid" src="/assets/img/logo-uin.png" alt="logo uin" />
               </Link>
            </div>
            <nav className="sidebar-main">
               <div className="left-arrow" id="left-arrow">
                  <i data-feather="arrow-left" />
               </div>
               <div id="sidebar-menu">
                  <ul className="sidebar-links" ref={sidebarElement}>
                     <li className="back-btn">
                        <div className="mobile-back text-end">
                           <span>Back</span>
                           <i className="fa fa-angle-right ps-2" aria-hidden="true" />
                        </div>
                     </li>
                     <Each
                        of={menuLists}
                        render={(row) => (
                           <li className="sidebar-list" key={row.name}>
                              <Link to={row.link} className="sidebar-link sidebar-title">
                                 <svg className="stroke-icon">
                                    <use href={`/assets/img/icon-sprite.svg#${row.icon}`} />
                                 </svg>
                                 <svg className="fill-icon">
                                    <use href={`/assets/img/icon-sprite.svg#${row.icon}`} />
                                 </svg>
                                 <span>{row.name}</span>
                              </Link>
                           </li>
                        )}
                     />
                  </ul>
               </div>
               <div className="right-arrow" id="right-arrow">
                  <i data-feather="arrow-right"></i>
               </div>
            </nav>
         </div>
      </div>
   );
};
export default Sidebar;
