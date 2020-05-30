# covid19-cases-server

​
List of available endpoints:
​

- `POST /login`
  ​
- `GET /countries`
- `GET /reports`
- `POST /reports`
- `DELETE /reports/:id`
  ​
  ​
  ​
  Error response format:
  Status: 4xx or 5xx
  ​

```json
{
  "errors": ["...", "..."],
  "message": "..."
}
```

### POST /login

Request:

- data:

```json
{
  "username": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "token": "string",
  "id": "integer",
  "username": "string"
}
```


### GET /countries

Request:

- headers: token

Response:

- status: 200
- body:

```json
[
  {
    "name": "string",
    "cases": "integer",
    "deaths": "integer",
    "recovered": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  },
  ...
]
```

​

### GET /reports

description: get all current logged in user reports
​

Request:

- headers: - token: "string"

Response:

- status: 200
- body:
  ​

```json
[
  {
    "id": 18,
    "report": 10,
    "UserId": 1,
    "CountryId": 89,
    "createdAt": "2020-03-24T03:28:14.017Z",
    "updatedAt": "2020-03-24T03:28:14.017Z",
    "Country": {
      "id": 89,
      "name": "Afghanistan",
      "cases": 40,
      "deaths": 0,
      "recovered": 1,
      "createdAt": "2020-03-17T12:00:56.894Z",
      "updatedAt": "2020-03-24T03:28:14.024Z"
    }
  },
  ....
]
```

### POST /reports

description: get all current logged in user reports
notes: ketika berhasil menambah reports, jumlah cases pada country yang dilaporkan ikut bertambah / terupdate
​

Request:

- headers:token: "string"
- data:

```json
{
  "report": "integer",
  "CountryId": "integer"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
  "report": {
    "id": 19,
    "report": 50,
    "UserId": 1,
    "CountryId": 1,
    "updatedAt": "2020-05-25T09:08:44.519Z",
    "createdAt": "2020-05-25T09:08:44.519Z",
    "Country": {
      "id": 1,
      "name": "China",
      "deaths": 3213,
      "recovered": 67758,
      "cases": 80910,
      "createdAt": "2020-03-17T12:00:56.893Z",
      "updatedAt": "2020-05-25T09:08:44.538Z"
    }
  }
}
```

ketika report berhasil, jumlah cases pada country bertambah sesuai report yang di post
​
### DELETE /reports/:id

notes: - ketika berhasil menghapus reports, jumlah cases pada country yang dilaporkan ikut berkurang / terupdate - Jangan lupa ada authentication dan authoritation pada endpoint ini
​

Request:

- headers: - token: "string"
- params: - id: "integer" required

Response:

- status: 200
- body:
  ​

```json
{
  "report": "Successfully delete"
}

ketika report di delete maka jumlah cases pada negara yang reportnya didelete akan berkurang sesuai jumlah
report yang di delete
```
