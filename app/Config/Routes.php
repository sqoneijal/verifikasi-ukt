<?php

$routes = service('routes');

function pendaftar($routes): void
{
   $routes->group('pendaftar', function ($routes) {
      $routes->get('download', 'Pendaftar::download');

      $routes->post('simpandatadownload', 'Pendaftar::simpanDataDownload');
   });
}

pendaftar($routes);
