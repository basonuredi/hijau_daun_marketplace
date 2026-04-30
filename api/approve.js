export default function handler(req, res) {
  const { paymentId } = req.body;

  console.log("Approve:", paymentId);

  res.status(200).json({ success: true });
}
