import express from 'express';

import {
    soyYo,
} from './routes/index';

const server = () => {
    const app = express();
    // middlewares
    app.use(express.json());
    app.use('/soy-yo', soyYo);
    return app;
};

export default { server };
