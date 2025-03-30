import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";
import { UserRoutes } from "./app/modules/user/user.route";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { AuthRoutes } from "./app/modules/auth/auth.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api", ProductRoutes);
app.use("/api", OrderRoutes);
app.use("/api", UserRoutes);
app.use("/api/auth", AuthRoutes);

// middlewares
app.use(notFound);
app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello my Stationary Shop!");
});

export default app;
