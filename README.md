# backend-ms-padila-padli

## Ringkasan

Ada market place merah kuning hijau, Dimana dapat menghubungkan sebuah merchant dan
customer, untuk bisa mendapatkan lebih banyak lagi customer dan customer supaya terus
melakukan transaksi, market place merah kuning hijau menyiapkan diskon dan bebas ongkir, dengan
ketentuan setiap transaksi produk diatas 15000 akan mendapatkan bebas ongkir, dan jika transaksi
produk diatas 50000 mendapatkan diskon sebesar 10%.
Objective:
Buat API untuk merchant dan customer minimal (write dan list)
a. Merchant dapat create dan post products
b. Customer dapat membeli produk dan serta mendapatkan bebas ongkir dan diskon sesuai
dengan yang diatas.

Persyaratan API :
a) Menggunakan Token/JWT
b) Setiap API diberikan validasi token/JWT
c) Merchant dapat create product
(Bisa update dan delete menjadi nilai tambah)
d) Customer dapat melihat list produk
e) Setiap kali transaksi, customer mendapatkan bebas ongkir dan diskon sesuai dengan kriteria
yang diatas
f) Merchant dapat melihat customer siapa saja yang membeli

Notes:

-   Gunakan database MySQL / PostgreSQL.
-   Letakan hasil test pada gitlab atau github dengan menggunakan nama lengkap sebagai nama
    aplikasinya, contoh: backend-valentino-rossi
-   Buat interface sesederhana mungkin, berikan postman dan database serta cara how to
    use/install pada readme.

Additional:

-   Untuk add product hanya bisa dilakukan oleh pihak merchant
-   Setelah product ditambahkan oleh merchant, untuk update dan delete product tersebut hanya bisa dilakukan oleh merchant yang bersangkutan / yang menambahkan, tidak bisa dilakukan oleh merchant lainnya.
