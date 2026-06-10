export default function handler(req, res) {

  console.log("APPROVE", req.body);

  res.status(200).json({
    success: true
  });

}
