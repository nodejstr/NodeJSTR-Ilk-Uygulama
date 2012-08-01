var http = require('http');
// http protokolünü kodlarýmýzda kullanabilmek için dahil ediyor.
// require komutu ile içinde belirttiðimiz kütüphaneler nodejs içinde ya da
// npm ile yüklediðimiz yapýlar olmalýdýr

// http ile sunucumuzun kurulumunu yapýyoruz
http.createServer(function (req, res) {
// kurulum sonucu olarak bu isimsiz fonksiyona 'callback' geri dönüþ saðlanýr
  res.writeHead(200, {'Content-Type': 'text/plain'});
// res -> respond yani sunucunun döneceði cevap olarak kullanýlmaktadýr.
// 200 kodu sunucudan 'OK' sonucu yani sonucun hatasýz döndüðünü belirtir.
// sonuç tipinin 'text/plain' düz metin belgesi olduðunu belirtir.
  res.end('Hello World\n');
// içerik olarak ekrana helloWorld yazýsý yazdýrýlýr
}).listen(1337, '127.0.0.1');
// uygulama 1337 portundan localhost || 127.0.0.1 adresi üzerinden yayýn yapmaktadýr.
console.log('Server running at http://127.0.0.1:1337/');
// sorunsuz çalýþtýðýnda nodejs'in loglamasý içindir.