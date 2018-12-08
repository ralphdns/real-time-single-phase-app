<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Category::class, function (Faker $faker) {
    $word = $faker->word;
    return [
        //
        'name' => $word,

        //the slug is title seperated by dashes
        'slug' => str_slug($word),
    ];
});
