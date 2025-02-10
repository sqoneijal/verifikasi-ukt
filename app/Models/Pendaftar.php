<?php

namespace App\Models;

class Pendaftar extends Common
{

   public function simpanDataDownload(string $content): array
   {
      try {
         $data = json_decode($content, true);
         return ['status' => true, 'content' => $data];
      } catch (\Exception $e) {
         return ['status' => false, 'msg_response' => $e->getMessage()];
      }
   }
}
