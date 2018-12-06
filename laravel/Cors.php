<?php

namespace App\Http\Middleware;

use Closure;
//Path of this Class app/http/middleware

/*
Path of Kernel.php
app/Http/kernel.php ==> Add this array item 
protected $routeMiddleware = [
    'cors' => \App\Http\Middleware\Cors::class
];
*/


/*
In Public/index.php 
Add this to the beginning of the file
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With, x-xsrf-token');
header('Access-Control-Allow-Credentials: true');
*/
class Cors {
   public function handle($request, Closure $next)
   {
       header("Access-Control-Allow-Origin: *");
       header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
       header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With, x-xsrf-token');
       header('Access-Control-Allow-Credentials: true');

       if (!$request->isMethod('options')) {
           return $next($request);
       }
   }
}
