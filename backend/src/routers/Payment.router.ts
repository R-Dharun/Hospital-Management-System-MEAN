import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import { OrderStatus as Status } from '../constants/order_status';
import { Paymentmodel } from '../models/Payment.model';
import auth from '../middlewares/auth.mid';

const router = Router();
router.use(auth);

router.post('/create', asyncHandler(async (req: any, res: any) => {
    const request = req.body;
    if (request.items.length <= 0) {
        res.status(HTTP_BAD_REQUEST).send('empty!');
        return;
    }

    await Paymentmodel.deleteOne({
        user: req.user.id,
        status: Status.NEW
    });

    const newOrder = new Paymentmodel({ ...request, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
}
))

router.get('/CurrentUser', asyncHandler(async (req: any, res) => {
    const order = await getCurrentUser(req);
    if (order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))

router.post('/pay', asyncHandler(async (req: any, res) => {
    const { paymentId } = req.body;
    const order = await getCurrentUser(req);
    if (!order) {
        res.status(HTTP_BAD_REQUEST).send(' Not Found!');
        return;
    }

    order.paymentId = paymentId;
    order.status = Status.PAID;
    await order.save();

    res.send(order._id);
}))

router.get('/track/:id', asyncHandler(async (req, res) => {
    const order = await Paymentmodel.findById(req.params.id);
    res.send(order);
}))

export default router;

async function getCurrentUser(req: any) {
    return await Paymentmodel.findOne({ user: req.user.id, status: Status.NEW });
}
