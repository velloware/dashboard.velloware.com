import { Router } from 'express';
import { SendReceiver } from '../../../modules/Receiver/infra/http/controllers/SendReceiver';

const sendReceiver = new SendReceiver();

const routes = Router();

routes.post('/', sendReceiver.send);

export default routes;