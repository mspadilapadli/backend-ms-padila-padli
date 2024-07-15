# Backend-MS-Padila-Padli

## Models

### User

```txt
- username : string,
- email : string, required, unique
- password : string, required
- role : string, required
```

### Product

```txt
- name : string
- price : integer
- stock : integer
- merchantId : string
```

## Relation - One to Many

Perhatikan relasi antara `User`, dan `Game` gunakan definisi relasi yang sesuai pada sequelize relation
