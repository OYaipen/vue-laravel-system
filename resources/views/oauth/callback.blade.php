<html>
<head>
  <meta charset="utf-8">
  <title>{{ config('app.name') }}</title>
  <link rel="shortcut icon" href="{{ asset('img/pencil.png') }}"> 

  <script>
    window.opener.postMessage({ token: "{{ $token }}" }, "{{ url('/') }}")
    window.close()
  </script>
</head>
<body>
</body>
</html>
