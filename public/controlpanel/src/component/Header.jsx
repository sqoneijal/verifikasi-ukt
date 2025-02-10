import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div className="page-header">
         <Row className="header-wrapper m-0">
            <Col xs="auto" className="header-logo-wrapper p-0">
               <div className="logo-wrapper">
                  <Link to="/controlpanel">
                     <img className="img-fluid for-light" src="/assets/img/logo-uin.png" alt="logo" />
                  </Link>
               </div>
               <div className="toggle-sidebar">
                  <i className="status_toggle middle sidebar-toggle" data-feather="align-center" />
               </div>
            </Col>
            <Col xxl={5} xl={6} lg={5} md={4} sm={3} className="left-header p-0">
               <div>
                  <a className="toggle-sidebar" href="#">
                     <i className="iconly-Category icli" />
                  </a>
                  <div className="d-flex align-items-center gap-2 ">
                     <h4 className="f-w-600">Selamat datang Alex</h4>
                     <img className="mt-0" src="/assets/img/hand.gif" alt="hand-gif" />
                  </div>
               </div>
               <div className="welcome-content d-xl-block d-none">
                  <span className="text-truncate col-12">Here’s what’s happening with your store today. </span>
               </div>
            </Col>
            <Col xxl={7} xl={6} md={7} xs={9} className="nav-right pull-right right-header p-0 ms-auto">
               <ul className="nav-menus">
                  <li className="profile-nav onhover-dropdown">
                     <div className="media profile-media">
                        <img className="b-r-10" src="/assets/img/avatar.png" alt="avatar" style={{ width: 40, height: 40 }} />
                        <div className="media-body d-xxl-block d-none box-col-none">
                           <div className="d-flex align-items-center gap-2">
                              <span>Alex Mora </span>
                              <i className="middle fa fa-angle-down"> </i>
                           </div>
                           <p className="mb-0 font-roboto">Admin</p>
                        </div>
                     </div>
                     <ul className="profile-dropdown onhover-show-div">
                        <li>
                           <a className="btn btn-pill btn-outline-primary btn-sm" href="../template/login.html">
                              Log Out
                           </a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </Col>
         </Row>
      </div>
   );
};
export default Header;
