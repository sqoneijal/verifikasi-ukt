import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import toast, { Toaster } from "react-hot-toast";

export const buttons = (label, isLoading = false, init = {}) => {
   // Menghapus semua spasi dalam string
   const tanpaSpasi = label.replace(/\s+/g, "");

   // Mengubah huruf menjadi huruf kecil (lowercase)
   const hurufKecil = tanpaSpasi.toLowerCase();

   return (
      <Button id={hurufKecil} name={hurufKecil} disabled={isLoading} size="sm" {...init} className="btn-pill btn-air-primary fw-bold">
         {isLoading ? (
            <span className="indicator-label">
               Loading... <span className="spinner-border spinner-border-sm align-middle ms-2" />
            </span>
         ) : (
            <span className="indicator-label">{label}</span>
         )}
      </Button>
   );
};

export const parse = (key, content = {}, type = "text") => {
   if (typeof content[key] === "undefined") {
      return "";
   }
   let text = content[key];
   if (text == null || text == "") {
      return "";
   }
   text = text.toString();
   if (type === "date" && valid_date(text) && text !== "-") return moment(text).format("DD MMMM YYYY");
   if (type === "jam") {
      return moment(text, "HH:mm").format("hh:mm A");
   }
   if (text.slice(0, 1) == "0") {
      return text.replace(/^(?:\s+|\s+)$/gm, "");
   }
   if (text.replace(/\d/gm, "").length > 0) {
      return text;
   }
   return toInt(text) > 0 ? toInt(text) : text.replace(/^(?:\s+|\s+)$/gm, "");
};

const abortSignal = (timeoutMs) => {
   const abortController = new AbortController();
   setTimeout(() => abortController.abort(), timeoutMs || 0);
   return abortController.signal;
};

export const objLength = (content = {}) => {
   return Object.keys(content).length > 0;
};

const errorMessage = {
   ERR_BAD_REQUEST: "Permintaan tidak valid. Pastikan data yang dikirim sudah benar.",
   ERR_NETWORK: "Terjadi masalah jaringan. Periksa koneksi internet Anda dan coba lagi.",
   ERR_TIMEOUT: "Permintaan terlalu lama. Server tidak merespons dalam waktu yang ditentukan.",
   ERR_BAD_RESPONSE: "Server memberikan respons yang tidak dapat diproses. Coba lagi nanti.",
   ERR_CANCELED: "Permintaan dibatalkan. Coba kirim ulang jika diperlukan.",
   ECONNABORTED: "Koneksi terputus atau permintaan dibatalkan karena timeout.",
};

export const get = async (url) => {
   try {
      const mutex = {
         locked: false,
         lock() {
            if (this.locked) {
               // Menunggu sampai sumber daya tersedia
               return new Promise((resolve) => {
                  setTimeout(() => {
                     resolve(this.lock());
                  }, 10);
               });
            } else {
               this.locked = true;
               return Promise.resolve();
            }
         },
         unlock() {
            this.locked = false;
         },
      };

      await mutex.lock();

      const send = axios.get(`${window.apiPath}${url}`, {
         signal: abortSignal(100_000),
      });
      send.then((res) => {
         const { data } = res;
         if (typeof data.code !== "undefined" && parse("code", data) !== 200) {
            toast.error(errorMessage[data.code]);
         }
      });
      send.catch((e) => {
         toast.error(errorMessage[e.code]);
      });

      mutex.unlock();
      return await send;
   } catch (error) {
      toast.error(errorMessage[error.code]);
   }
};

export const post = async (url, form = [], config = {}) => {
   try {
      const mutex = {
         locked: false,
         lock() {
            if (this.locked) {
               // Menunggu sampai sumber daya tersedia
               return new Promise((resolve) => {
                  setTimeout(() => {
                     resolve(this.lock());
                  }, 10);
               });
            } else {
               this.locked = true;
               return Promise.resolve();
            }
         },
         unlock() {
            this.locked = false;
         },
      };

      await mutex.lock();
      const formData = new FormData();
      Object.keys(form).forEach((data) => formData.append(data, form[data]));

      const send = axios.post(`${window.apiPath}${url}`, formData, { ...config, signal: abortSignal(20_000) });
      send.then((res) => {
         const { data } = res;
         if (typeof data.code !== "undefined" && parse("code", data) !== 200) {
            toast.error(errorMessage[data.code]);
         }
      });
      send.catch((e) => {
         toast.error(errorMessage[e.code]);
      });

      mutex.unlock();
      return await send;
   } catch (error) {
      toast.error(errorMessage[error.code]);
   }
};

export const notification = (message) => {
   return toast.success(message);
};

const container = document.getElementById("message");
const root = createRoot(container);
root.render(<Toaster />);

export const arrLength = (content = []) => {
   return content.length > 0;
};
