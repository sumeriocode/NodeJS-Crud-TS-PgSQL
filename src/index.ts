/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";
import bodyParser from 'body-parser'
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as OpenApiValidator from 'express-openapi-validator';
import { ErrorHandler } from "./middleware/error.handler";
import yaml from 'js-yaml';
import fs from 'fs';

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT = process.env.PORT || 9000;

const app = express();
const corsOptionsDelegate = (req, callback) => {
    const corsOptions = { origin: true }
    callback(null, corsOptions)
}

app.use(function (req, res, next) {
    res.removeHeader('x-powered-by')
    next()
})
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "REST API for Swagger Documentation",
            version: "1.0.0",
        },
        servers: [{ url: "http://localhost:7001/api/v1" }],
    },
    apis: [
        `${__dirname}/routes/*.ts`,
        `${__dirname}/**/**/*.ts`,
        "./dist/routes/*.ts",
    ],
};

/**
 *  App Configuration
 */
app.use(cors(corsOptionsDelegate))
app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }))
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb'
    })
)
app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }))
const swaggerSpec = swaggerJSDoc(options);
const swaggerYaml = yaml.dump(swaggerSpec);
fs.writeFileSync(`${__dirname}/openapi.yaml`, swaggerYaml);
const apiSpec = `${__dirname}/openapi.yaml`;
app.use(
    OpenApiValidator.middleware({
      apiSpec: apiSpec,
      validateRequests: true,
    })
  );
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router)
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(ErrorHandler.errorHandler)

/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


