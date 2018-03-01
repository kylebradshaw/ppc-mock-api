# PPC MOCK API

`npm install`

`npm run start`


Endpoints are exposed <http://localhost:4005>

## CREATE USER

*POST* `/users`

{
  "first_name": "Kyle",
  "last_name": "Bradshaw",
  "email": "kyle.bradshaw@publicisgroupe.net",
  "role_id": 10,
  "lion_login": "kbradsha",
  "agency": "UrM0Mz",
  "product_ids": []
}

## RETRIVE USERS

*GET* `/users`

## UPDATE USER

*PUT* `/users/:id`

{
  "first_name": "Kyle",
  "last_name": "Bradshaw",
  "email": "kyle.bradshaw@publicisgroupe.net",
  "role_id": 10,
  "lion_login": "kbradsha",
  "agency": "UrD4Dz",
  "product_ids": []
}

*PATCH* `/users/:id`

{
  "agency": "TehM0Mz",
}

## DELETE

*DELETE* `/users/:id`
