const express = require("express");

const stripe = require("stripe")(
  "sk_test_51NYKzGSCcXuddg1EWgR6WfOzzxKMRj9OtBiJqwE4oVNc0WzV3tCoKLvZajHPZuhrzPPyCZc7qXWjWzEW2vhcZRp500W8qCMC0T"
);

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get Response from Researcher");
  res.json({ message: "It works" });
});

router.get(`/prices`, async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

router.get("/subscriptionId", async (req, res) => {
  const user = await stripe.customers.list({ email: "momin.rather@gmail.com" });
  const customer_id = user.data[0].id;
  const subscriptions = await stripe.subscriptions.list({
    customer: customer_id,
  });
  res.json(subscriptions);
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

  const user = await stripe.customers.list({
    email: session.customer_details.email,
  });

  const customer_id = user.data[0].id;
  const subscriptions = await stripe.subscriptions.list({
    customer: customer_id,
  });

  // console.log(subscriptions.data[0].current_period_start);
  const obj = {
    sub_id: subscriptions.data[0].id,
    email: req.body.email,
    start_date: subscriptions.data[0].current_period_start,
    end_date: subscriptions.data[0].current_period_end,
  };
  console.log(obj);
  res.json(session);
});

module.exports = router;
