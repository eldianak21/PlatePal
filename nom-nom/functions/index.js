// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
// //

// // exports.createStripeCheckout = function.https.onCall((data, context))

// const { onRequest } = require("firebase-functions/v2/https");
// import { onRequest } from "firebase-functions/v2/https";
import { onRequest } from "firebase-functions/v2/https";
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();

// setGlobalOptions({maxInstances: 10})
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).json({
    message: "success !",
  })
);

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});

// app.post("/payment/create", async (req, res) => {
//   const total = req.query.total;
//   const paymentMethod = req.body.payment_method; // Access payment method from request body

//   if (total > 0 && paymentMethod) {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: "usd",
//       paymentMethod, // Include payment method in the request
//     });
//     res.status(201).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } else {
//     res.status(400).json({
//       // Use 400 for bad request
//       message: "total must be greater than 0 and payment method is required",
//     });
//   }
// });

exports.api = onRequest(app);
