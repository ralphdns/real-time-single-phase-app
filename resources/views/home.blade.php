<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">

    <title>REALTIME</title>
</head>
<body>
    <div id="app">
           <app-home></app-home>
    </div>

        
    <!-- Scripts -->
    <script src="{{ asset('/js/app.js') }}"></script>
    <script>
            console.log(window.user1 = User.loggedIn())
        </script> 
</body>
</html>