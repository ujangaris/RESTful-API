## install module

    npm i body-parser mongoose ejs express

## 365. Setup Server Solution

    Documentation: https://github.com/londonappbrewery/Build-Your-Own-RESTful-API

    jalankan server : nodemon app.js

## 366. GET All Articles part 1

    jalankan server : nodemon app.js
    pada browser : http://localhost:3000/articles
    dab lihat pada terminal, data akan tampil(jangan lupa insert beberapa data manual terlebih dahulu)

## 366. GET All Articles part 2

    jalankan server : nodemon app.js
    pada browser : http://localhost:3000/articles
    dab lihat pada browser, data akan tampil(jangan lupa insert beberapa data manual terlebih dahulu)

## 367. POST a new Article

    Documentation: https://mongoosejs.com/docs/models.html

    pengujian pada Postman : POST => localhost:3000/articles
                                body=> x-www-form-urlencoded :
                                title: jack Bauer
                                content: Jack Bauer once stepped into quicksand...

    kemudian coba lakukan send data, jika berhasil response akan menampilkan string yang kita buat
        "Successfully added a new article."

    chek juga pada database mongoDB Compas.

## 368. DELETE All Article

    Documentation: https://mongoosejs.com/docs/models.html
    pengujian pada Postman : DELETE => localhost:3000/articles

    jika berhasil data akan terhapus dan akan muncul pesan response sesuai yang kita buat

## 369. Chained Route Handlers Using Express

    ket: merubah strukture code lebih rapih.
    Documentation:
        app.route() => https://expressjs.com/en/guide/routing.html

    pengujian pada Postman :
                            - GET => localhost:3000/articles
                            - POST => localhost:3000/articles
                                body=> x-www-form-urlencoded :
                                title: jack Bauer
                                content: Jack Bauer once stepped into quicksand...
                            - DELETE => localhost:3000/articles
                                note: untuk delete jangan lupsa setelah hapus input data kembali!

## 370. GET a Specific Article

    Documentation:
        Route parameters => https://expressjs.com/en/guide/routing.html
        Route ASCII Encoding Reference => https://www.w3schools.com/tags/ref_urlencode.ASP

    pengujian pada Postman :
                            - GET => localhost:3000/articles/jack%20Bauer

    hasil response:
        {
            "_id": "61fe01ed726542f6c2a57515",
            "title": "jack Bauer",
            "content": "Jack Bauer once stepped into quicksand. The quicksand couldn't escape and nearly drowned."
        }
     catatan: jack%20Bauer => %20 artinya space
