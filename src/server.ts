import express from 'express';

import {
    soyYo,
} from './routes/index';

const server = () => {
    const app = express();
    // middlewares
    app.use(express.json());
    app.use('/entities/filter', soyYo);
    return app;
};

export default { server };
