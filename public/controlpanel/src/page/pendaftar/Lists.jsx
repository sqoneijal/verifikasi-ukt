import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as h from "~/Helpers";
import { setModule } from "~/redux";

const ModalPreDownloadData = React.lazy(() => import("./ModalPreDownloadData"));

const Lists = () => {
   const { module } = useSelector((e) => e.redux);
   const dispatch = useDispatch();

   const [state, setState] = useState({
      isLoadingDownload: false,
   });

   const handleDownloadDariSevima = (page) => {
      setState((prev) => ({ ...prev, isLoadingDownload: true }));

      const fetch = h.get(`/pendaftar/download?page=${page}`);
      fetch.then((res) => {
         if (typeof res === "undefined") return;

         const { data } = res;

         if (typeof data.code !== "undefined" && h.parse("code", data) !== 200) {
            h.notification(false, h.parse("message", data));
            return;
         }

         if (h.objLength(data) && data.meta.total > 0) {
            dispatch(setModule({ ...module, openModalPreDownload: true, sevima: { ...data } }));
         } else {
            h.notification(false, "Gagal mengunduh data.");
         }
      });
      fetch.finally(() => {
         setState((prev) => ({ ...prev, isLoadingDownload: false }));
      });
   };

   return (
      <React.Suspense fallback={<h2>🌀 Loading...</h2>}>
         <ModalPreDownloadData />
         <Container fluid>
            <Row className="starter-main">
               <Col>
                  <Card>
                     <Card.Header>
                        <div className="d-md-flex">
                           <div className="flex-grow-1 text-end d-md-block d-none">
                              {h.buttons("Download Dari Sevima", state.isLoadingDownload, { onClick: () => handleDownloadDariSevima(1) })}
                           </div>
                        </div>
                     </Card.Header>
                  </Card>
               </Col>
            </Row>
         </Container>
      </React.Suspense>
   );
};
export default Lists;
