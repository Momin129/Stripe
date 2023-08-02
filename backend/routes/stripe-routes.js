const express = require("express");
const User = require("../models/userModel");
const stripe = require("stripe")(
  "sk_test_51NYKzGSCcXuddg1EWgR6WfOzzxKMRj9OtBiJqwE4oVNc0WzV3tCoKLvZajHPZuhrzPPyCZc7qXWjWzEW2vhcZRp500W8qCMC0T"
);

const router = express.Router();

router.get(`/prices`, async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

router.get("/checkSubscription", async (req, res) => {
  const customer = await stripe.customers.list({ email: req.body.email });
  const custmerId = customer.data[0].id;

  const subscription = await stripe.subscriptions.list({ customer: custmerId });
  const currentDate = new Date();
  const endDate = new Date(subscription.data[0].current_period_end * 1000);
  if (currentDate > endDate) {
    const update = await User.findOneAndUpdate(
      { email: req.body.email },
      { subscribed: false }
    );
  }

  res.json({ subscription: subscription });
});

router.post("/updateSubscription", async (req, res) => {
  const customer = await stripe.customers.list({ email: req.body.email });
  const custmerId = customer.data[0].id;

  const subscription = await stripe.subscriptions.list({
    customer: custmerId,
  });

  const subscriptionItem = await stripe.subscriptionItems.update(
    subscription.data[0].items.data[0].id,
    {
      price: req.body.priceId,
    }
  );
  res.json({ subscriptionItem });
});

router.post(`/session`, async (req, res) => {
  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: req.body.email,
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: `http://localhost:5173/register`,
      cancel_url: `http://localhost:5173/register`,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  if (session) {
    const update = await User.findOneAndUpdate(
      { email: req.body.email },
      { subscribed: true }
    );
  }

  res.json(session);
});

module.exports = router;
