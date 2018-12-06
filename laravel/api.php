Route::get('/users',function(){
  $json = [
    [
      'id' => '1',
      'name' => 'ahmed',
      'age' => '26',
      'gender' => 'male'
    ],
    [
      'id' => '2',
      'name' => 'thuan',
      'age' => '30',
      'gender' => 'female'
    ],
    [
      'id' => '3',
      'name' => 'eva',
      'age' => '26',
      'gender' => 'female'
    ]
  ];
  return json_encode($json);
})->middleware('cors');
Route::get('/users/{id}',function($id){
  $json = [
    [
      'id' => '1',
      'name' => 'ahmed',
      'age' => '26',
      'gender' => 'male'
    ],
    [
      'id' => '2',
      'name' => 'thuan',
      'age' => '30',
      'gender' => 'female'
    ],
    [
      'id' => '3',
      'name' => 'eva',
      'age' => '26',
      'gender' => 'female'
    ]
  ];
  return json_encode($json[$id-1]);
})->middleware('cors');