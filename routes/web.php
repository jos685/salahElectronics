<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Models\Product;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;

use Illuminate\Foundation\Auth\EmailVerificationRequest;

Route::get('/email/verify', function () {
    return Inertia::render('Auth/VerifyEmail'); // create this page
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/dashboard');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');




Route::get('/', function (){
    return Inertia::render('HomePage');
});

Route::get('/Cables', function (){
    return Inertia::render('Cables');
});

Route::get('/Computer', function (){
    return Inertia::render('Computer');
});

Route::get('/Mobile', function (){
    return Inertia::render('Mobile');
});

Route::get('/Phones', function (){
    return Inertia::render('Phone');
});

Route::get('/TvAudio', function (){
    return Inertia::render('TvAudio');
});

Route::get('/products', function(){
    $products = Product::all();
    return Inertia::render('ProductsShow', [
        'products' => $products,
    ]);
})->name('products');

Route::get('/products/{product}', [ProductController::class, 'details'])->name('products.details');
 


Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
    });
});

Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::post('/login', [AuthenticatedSessionController::class, 'store']);

Route::get('/register', [AuthenticatedSessionController::class, 'create'])->name('register');
Route::post('/register', [RegisteredUserController::class, 'store']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
