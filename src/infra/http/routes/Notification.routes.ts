import { Router } from 'express';
import { SendNotification } from '../../../modules/Notification/infra/http/controllers/SendNotification';

const sendNotification = new SendNotification();

const routes = Router();

routes.post('/', sendNotification.send);
routes.post('/webhook', sendNotification.sendWebhook);

export default routes;