# VueLaravelSystem

SPA para la administración, modulos con autenticación de usuarios y rutas protegidas

## Instalación

Primero Instale composer y npm.

```bash
composer install
npm install
```
Copie el archivo ".env.example"
```bash
linux: cp .env.example .env
```
```cmd
windows: copy .env.example .env
```

Modifique:

```env
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
...
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
...
MAIL_USERNAME=
MAIL_PASSWORD=

```
Genere la APP_KEY:
```bash
php artisan key:generate
```
Deploying Passport:
```bash
php artisan passport:keys
php artisan jwt:secret
```
Suba las migraciones y el usuario admin:
```bash
php artisan migrate 
```
Ejecute la el comando compilar vue:
```bash
npm run watch
```

Ejecute la el comando para levantar el servidor:
```bash
php artisan serve
```
visualice en localhost:8000

## License
[MIT](https://choosealicense.com/licenses/mit/)