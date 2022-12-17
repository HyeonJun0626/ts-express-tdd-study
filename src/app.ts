import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morganMiddleware from './config/morgan';
const app = express();

app.use(morganMiddleware);

console.log('node env ==========');
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
    case 'local':
        dotenv.config({ path: path.join(__dirname, '../env/.env.local') });
        break;
    case 'dev':
        dotenv.config({ path: path.join(__dirname, '../env/.env.dev') });
        break;
    case 'prod':
        dotenv.config({ path: path.join(__dirname, '../env/.env.prod') });
        break;
    default:
        throw new Error('process.env.NODE_ENV Not found');
}
console.log('process.env.TEST ======');
console.log(process.env.TEST);


app.get('/', (req, res, next) => {
    res.status(200).send('Hello');
});


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});