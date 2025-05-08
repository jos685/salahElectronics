<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
   
    public function show(int $id): Response   //fetch product by id
    {
        $product = Product::findOrFail($id);  //fetch product by id
        return Inertia::render('ProductDetails', [
            'product' => $product,
        
        ]);
    }

    public function details(Product $product){
        return Inertia::render('Products/details', ['product' => $product ]);
    }
}