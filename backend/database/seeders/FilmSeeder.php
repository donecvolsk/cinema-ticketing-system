<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Film;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Film::create([
            'title' => 'Матрица',
            'description' => 'Научная фантастика о виртуальной реальности.',
            'duration' => 120,
            'poster' => 'matrix_poster.jpg',
        ]);

        Film::create([
            'title' => 'Начало',
            'description' => 'Триллер о мире сновидений.',
            'duration' => 130,
            'poster' => 'inception_poster.jpg',
        ]);

        // Добавьте больше фильмов по мере необходимости...
    }
}