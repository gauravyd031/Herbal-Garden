# Herbal Garden API Documentation

Backend API documentation for the Herbal Garden project.

## Tech Stack

- Hono
- Prisma
- PostgreSQL (Neon)
- JWT Authentication

## Base URL

```http
http://localhost:8787
```

Use the deployed Worker URL in production.

## Authentication Format

Protected routes require a JWT in the `Authorization` header.

```http
Authorization: Bearer <jwt>
```

Admin routes require a valid JWT for a user with role `ADMIN`.

## Response Format

Paginated endpoints return this structure:

```json
{
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

Common error response:

```json
{
  "message": "Internal server error"
}
```

---

## Authentication

### Sign Up

**Route:** `/auth/signup`

**Method:** `POST`

**Authentication Required:** No

**Request Parameters:** None

**Query Parameters:** None

**Request Body:**

```json
{
  "username": "adarsh",
  "email": "adarsh@example.com",
  "password": "secret123",
  "name": "Adarsh Rai"
}
```

**Success Response:** `201 Created`

```json
{
  "token": "jwt-token",
  "user": {
    "id": "clx_user_id",
    "username": "adarsh",
    "name": "Adarsh Rai",
    "role": "USER"
  }
}
```

**Error Responses:**

- `400 Bad Request`

```json
{
  "message": "Invalid input",
  "errors": {}
}
```

- `409 Conflict`

```json
{
  "message": "User already exists"
}
```

- `500 Internal Server Error`

```text
Internal server error
```

**Example Request:**

```bash
curl -X POST http://localhost:8787/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "adarsh",
    "email": "adarsh@example.com",
    "password": "secret123",
    "name": "Adarsh Rai"
  }'
```

**Example Response:**

```json
{
  "token": "jwt-token",
  "user": {
    "id": "clx_user_id",
    "username": "adarsh",
    "name": "Adarsh Rai",
    "role": "USER"
  }
}
```

### Sign In

**Route:** `/auth/signin`

**Method:** `POST`

**Authentication Required:** No

**Request Parameters:** None

**Query Parameters:** None

**Request Body:**

```json
{
  "identifier": "adarsh",
  "password": "secret123"
}
```

`identifier` can be either username or email.

**Success Response:** `200 OK`

```json
{
  "token": "jwt-token",
  "user": {
    "id": "clx_user_id",
    "username": "adarsh",
    "name": "Adarsh Rai",
    "role": "USER"
  }
}
```

**Error Responses:**

- `400 Bad Request`

```json
{
  "message": "Invalid input",
  "errors": {}
}
```

- `401 Unauthorized`

```json
{
  "message": "Invalid credentials"
}
```

- `500 Internal Server Error`

```text
Internal server error
```

**Example Request:**

```bash
curl -X POST http://localhost:8787/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "adarsh",
    "password": "secret123"
  }'
```

**Example Response:**

```json
{
  "token": "jwt-token",
  "user": {
    "id": "clx_user_id",
    "username": "adarsh",
    "name": "Adarsh Rai",
    "role": "USER"
  }
}
```

### Get Current User

**Route:** `/auth/me`

**Method:** `GET`

**Authentication Required:** Yes

**Request Parameters:** None

**Query Parameters:** None

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "id": "clx_user_id",
  "username": "adarsh",
  "email": "adarsh@example.com",
  "name": "Adarsh Rai",
  "role": "USER",
  "createdAt": "2026-06-07T10:00:00.000Z"
}
```

**Error Responses:**

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `404 Not Found`

```json
{
  "message": "User not found"
}
```

**Example Request:**

```bash
curl http://localhost:8787/auth/me \
  -H "Authorization: Bearer jwt-token"
```

**Example Response:**

```json
{
  "id": "clx_user_id",
  "username": "adarsh",
  "email": "adarsh@example.com",
  "name": "Adarsh Rai",
  "role": "USER",
  "createdAt": "2026-06-07T10:00:00.000Z"
}
```

### Logout

**Route:** `/auth/logout`

**Method:** `POST`

**Authentication Required:** Yes

**Request Parameters:** None

