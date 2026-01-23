import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();
app.use(cors());
app.use(express.json());

const orders = {
  'KM12345': { id: 'KM12345', status: 'In Transit' },
  'KM98765': { id: 'KM98765', status: 'Delivered' },
  'KM54321': { id: 'KM54321', status: 'Processing' },
};

app.get('/api', (req, res) => {
  res.send('✅ K&M Exports Order Tracking API (Vercel) is running');
});

app.get('/api/orders/track/:id', (req, res) => {
  const orderId = req.params.id.toUpperCase();
  const order = orders[orderId];

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  return res.json(order);
});

export default serverless(app);
