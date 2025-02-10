<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\Pendaftar as Model;

class Pendaftar extends BaseController
{
   public function download(): object
   {
      $options = [
         'baseURI' => env('SEVIMA_URL'),
         'timeout' => 3,
         'headers' => [
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
            'X-App-Key' => env('SEVIMA_APP_KEY'),
            'X-Secret-Key' => env('SEVIMA_SECRET_KEY')
         ]
      ];
      $client = service('curlrequest', $options);
      $response = $client->request('GET', 'pendaftar?f-id_periode=20241');
      $body = json_decode($response->getBody(), true);

      return $this->respond($body, 200);
   }

   public function simpanDataDownload(): object
   {
      $model = new Model();
      $content = $model->simpanDataDownload($this->post['data']);
      return $this->respond($content);
   }
}
