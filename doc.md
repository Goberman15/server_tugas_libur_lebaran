# Tugas Libur Lebaran

[COVID Server](https://secret-tundra-12625.herokuapp.com/)

## API Documentation

----
  **User Login**
----
  Login to user account to access COVID Web (if user already register)

* **URL**

  /login

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | username | <YOUR_USERNAME> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJodWV5Z3VleSIsImlhdCI6MTU5MDg0NjY1Mn0.Zu4L_xv_yD0MwGT6XiaQaOT4d9q6TNl23iY2foqKV6M",
        "id": 1,
        "username": "hueyguey"
    }
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "invalid email/password" }
        ```

----
  **Show All Country Data**
----
  Show Summary of COVID Case in every country

* **URL**

  /countries

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

    | query | value | required |
    | :---: | :---: | :---: |
    | search | string | false |

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
        {
            "name": "Italy",
            "cases": 24747,
            "deaths": 1809,
            "recovered": 2335,
            "createdAt": "2020-05-30T10:11:04.496Z",
            "updatedAt": "2020-05-30T13:00:02.936Z"
        },
        ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You dont have permission to do this action" }
    ```
    OR

    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Reports**
----
  Show All reports that created by current logged in user

* **URL**

  /reports

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

    none

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
        {
            "name": "Italy",
            "cases": 24747,
            "deaths": 1809,
            "recovered": 2335,
            "createdAt": "2020-05-30T10:11:04.496Z",
            "updatedAt": "2020-05-30T13:00:02.936Z"
        },
        ...
    ]
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You dont have permission to do this action" }
    ```
    OR

    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

**Add New Report**
----
  Submit New COVID Report on the selected country

* **URL**

  /reports

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | CountryId | <YOUR_Country_Id> | true |
  | report | <YOUR_REPORT_CASES> | true |

* **Success Response:**
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
        "report": {
            "id": 14,
            "report": 10,
            "UserId": 1,
            "CountryId": 2,
            "createdAt": "2020-05-30T14:02:28.688Z",
            "updatedAt": "2020-05-30T14:02:28.688Z",
            "Country": {
                "name": "Italy",
                "cases": 24757,
                "deaths": 1809,
                "recovered": 2335,
                "createdAt": "2020-05-30T10:11:04.496Z",
                "updatedAt": "2020-05-30T14:02:28.692Z"
            }
        }
    }
    ```
 
* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error" : "Report Case name can't be empty" }
      ```

      OR

      ```json
      { "error" : "Report case only accept integer value" }
      ```

      OR

      ```json
      { "error" : "Report case must be greater than 0" }
      ```

      OR

      ```json
      { "error" : "UserId can't be empty" }
      ```

      OR

      ```json
      { "error" : "Country Name can't be empty" }
      ```

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You dont have permission to do this action" }
    ```

    OR

    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Delete Report**
----
  Delete existing report created by current logged in user, selected by id

* **URL**

  /reports/:id

* **Method:**
  
  `DELETE`
  
* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

    none

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
    
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Successfully delete" }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "You dont have permission to do this action" }
    ```

    OR
  
    ```json
    { "error" : "you need to login to access this page" }
    ```

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no report with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```
    