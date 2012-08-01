var http = require('http');
// http protokol�n� kodlar�m�zda kullanabilmek i�in dahil ediyor.
// require komutu ile i�inde belirtti�imiz k�t�phaneler nodejs i�inde ya da
// npm ile y�kledi�imiz yap�lar olmal�d�r

// http ile sunucumuzun kurulumunu yap�yoruz
http.createServer(function (req, res) {
// kurulum sonucu olarak bu isimsiz fonksiyona 'callback' geri d�n�� sa�lan�r
  res.writeHead(200, {'Content-Type': 'text/plain'});
// res -> respond yani sunucunun d�nece�i cevap olarak kullan�lmaktad�r.
// 200 kodu sunucudan 'OK' sonucu yani sonucun hatas�z d�nd���n� belirtir.
// sonu� tipinin 'text/plain' d�z metin belgesi oldu�unu belirtir.
  res.end('Hello World\n');
// i�erik olarak ekrana helloWorld yaz�s� yazd�r�l�r
}).listen(1337, '127.0.0.1');
// uygulama 1337 portundan localhost || 127.0.0.1 adresi �zerinden yay�n yapmaktad�r.
console.log('Server running at http://127.0.0.1:1337/');
// sorunsuz �al��t���nda nodejs'in loglamas� i�indir.