import {model, Schema, Types} from 'mongoose';
import { OrderStatus } from '../constants/order_status';
import { Booking, BookingSchema } from './Booking.model';

export interface LatLng{
    lat: string;
    lng: string;
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat: {type: String, required: true},
        lng: {type: String, required: true},
    }
);

export interface Pay{
    Booking: Booking;
    Amount: number;
    Dead_Line: number;
}

export const PaymentSchema = new Schema<Pay>(
    {
        Booking:{type: BookingSchema, required: true},
        Amount:{ type: Number, required:true},
        Dead_Line: {type: Number, required: true}
    }
);

export interface Payment_Pay{
    id:string;
    Book: Pay[];
    totalamount:number;
    Patient_name: string;
    address: string;
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
}

const PriceSchema = new Schema<Payment_Pay>({
    Patient_name: {type: String, required: true},
    address: {type: String, required: true},
    paymentId: {type: String},
    totalamount: {type: Number, required: true},
    Book: {type: [PaymentSchema], required: true},
    status: {type: String, default: OrderStatus.NEW},
    user: {type: Schema.Types.ObjectId, required: true}
},{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const Paymentmodel = model('Payment', PriceSchema);