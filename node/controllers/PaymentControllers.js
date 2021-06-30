const PaymentModel=require("../models/PaymentModels")
exports.findPayment = async (ctx, next) => {
    try {
        let Payment = await PaymentModel.find({});
        ctx.body = Payment;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.findPaymentbyId = async (ctx, next) => {
    try {
        let Payment = await PaymentModel.findById({_id:ctx.params.id});
        ctx.body = Payment;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addPayment = async (ctx, next) => {
    try {
        let new_Payment = new PaymentModel(ctx.request.body)
        await new_Payment.save();
        ctx.body=new_Payment;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.removePayment=async(ctx,next)=>{
try{
    let Payment=await PaymentModel.remove({_id:ctx.params.PaymentId});
    ctx.body={message:' payment successfully deleted'};
}catch (err) {              
    ctx.status = err.status || 500;
    ctx.body = err.message;
}
};
exports.updatePayment=async(ctx,next)=>{
    try{
        let Payment=await PaymentModel.findOneAndUpdate({_id:ctx.params.PaymentId},ctx.request.body, {new: true});
        ctx.body=Payment
    }catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
    };
