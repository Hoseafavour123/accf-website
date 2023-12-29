require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());


const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation',
            },
            unit_amount: Number(req.body.amount * 100)
          },
          quantity: 1,
        },
      ],
    })
    res.json({url: session.url})
  } catch (e) {
    res.status(500).json({error: e.message})
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});