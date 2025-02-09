<?php

namespace App\Http\Controllers;
use App\Models\Film;
use Illuminate\Http\Request;

class FilmsController extends Controller
{
    public function index()
    {
        $films = Film::with('sessions')->get();
        
        // Возвращаем массив фильмов с новой структурой
        return response()->json($films);
    }

    public function show($id)
    {
        $film = Film::findOrFail($id)->load('sessions');
        
        // Возвращаем конкретный фильм с новой структурой
        return response()->json($film);
    }
}
