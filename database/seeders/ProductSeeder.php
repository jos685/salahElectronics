<?php

namespace Database\Seeders;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        Product::insert([
            [
                'name' => 'apple cable',
                'description' => 'Apple Lightning to USB Cable',
                'price' => 100.00,
                'image_path' => 'images/apple cable.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => '5 way extension cable',
                'description' => '5 Way Extension Cable',
                'price' => 300.00,
                'image_path' => 'images/5 way extns.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'USB C to USB C Cable',
                'description' => 'USB C to USB C Cable',
                'price' => 80.00,
                'image_path' => 'images/c to c.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'c to c earphone',
                'description' => 'USB C to USB C Earphone',
                'price' => 70.00,
                'image_path' => 'images/c to earphone.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'ethernet cable',
                'description' => 'Ethernet Cable',
                'price' => 200.00,
                'image_path' => 'images/ethernet.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'extension cable',
                'description' => 'Extension Cable',
                'price' => 160.00,
                'image_path' => 'images/extension.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'HDMI cable',
                'description' => 'HDMI Cable',
                'price' => 110.00,
                'image_path' => 'images/hdmi.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'pods',
                'description' => 'Apple AirPods',
                'price' => 170.00,
                'image_path' => 'images/pods.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Header charger and cable',
                'description' => 'Header Charger and Cable',
                'price' => 210.00,
                'image_path' => 'images/header and cable.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Charger Header',
                'description' => 'Charger Header',
                'price' => 150.00,
                'image_path' => 'images/header.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Headphones',
                'description' => 'Headphones',
                'price' => 500.00,
                'image_path' => 'images/headphone.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Oraimo C to Earphone',
                'description' => 'Oraimo C to Earphone',
                'price' => 80.00,
                'image_path' => 'images/oraimo c to ear phone.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Oraimo Charger',
                'description' => 'Oraimo Charger',
                'price' => 100.00,
                'image_path' => 'images/oraimo charger.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
        ],
        [
                'name' => 'OTG Cable',
                'description' => 'OTG Cable',
                'price' => 150.00,
                'image_path' => 'images/otg.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
       ],
       [
                'name' => 'podds',
                'description' => 'Apple AirPods',
                'price' => 400.00,
                'image_path' => 'images/poddd.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
        ],
        [
                'name' => 'six way extnsion cable',
                'description' => 'Six Way Extension Cable',
                'price' => 300.00,
                'image_path' => 'images/six way extns.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
        ],
        [
                'name' => 'usb cable',
                'description' => 'USB Cable',
                'price' => 100.00,
                'image_path' => 'images/usb cable.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
        ],
                                                                        
        ]);
    }
}