**Query Parameters:** None

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "message": "Logged out successfully"
}
```

**Error Responses:**

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

**Example Request:**

```bash
curl -X POST http://localhost:8787/auth/logout \
  -H "Authorization: Bearer jwt-token"
```

**Example Response:**

```json
{
  "message": "Logged out successfully"
}
```

---

## Plants

### List Plants

**Route:** `/plants`

**Method:** `GET`

**Authentication Required:** No

**Request Parameters:** None

**Query Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | number | No | Page number. Defaults to `1`. |
| `limit` | number | No | Items per page. Defaults to `10`, maximum `50`. |
| `search` | string | No | Searches plant name and scientific name. Trimmed and limited to 100 characters. |
| `category` | string | No | Category slug. |

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "plants": [
    {
      "id": "plant_id",
      "name": "Tulsi",
      "slug": "tulsi",
      "scientificName": "Ocimum tenuiflorum",
      "imageUrl": "https://example.com/tulsi.jpg",
      "category": {
        "id": "category_id",
        "name": "Medicinal",
        "slug": "medicinal"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

**Error Responses:**

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl "http://localhost:8787/plants?page=1&limit=10&search=tulsi&category=medicinal"
```

**Example Response:**

```json
{
  "plants": [
    {
      "id": "plant_id",
      "name": "Tulsi",
      "slug": "tulsi",
      "scientificName": "Ocimum tenuiflorum",
      "imageUrl": "https://example.com/tulsi.jpg",
      "category": {
        "id": "category_id",
        "name": "Medicinal",
        "slug": "medicinal"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

### Get Plant By Slug

**Route:** `/plants/:slug`

**Method:** `GET`

**Authentication Required:** No

**Request Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `slug` | string | Yes | Plant slug. |

**Query Parameters:** None

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "plant": {
    "id": "plant_id",
    "name": "Tulsi",
    "slug": "tulsi",
    "scientificName": "Ocimum tenuiflorum",
    "description": "Tulsi is a medicinal herb used in Ayurveda.",
    "benefits": ["Supports respiratory health"],
    "uses": ["Tea", "Herbal formulations"],
    "imageUrl": "https://example.com/tulsi.jpg",
    "sunlight": "Full sun",
    "watering": "Moderate",
    "soilType": "Well-drained soil",
    "categoryId": "category_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "updatedAt": "2026-06-07T10:00:00.000Z",
    "category": {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal"
    }
  }
}
```

**Error Responses:**

- `404 Not Found`

```json
{
  "message": "Plant not found"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl http://localhost:8787/plants/tulsi
```

**Example Response:**

```json
{
  "plant": {
    "id": "plant_id",
    "name": "Tulsi",
    "slug": "tulsi",
    "scientificName": "Ocimum tenuiflorum",
    "description": "Tulsi is a medicinal herb used in Ayurveda.",
    "benefits": ["Supports respiratory health"],
    "uses": ["Tea", "Herbal formulations"],
    "imageUrl": "https://example.com/tulsi.jpg",
    "sunlight": "Full sun",
    "watering": "Moderate",
    "soilType": "Well-drained soil",
    "categoryId": "category_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "updatedAt": "2026-06-07T10:00:00.000Z",
    "category": {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal"
    }
  }
}
```

### Create Plant

**Route:** `/plants`

**Method:** `POST`

**Authentication Required:** Yes, Admin only

**Request Parameters:** None

**Query Parameters:** None

**Request Body:**

```json
{
  "name": "Tulsi",
  "slug": "tulsi",
  "scientificName": "Ocimum tenuiflorum",
  "description": "Tulsi is a medicinal herb used in Ayurveda.",
  "benefits": ["Supports respiratory health"],
  "uses": ["Tea", "Herbal formulations"],
  "imageUrl": "https://example.com/tulsi.jpg",
  "sunlight": "Full sun",
  "watering": "Moderate",
  "soilType": "Well-drained soil",
  "categoryId": "category_id"
}
```

Use either `categoryId` or `categorySlug`.

**Success Response:** `201 Created`

