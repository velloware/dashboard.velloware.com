import { Router } from 'express';
import { SendNotification } from '../../../modules/Notification/infra/http/controllers/SendNotification';

const sendNotification = new SendNotification();

const routes = Router();

routes.post('/', sendNotification.send);

export default routes;