import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      title: { type: String, required: true },

      image: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },
  ],
  shippingMethod: {
    city: String,
    country: String,
    postalCode: String,
    address: String,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isPaid: { type: Boolean, default: false, required: true },
  isDelivered: { type: Boolean, default: false, required: true },
  paidAt: Date,
  deliveredAt: Date,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