```json
{
  "plant": {
    "id": "plant_id",
    "name": "Tulsi",
    "slug": "tulsi",
    "scientificName": "Ocimum tenuiflorum",
    "description": "Tulsi is a medicinal herb used in Ayurveda.",
    "benefits": ["Supports respiratory health"],
    "uses": ["Tea", "Herbal formulations"],
    "imageUrl": "https://example.com/tulsi.jpg",
    "sunlight": "Full sun",
    "watering": "Moderate",
    "soilType": "Well-drained soil",
    "categoryId": "category_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "updatedAt": "2026-06-07T10:00:00.000Z",
    "category": {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal"
    }
  }
}
```

**Error Responses:**

- `400 Bad Request`

```json
{
  "message": "Invalid input",
  "errors": {}
}
```

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `403 Forbidden`

```json
{
  "message": "Forbidden"
}
```

- `404 Not Found`

```json
{
  "message": "Category not found"
}
```

- `409 Conflict`

```json
{
  "message": "Plant with this name, slug, or scientific name already exists"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl -X POST http://localhost:8787/plants \
  -H "Authorization: Bearer admin-jwt-token" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tulsi",
    "slug": "tulsi",
    "scientificName": "Ocimum tenuiflorum",
    "description": "Tulsi is a medicinal herb used in Ayurveda.",
    "benefits": ["Supports respiratory health"],
    "uses": ["Tea", "Herbal formulations"],
    "imageUrl": "https://example.com/tulsi.jpg",
    "sunlight": "Full sun",
    "watering": "Moderate",
    "soilType": "Well-drained soil",
    "categorySlug": "medicinal"
  }'
```

**Example Response:**

```json
{
  "plant": {
    "id": "plant_id",
    "name": "Tulsi",
    "slug": "tulsi",
    "scientificName": "Ocimum tenuiflorum",
    "description": "Tulsi is a medicinal herb used in Ayurveda.",
    "benefits": ["Supports respiratory health"],
    "uses": ["Tea", "Herbal formulations"],
    "imageUrl": "https://example.com/tulsi.jpg",
    "sunlight": "Full sun",
    "watering": "Moderate",
    "soilType": "Well-drained soil",
    "categoryId": "category_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "updatedAt": "2026-06-07T10:00:00.000Z",
    "category": {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal"
    }
  }
}
```

### Update Plant

**Route:** `/plants/:id`

**Method:** `PATCH`

**Authentication Required:** Yes, Admin only

**Request Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Plant ID. |

**Query Parameters:** None

**Request Body:**

```json
{
  "name": "Holy Basil",
  "watering": "Regular"
}
```

Any create-plant field can be provided. At least one field is required.

**Success Response:** `200 OK`

```json
{
  "plant": {
    "id": "plant_id",
    "name": "Holy Basil",
    "slug": "tulsi",
    "scientificName": "Ocimum tenuiflorum",
    "description": "Tulsi is a medicinal herb used in Ayurveda.",
    "benefits": ["Supports respiratory health"],
    "uses": ["Tea", "Herbal formulations"],
    "imageUrl": "https://example.com/tulsi.jpg",
    "sunlight": "Full sun",
    "watering": "Regular",
    "soilType": "Well-drained soil",
    "categoryId": "category_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "updatedAt": "2026-06-07T10:05:00.000Z",
    "category": {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal"
    }
  }
}
```

**Error Responses:**

- `400 Bad Request`

```json
{
  "message": "Invalid input",
  "errors": {}
}
```

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `403 Forbidden`

```json
{
  "message": "Forbidden"
}
```

- `404 Not Found`

```json
{
  "message": "Plant not found"
}
```

- `404 Not Found`

```json
{
  "message": "Category not found"
}
```

- `409 Conflict`

```json
{
  "message": "Plant with this name, slug, or scientific name already exists"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl -X PATCH http://localhost:8787/plants/plant_id \
  -H "Authorization: Bearer admin-jwt-token" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Holy Basil",
    "watering": "Regular"
  }'
```

**Example Response:**

```json
{
  "plant": {
    "id": "plant_id",
    "name": "Holy Basil",
    "slug": "tulsi",
    "scientificName": "Ocimum tenuiflorum",
    "description": "Tulsi is a medicinal herb used in Ayurveda.",
    "benefits": ["Supports respiratory health"],
    "uses": ["Tea", "Herbal formulations"],
    "imageUrl": "https://example.com/tulsi.jpg",
    "sunlight": "Full sun",
    "watering": "Regular",
    "soilType": "Well-drained soil",
    "categoryId": "category_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "updatedAt": "2026-06-07T10:05:00.000Z",
    "category": {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal"
    }
  }
}
```

