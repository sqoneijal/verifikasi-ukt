<?php

namespace Config;

use CodeIgniter\Database\Config;

/**
 * Database Configuration
 */
class Database extends Config
{
   /**
    * The directory that holds the Migrations and Seeds directories.
    */
   public string $filesPath = APPPATH . 'Database' . DIRECTORY_SEPARATOR;

   /**
    * Lets you choose which connection group to use if no other is specified.
    */
   public string $defaultGroup = 'default';

   /**
    * The default database connection.
    *
    * @var array<string, mixed>
    */
   public array $default = [
      'DSN'          => '',
      'hostname'     => '',
      'username'     => '',
      'password'     => '',
      'database'     => '',
      'DBDriver'     => 'Postgre',
      'DBPrefix'     => '',
      'pConnect'     => false,
      'DBDebug'      => true,
      'charset'      => 'utf8',
      'DBCollat'     => 'en_US.UTF-8',
      'swapPre'      => '',
      'encrypt'      => false,
      'compress'     => false,
      'strictOn'     => false,
      'failover'     => [],
      'port'         => 3306,
      'numberNative' => false,
      'foundRows'    => false,
      'dateFormat'   => [
         'date'     => 'Y-m-d',
         'datetime' => 'Y-m-d H:i:s',
         'time'     => 'H:i:s',
      ],
   ];

   public function __construct()
   {
      parent::__construct();

      // Ensure that we always set the database group to 'tests' if
      // we are currently running an automated test suite, so that
      // we don't overwrite live data on accident.
      if (ENVIRONMENT === 'testing') {
         $this->defaultGroup = 'tests';
      }
   }
}
