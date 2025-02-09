<?php

use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\FilmsController;


Route::group(['prefix' => 'api'], function () {
    Route::resource('films', 'App\Http\Controllers\FilmsController');
    Route::resource('sessions', 'App\Http\Controllers\SessionsController');
    Route::post('tickets', 'App\Http\Controllers\TicketsController@store');
});

