# apiary-register
Apiary register app - allows to save apiary to database and view added apiaries with filtering and sorting<br><br>

PL<br>
Technology stack:<br>
-node.js, express.js, mongoose, MongoDB, react.js, router<br><br>

jak uruchomić aplikację ? (chcesz uruchomić aplikację w środowisku developerskim ? -> informacje na samym dole)
-UWAGA: potrzebujesz zainstalowanej na komputerze bazy danych MongoDB
-najpierw zainstaluj dependency w folderze /api 
cd ./api
npm i
*jeżeli potrzebujesz testowej bazy danych to:
node .\createTestDb.js
-aby uruchomić aplikację
npm run start
-wpisz w przeglądarkę, aby uruchomić aplikację
127.0.0.1:9000

co posiada aplikacja ?
-możliwość dodawania pasiek do bazy danych
-możliwość przeglądania dodanych pasiek
-możliwość filtrowania poprzez ustawienie zakresu dat
-możliwość sortowania względem numeru pasieki
-Gdy rekord będzie ten sam co poprzedni to api wysyła ostrzeżenie do użytkownika: "Pasieka już istnieje, spróbuj innego numeru" i nie zapisuje rekordu. Dodatkowo jeżeli użytkownik zmieni datę to generowanie numeru jest włączone na nowo i zaczyna się od 00001
-wzorzec mobile first, ale dodano osobny styl dla desktop
-UWAGA: w celu optymalizacji dostosowany js styl (np. w komponencie NewApiary) dla desktopów został przeniesiony poza zakres funkcji komponentu, aby komponent nie musiał podczas kolejnych renderowań wykonywać danego kodu. Dlatego przy testowaniu mobile <-> desktop w przeglądarce trzeba zrobić reload strony. (dla użytkownika to nie gra roli - od razu posiada dostosowaną szerokość ekranu)
-dodano lazy import dla komponentów, które użytkownik nei używa w danym czasie. Będą importowane, gdy będą potrzebne w aplikacji
-Git można prześledzić każdą zmianę aplikacji w kontroli wersji jaką dokonałem i kiedy
-validacja danych wejściowych zarówno dla backendu jak i frontendu tj. osobna walidacja nazwy, szczególna walidacja daty i numeru pasieki
-informowanie użytkownika o błędnie wprowadzonych danych
-użytkownik nie będzie mógł wysłać danych dopóki nie wypełni wszystkich wymaganych pól
-zrobiono testy api przy pomocy postman - plik w folderze aplikacji (apiary-register.postman_collection.json)
-stworzono komponent Toastbar do wyświetlania inforamcji/ostrzeżeń z serwera
-logowanie błędów serwera z datą dla developera
-na stronie /nowa-pasieka można wybrać datę dla pasieki. Zastosowano walidację, aby nie można było dodać daty z 'przyszłości', jako że jest to rejestr już posiadanych pasiek
-datę można zmienić manulanie wpisując rok, miesiąc i dzień. Można manualnie wpisać rok 2000 nawet.
-w /lista-pasiek dodano resetowanie filtru i sortowania
-na stronie /lista-pasiek zastosowano przerywanie asynchronicznego pobierania listy pasiek jeżeli użytkownik szybko wyjdzie z tej strony. Gdy pasiek będzie więcej lub będzie słabe połączenie internetowe to zapobiegnie to tworzeniu dodatkowych zadań w tle.
-i wiele innych rzeczy, śmiało pytaj :)

*jak uruchomić aplikację w środowisku developerskim ?
-potrzebujesz zainstalować dependency w folderze ./view
cd ./view
npm i
-uruchom aplikację front-end
npm run start
-uruchom aplikację back-end jako developer
cd ./api
npm run devstart
-wpisz w przeglądarkę, aby uruchomić aplikację
127.0.0.1:3000
