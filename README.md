# stationary-shop

This is my assignment project and language uses [typescript](https://www.typescriptlang.org/docs/) project.
For server uses express.js and node.js.
For database using mongoDB with mongoose.

## Getting Started

First, run the development server:

```bash
 npm run start:dev
 npm run lint
 npm run build
 vercel --prod

```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

This project uses to automatically optimize by using eslint and load [Vercel](https://vercel.com), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

You can check out [the typescript GitHub repository](https://github.com/abadathossain/stationery-shop) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[vercel deploy link](https://stationery-shop-ten.vercel.app/)

[vercel deploy link for get products](https://stationery-shop-ten.vercel.app/api/v1/products/)

[github repository link for my project](https://github.com/abadathossain/stationery-shop)

# stationary-shop-server System Authentication Service

This is the documentation for the Authentication Service component of the stationary-shop-server System. It is built using TypeScript, Express.js, Zod validation, MongoDB and mongoose.

## API Endpoints

### Product

- `POST /products/create-product`

### product

- `GET /products`
- `GET /products/:id`
- `PATCH /products/:id`
- `DELETE /products/:id`

### Order

### Order

- `POST /orders/create-order`
  -- `GET /products`

Postman Documenttaion: [Click Here](https://documenter.getpostman.com/view/26682150/2s93zB72V9#acc25f08-de78-478b-809d-837ce239d2b3)
