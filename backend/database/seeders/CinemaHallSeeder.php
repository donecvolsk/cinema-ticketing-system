<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CinemaHall;

class CinemaHallSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CinemaHall::create([
            'name' => 'Большой зал',
            'rows' => 20,
            'seats_per_row' => 25,
        ]);

        CinemaHall::create([
            'name' => 'Малый зал',
            'rows' => 12,
            'seats_per_row' => 18,
        ]);

        // Добавляйте больше залов по мере необходимости...
    }
}
