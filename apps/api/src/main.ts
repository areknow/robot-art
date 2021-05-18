import * as express from 'express';
import { router } from './app/routes';

const app = express();
app.use(express.json());

app.use('/api', router);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
