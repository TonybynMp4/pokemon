import 'dotenv/config';
import express from 'express';
import router from './routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`);
});