### Delete Plant

**Route:** `/plants/:id`

**Method:** `DELETE`

**Authentication Required:** Yes, Admin only

**Request Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Plant ID. |

**Query Parameters:** None

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "message": "Plant deleted successfully"
}
```

**Error Responses:**

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `403 Forbidden`

```json
{
  "message": "Forbidden"
}
```

- `404 Not Found`

```json
{
  "message": "Plant not found"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl -X DELETE http://localhost:8787/plants/plant_id \
  -H "Authorization: Bearer admin-jwt-token"
```

**Example Response:**

```json
{
  "message": "Plant deleted successfully"
}
```

---

## Categories

### List Categories

**Route:** `/categories`

**Method:** `GET`

**Authentication Required:** No

**Request Parameters:** None

**Query Parameters:** None

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "categories": [
    {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal",
      "description": "Medicinal plants and herbs.",
      "_count": {
        "plants": 12
      }
    }
  ]
}
```

**Error Responses:**

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl http://localhost:8787/categories
```

**Example Response:**

```json
{
  "categories": [
    {
      "id": "category_id",
      "name": "Medicinal",
      "slug": "medicinal",
      "description": "Medicinal plants and herbs.",
      "_count": {
        "plants": 12
      }
    }
  ]
}
```

### List Plants By Category

**Route:** `/categories/:identifier/plants`

**Method:** `GET`

**Authentication Required:** No

**Request Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `identifier` | string | Yes | Category ID or category slug. |

**Query Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | number | No | Page number. Defaults to `1`. |
| `limit` | number | No | Items per page. Defaults to `10`, maximum `50`. |
| `search` | string | No | Searches plant name and scientific name inside the category. Trimmed and limited to 100 characters. |

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "category": {
    "id": "category_id",
    "name": "Medicinal",
    "slug": "medicinal",
    "description": "Medicinal plants and herbs."
  },
  "plants": [
    {
      "id": "plant_id",
      "name": "Tulsi",
      "slug": "tulsi",
      "scientificName": "Ocimum tenuiflorum",
      "imageUrl": "https://example.com/tulsi.jpg",
      "category": {
        "id": "category_id",
        "name": "Medicinal",
        "slug": "medicinal"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

**Error Responses:**

- `404 Not Found`

```json
{
  "message": "Category not found"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl "http://localhost:8787/categories/medicinal/plants?page=1&limit=10&search=tulsi"
```

**Example Response:**

```json
{
  "category": {
    "id": "category_id",
    "name": "Medicinal",
    "slug": "medicinal",
    "description": "Medicinal plants and herbs."
  },
  "plants": [
    {
      "id": "plant_id",
      "name": "Tulsi",
      "slug": "tulsi",
      "scientificName": "Ocimum tenuiflorum",
      "imageUrl": "https://example.com/tulsi.jpg",
      "category": {
        "id": "category_id",
        "name": "Medicinal",
        "slug": "medicinal"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

---

## Favorites

### List Favorites

**Route:** `/favorites`

**Method:** `GET`

**Authentication Required:** Yes

**Request Parameters:** None

**Query Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `page` | number | No | Page number. Defaults to `1`. |
| `limit` | number | No | Items per page. Defaults to `10`, maximum `50`. |

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "favorites": [
    {
      "createdAt": "2026-06-07T10:00:00.000Z",
      "plant": {
        "id": "plant_id",
        "name": "Tulsi",
        "slug": "tulsi",
        "scientificName": "Ocimum tenuiflorum",
        "imageUrl": "https://example.com/tulsi.jpg",
        "category": {
          "id": "category_id",
          "name": "Medicinal",
          "slug": "medicinal"
        }
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

**Error Responses:**

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl "http://localhost:8787/favorites?page=1&limit=10" \
  -H "Authorization: Bearer jwt-token"
```

**Example Response:**

```json
{
  "favorites": [
    {
      "createdAt": "2026-06-07T10:00:00.000Z",
      "plant": {
        "id": "plant_id",
        "name": "Tulsi",
        "slug": "tulsi",
        "scientificName": "Ocimum tenuiflorum",
        "imageUrl": "https://example.com/tulsi.jpg",
        "category": {
          "id": "category_id",
          "name": "Medicinal",
          "slug": "medicinal"
        }
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

### Get Favorite Status

**Route:** `/favorites/:plantId`

**Method:** `GET`

**Authentication Required:** Yes

**Request Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plantId` | string | Yes | Plant ID. |

**Query Parameters:** None

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "isFavorite": true
}
```

**Error Responses:**

- `400 Bad Request`

```json
{
  "message": "Plant id is required"
}
```

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl http://localhost:8787/favorites/plant_id \
  -H "Authorization: Bearer jwt-token"
```

**Example Response:**

```json
{
  "isFavorite": true
}
```

### Add Favorite

**Route:** `/favorites/:plantId`

**Method:** `POST`

**Authentication Required:** Yes

**Request Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plantId` | string | Yes | Plant ID. |

**Query Parameters:** None

**Request Body:** None

**Success Response:** `201 Created`

```json
{
  "favorite": {
    "userId": "clx_user_id",
    "plantId": "plant_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "plant": {
      "id": "plant_id",
      "name": "Tulsi",
      "slug": "tulsi",
      "scientificName": "Ocimum tenuiflorum",
      "description": "Tulsi is a medicinal herb used in Ayurveda.",
      "benefits": ["Supports respiratory health"],
      "uses": ["Tea", "Herbal formulations"],
      "imageUrl": "https://example.com/tulsi.jpg",
      "sunlight": "Full sun",
      "watering": "Moderate",
      "soilType": "Well-drained soil",
      "categoryId": "category_id",
      "createdAt": "2026-06-07T10:00:00.000Z",
      "updatedAt": "2026-06-07T10:00:00.000Z",
      "category": {
        "id": "category_id",
        "name": "Medicinal",
        "slug": "medicinal"
      }
    }
  }
}
```

**Error Responses:**

- `400 Bad Request`

```json
{
  "message": "Plant id is required"
}
```

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `404 Not Found`

```json
{
  "message": "Plant not found"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl -X POST http://localhost:8787/favorites/plant_id \
  -H "Authorization: Bearer jwt-token"
```

**Example Response:**

```json
{
  "favorite": {
    "userId": "clx_user_id",
    "plantId": "plant_id",
    "createdAt": "2026-06-07T10:00:00.000Z",
    "plant": {
      "id": "plant_id",
      "name": "Tulsi",
      "slug": "tulsi",
      "scientificName": "Ocimum tenuiflorum",
      "description": "Tulsi is a medicinal herb used in Ayurveda.",
      "benefits": ["Supports respiratory health"],
      "uses": ["Tea", "Herbal formulations"],
      "imageUrl": "https://example.com/tulsi.jpg",
      "sunlight": "Full sun",
      "watering": "Moderate",
      "soilType": "Well-drained soil",
      "categoryId": "category_id",
      "createdAt": "2026-06-07T10:00:00.000Z",
      "updatedAt": "2026-06-07T10:00:00.000Z",
      "category": {
        "id": "category_id",
        "name": "Medicinal",
        "slug": "medicinal"
      }
    }
  }
}
```

### Remove Favorite

**Route:** `/favorites/:plantId`

**Method:** `DELETE`

**Authentication Required:** Yes

**Request Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plantId` | string | Yes | Plant ID. |

**Query Parameters:** None

**Request Body:** None

**Success Response:** `200 OK`

```json
{
  "message": "Favorite removed successfully"
}
```

**Error Responses:**

- `400 Bad Request`

```json
{
  "message": "Plant id is required"
}
```

- `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

- `404 Not Found`

```json
{
  "message": "Favorite not found"
}
```

- `500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

**Example Request:**

```bash
curl -X DELETE http://localhost:8787/favorites/plant_id \
  -H "Authorization: Bearer jwt-token"
```

**Example Response:**

```json
{
  "message": "Favorite removed successfully"
}
```
