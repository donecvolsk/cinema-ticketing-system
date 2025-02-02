<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function getData()
    {
        // Пример данных для дней
        $days = [
            ['day' => 'Понедельник', 'number' => 1, 'isToday' => true, 'isWeekend' => false],
            ['day' => 'Вторник', 'number' => 2, 'isToday' => false, 'isWeekend' => false],
            ['day' => 'Среда', 'number' => 3, 'isToday' => false, 'isWeekend' => false],
            ['day' => 'Четверг', 'number' => 4, 'isToday' => false, 'isWeekend' => false],
            ['day' => 'Пятница', 'number' => 5, 'isToday' => false, 'isWeekend' => true],
            ['day' => 'Суббота', 'number' => 6, 'isToday' => false, 'isWeekend' => true],
            ['day' => 'Воскресенье', 'number' => 7, 'isToday' => false, 'isWeekend' => true]
        ];

        // Пример данных для фильмов
        $movies = [
            ['title' => 'Фильм 1', 'poster' => 'i/poster1.jpg', 'synopsis' => 'Описание фильма 1', 'duration' => '130 минут', 'origin' => 'США',
            'halls' => [
                [
                  'hallTitle' => 'Зал 1',
                  'times' => ["10:20", "14:10", "18:40", "22:00"]
                ],
                [
                  'hallTitle' => 'Зал 2',
                  'times' => ["11:15", "14:40", "16:00", "18:30", "21:00", "23:30"]
                ]   
              ]
            ],

            ['title' => 'Фильм 2', 'poster' => 'i/qr-code.png', 'synopsis' => 'Описание фильма 2', 'duration' => '130 минут', 'origin' => 'США',
            'halls' => [
                [
                  'hallTitle' => 'Зал 1',
                  'times' => ["10:20", "14:10", "18:40", "22:00"]
                ],
                [
                  'hallTitle' => 'Зал 2',
                  'times' => ["11:15", "14:40", "16:00", "18:30", "21:00", "23:30"]
                ]   
              ]
            ],
            ['title' => 'Фильм 3', 'poster' => 'i/poster2.jpg', 'synopsis' => 'Описание фильма 3', 'duration' => '130 минут', 'origin' => 'США',
            'halls' => [
                [
                  'hallTitle' => 'Зал 1',
                  'times' => ["10:20", "14:10", "18:40", "22:00"]
                ],
                [
                  'hallTitle' => 'Зал 2',
                  'times' => ["11:15", "14:40", "16:00", "18:30", "21:00", "23:30"]
                ]   
              ]
            ],

        ];

        return response()->json(['days' => $days, 'movies' => $movies]);
    }
}
