<?php

namespace App\Http\Controllers;
use App\Models\Session;
use Illuminate\Http\Request;
use Carbon\Carbon;

// Пример GET-запроса http://127.0.0.1:8000/api/sessions?date=2025-02-07

class SessionsController extends Controller
{
    public function index(Request $request)
    {
        // Проверяем, существует ли параметр 'date' в запросе
        if ($request->has('date')) {
            $date = $request->input('date');
            
            // Парсим дату и проверяем валидность
            try {
                $parsed_date = Carbon::parse($date)->format('Y-m-d'); // Преобразуем в формат Y-m-d
                $sessions = Session::whereDate('start_time', $parsed_date)->get();
            } catch (\Exception $e) {
                // Если произошла ошибка при разборе даты, возвращаем пустой массив
                $sessions = [];
            }
        } else {
            // Если дата не была передана, возвращаем все сессии
            $sessions = Session::all();
        }
        
        return response()->json($sessions);
    }
}