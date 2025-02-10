import React, { useLayoutEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Each } from "~/Each";
import * as h from "~/Helpers";
import { setModule } from "~/redux";

const ModalPreDownloadData = () => {
   const { module } = useSelector((e) => e.redux);
   const { openModalPreDownload, sevima } = module;
   const dispatch = useDispatch();

   const clearProps = () => {
      dispatch(setModule({ ...module, openModalPreDownload: false, sevima: {} }));
   };

   const handleSimpanDataDownload = (content) => {
      const formData = { data: JSON.stringify(content) };

      const fetch = h.post(`/pendaftar/simpandatadownload`, formData);
      fetch.then((res) => {
         if (typeof res === "undefined") return;

         const { data } = res;
         if (typeof data.code !== "undefined" && h.parse("code", data) !== 200) {
            h.notification(false, h.parse("message", data));
            return;
         }

         console.log(data);
      });
      fetch.finally(() => {
         setIsSubmit(false);
      });
   };

   useLayoutEffect(() => {
      if (typeof module.sevima !== "undefined" && h.arrLength(sevima.data)) {
         const data = [];
         sevima.data.forEach((row) => {
            const { attributes } = row;
            data.push({ id: row.id, ...attributes });
         });

         if (h.arrLength(data)) {
            handleSimpanDataDownload(data);
         }
      }
      return () => {};
   }, [sevima]);

   return (
      <Modal show={openModalPreDownload} onHide={clearProps} backdrop="static" size="xl">
         <Modal.Header>
            <Modal.Title>Daftar Pendaftar Yang Didownload</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Table responsive hover size="sm">
               <thead>
                  <tr className="border-bottom-primary">
                     <th className="text-center">NO</th>
                     <th>Kode Pendaftaran</th>
                     <th>Nama</th>
                     <th>Jenis Program</th>
                  </tr>
               </thead>
               <tbody>
                  {typeof module.sevima !== "undefined" && (
                     <Each
                        of={sevima.data}
                        render={(row, index) => (
                           <tr key={row.id}>
                              <td className="text-center">{index + 1}</td>
                              <td>{row.attributes.kode}</td>
                              <td>{row.attributes.nama}</td>
                              <td>{row.attributes.jalur_pendaftaran}</td>
                           </tr>
                        )}
                     />
                  )}
               </tbody>
            </Table>
         </Modal.Body>
      </Modal>
   );
};
export default ModalPreDownloadData;
