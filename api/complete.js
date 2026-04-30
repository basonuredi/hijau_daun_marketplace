export default function handler(req, res) {
  const { paymentId, txid } = req.body;

  console.log("Complete:", paymentId, txid);

  res.status(200).json({ success: true });
}
