# apiary-register
Apiary register app - allows to save apiary to database and view added apiaries with filtering and sorting<br><br>

PL<br>
Technology stack:<br>
-node.js, express.js, mongoose, MongoDB, react.js, router<br><br>

jak uruchomić aplikację ? (chcesz uruchomić aplikację w środowisku developerskim ? -> informacje na samym dole)<br>
-UWAGA: potrzebujesz zainstalowanej na komputerze bazy danych MongoDB<br>
-najpierw zainstaluj dependency w folderze /api <br>
cd ./api<br>
npm i<br>
*jeżeli potrzebujesz testowej bazy danych to:<br>
node .\createTestDb.js<br>
-aby uruchomić aplikację<br>
npm run start<br>
-wpisz w przeglądarkę, aby uruchomić aplikację<br>
127.0.0.1:9000<br><br>

co posiada aplikacja ?<br>
-możliwość dodawania pasiek do bazy danych<br>
-możliwość przeglądania dodanych pasiek<br>
-możliwość filtrowania poprzez ustawienie zakresu dat<br>
-możliwość sortowania względem numeru pasieki<br>
-Gdy rekord będzie ten sam co poprzedni to api wysyła ostrzeżenie do użytkownika: "Pasieka już istnieje, spróbuj innego numeru" i nie zapisuje rekordu. Dodatkowo jeżeli użytkownik zmieni datę to generowanie numeru jest włączone na nowo i zaczyna się od 00001
-wzorzec mobile first, ale dodano osobny styl dla desktop<br>
-UWAGA: w celu optymalizacji dostosowany js styl (np. w komponencie NewApiary) dla desktopów został przeniesiony poza zakres funkcji komponentu, aby komponent nie musiał podczas kolejnych renderowań wykonywać danego kodu. Dlatego przy testowaniu mobile <-> desktop w przeglądarce trzeba zrobić reload strony. (dla użytkownika to nie gra roli - od razu posiada dostosowaną szerokość ekranu)<br>
-dodano lazy import dla komponentów, które użytkownik nei używa w danym czasie. Będą importowane, gdy będą potrzebne w aplikacji<br>
-Git można prześledzić każdą zmianę aplikacji w kontroli wersji jaką dokonałem i kiedy<br>
-validacja danych wejściowych zarówno dla backendu jak i frontendu tj. osobna walidacja nazwy, szczególna walidacja daty i numeru pasieki<br>
-informowanie użytkownika o błędnie wprowadzonych danych<br>
-użytkownik nie będzie mógł wysłać danych dopóki nie wypełni wszystkich wymaganych pól<br>
-zrobiono testy api przy pomocy postman - plik w folderze aplikacji (apiary-register.postman_collection.json)<br>
-stworzono komponent Toastbar do wyświetlania inforamcji/ostrzeżeń z serwera<br>
-logowanie błędów serwera z datą dla developera<br>
-na stronie /nowa-pasieka można wybrać datę dla pasieki. Zastosowano walidację, aby nie można było dodać daty z 'przyszłości', jako że jest to rejestr już posiadanych pasiek<br>
-datę można zmienić manulanie wpisując rok, miesiąc i dzień. Można manualnie wpisać rok 2000 nawet.<br>
-w /lista-pasiek dodano resetowanie filtru i sortowania<br>
-na stronie /lista-pasiek zastosowano przerywanie asynchronicznego pobierania listy pasiek jeżeli użytkownik szybko wyjdzie z tej strony. Gdy pasiek będzie więcej lub będzie słabe połączenie internetowe to zapobiegnie to tworzeniu dodatkowych zadań w tle.<br>
-i wiele innych rzeczy, śmiało pytaj :)<br><br>

*jak uruchomić aplikację w środowisku developerskim ?<br>
-potrzebujesz zainstalować dependency w folderze ./view<br>
cd ./view<br>
npm i<br>
-uruchom aplikację front-end<br>
npm run start<br>
-uruchom aplikację back-end jako developer<br>
cd ./api<br>
npm run devstart<br>
-wpisz w przeglądarkę, aby uruchomić aplikację<br>
127.0.0.1:3000<br>
