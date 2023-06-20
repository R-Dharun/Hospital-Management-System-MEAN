import { number } from 'joi';
import {Schema, model} from 'mongoose';
export interface Booking {
    id:string;
    Patient_name:string;
    Doctor_name:string,
    Date_of_birth:number;
    Age:number
    Address:string;
    Phone_no:number;
    Appointment_date:number;
    Time:number;
  
}

export const BookingSchema = new Schema<Booking>({
    id:{type:String, required:true},
    Patient_name:{type:String, required:true},
    Doctor_name:{type:String, required:true},
    Date_of_birth:{type:Number, required:true},
    Age:{type:Number, required:true},
    Address:{type:String, required:true},
    Phone_no:{type:Number, required:true},
    Appointment_date:{type:Number, required:true},
    Time:{type:Number, required:true},
    },
    {
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const BookingModel = model<Booking>('booking', BookingSchema);