// src/utils/stripe.js
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const initializeStripe = (publishableKey) => {
  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};
