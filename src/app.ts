import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";
import v1Routes from "./routes/v1.router";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// v1 routes
app.use("/v1", v1Routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
