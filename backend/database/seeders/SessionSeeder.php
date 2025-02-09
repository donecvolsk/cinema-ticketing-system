<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Session;

class SessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Зал 1 на 7 дней
        Session::create([
            'film_id' => 1,
            'start_time' => now()->addHours(2),
            'end_time' => now()->addHours(4),
            'cinema_hall_id' => 1,
        ]);

        Session::create([
            'film_id' => 1,
            'start_time' => now()->addDays(1),
            'end_time' => now()->addDays(1)->addHours(2),
            'cinema_hall_id' => 1,
        ]);

        Session::create([
            'film_id' => 1,
            'start_time' => now()->addDays(2),
            'end_time' => now()->addDays(2)->addHours(2),
            'cinema_hall_id' => 1,
        ]);

        Session::create([
            'film_id' => 1,
            'start_time' => now()->addDays(3),
            'end_time' => now()->addDays(3)->addHours(2),
            'cinema_hall_id' => 1,
        ]);

        Session::create([
            'film_id' => 1,
            'start_time' => now()->addDays(4),
            'end_time' => now()->addDays(4)->addHours(2),
            'cinema_hall_id' => 1,
        ]);

        Session::create([
            'film_id' => 1,
            'start_time' => now()->addDays(5),
            'end_time' => now()->addDays(5)->addHours(2),
            'cinema_hall_id' => 1,
        ]);

        Session::create([
            'film_id' => 1,
            'start_time' => now()->addDays(6),
            'end_time' => now()->addDays(6)->addHours(2),
            'cinema_hall_id' => 1,
        ]);

        //Зал 2 на 7 дней
        Session::create([
            'film_id' => 2,
            'start_time' => now()->addHours(2),
            'end_time' => now()->addHours(4),
            'cinema_hall_id' => 2,
        ]);

        Session::create([
            'film_id' => 2,
            'start_time' => now()->addDays(1),
            'end_time' => now()->addDays(1)->addHours(2),
            'cinema_hall_id' => 2,
        ]);

        Session::create([
            'film_id' => 2,
            'start_time' => now()->addDays(2),
            'end_time' => now()->addDays(2)->addHours(2),
            'cinema_hall_id' => 2,
        ]);

        Session::create([
            'film_id' => 2,
            'start_time' => now()->addDays(3),
            'end_time' => now()->addDays(3)->addHours(2),
            'cinema_hall_id' => 2,
        ]);

        Session::create([
            'film_id' => 2,
            'start_time' => now()->addDays(4),
            'end_time' => now()->addDays(4)->addHours(2),
            'cinema_hall_id' => 2,
        ]);

        Session::create([
            'film_id' => 2,
            'start_time' => now()->addDays(5),
            'end_time' => now()->addDays(5)->addHours(2),
            'cinema_hall_id' => 2,
        ]);

        Session::create([
            'film_id' => 2,
            'start_time' => now()->addDays(6),
            'end_time' => now()->addDays(6)->addHours(2),
            'cinema_hall_id' => 2,
        ]);

        // Добавляйте больше сессий по мере необходимости...
    }
}