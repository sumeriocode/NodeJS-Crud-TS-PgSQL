/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";
dotenv.config();
/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT = process.env.PORT || 9000;

const app = express();

/**
 *  App Configuration
 */
app.use(express.urlencoded({ extended: true }));
app.use(router)
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


