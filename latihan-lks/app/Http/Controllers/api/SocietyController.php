<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddSocietyRequest;
use App\Http\Requests\EditSocietyRequest;
use App\Http\Resources\SocietyResource;
use App\Models\Society;
use Illuminate\Http\Request;

class SocietyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Society::get();

        return response()->json([
            'message' => 'Data ditemukan',
            // 'data' => $data
            'data' => SocietyResource::collection($data),
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddSocietyRequest $request)
    {
        $dataSociety = new Society();

        // $dataSociety->id_card_number = $request->id_card_number;
        // $dataSociety->password = $request->password;
        // $dataSociety->name = $request->name;
        // $dataSociety->born_date = $request->born_date;
        // $dataSociety->gender = $request->gender;
        // $dataSociety->address = $request->address;
        // $dataSociety->regional_id = $request->regional_id;
        // $dataSociety->save();
        
        $dataSociety = Society::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Sukses menambahkan data'
        ],200);

    }

    /**
     * Display the specified resource.
     */
    public function show(Society $society)
    {
        // $dataSociety = Society::find($id);

        return response()->json([
            'status' => true,
            'message' => 'Sukses menemukan data',
            'data' => new SocietyResource($society),
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditSocietyRequest $request, Society $society)
    {
        // $society = Society::find($id);
        $society->id_card_number = $request->id_card_number;
        $society->password = $request->password;
        $society->name = $request->name;
        $society->born_date = $request->born_date;
        $society->gender = $request->gender;
        $society->address = $request->address;
        $society->regional_id = $request->regional_id;
        $society->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses mengedit data'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Society::destroy($id);

        return response()->json([
            'status' => true,
            'message' => 'Sukses menghapus data'
        ],200);
    }
}
