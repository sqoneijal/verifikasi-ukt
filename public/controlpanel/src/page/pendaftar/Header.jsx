import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
   return (
      <Container fluid>
         <div className="page-title">
            <Row className="none">
               <Col xs={6}>
                  <h3>Pendaftar</h3>
               </Col>
               <Col xs={6}>
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item">
                        <a href="index.html">
                           <svg className="stroke-icon">
                              <use href="/assets/img/icon-sprite.svg#stroke-home" />
                           </svg>
                        </a>
                     </li>
                     <li className="breadcrumb-item">Color version </li>
                     <li className="breadcrumb-item active">Layout light </li>
                  </ol>
               </Col>
            </Row>
         </div>
      </Container>
   );
};
export default Header;
