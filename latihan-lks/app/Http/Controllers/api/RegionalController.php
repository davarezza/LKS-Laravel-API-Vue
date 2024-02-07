<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RegionalResource;
use App\Models\Regional;
use Illuminate\Http\Request;

class RegionalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Regional::get();

        return response()->json([
            'message' => 'Data ditemukan',
            // 'data' => $data
            'data' => RegionalResource::collection($data),
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Regional $regional)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Regional $regional)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Regional $regional)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Regional $regional)
    {
        //
    }
}
