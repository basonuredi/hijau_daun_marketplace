function bayarPi() {
  alert("Mulai");

  const Pi = window.Pi;

  if (!Pi) {
    alert("❌ Pi SDK tidak terbaca");
    return;
  }

  Pi.init({ version: "2.0" });

  Pi.createPayment(
    {
      amount: 0.01,
      memo: "Test Payment",
      metadata: {}
    },
    {
      onReadyForServerApproval: function(paymentId) {
        alert("✅ Masuk approval: " + paymentId);
      },
      onReadyForServerCompletion: function(paymentId, txid) {
        alert("✅ Complete: " + txid);
      },
      onCancel: function(paymentId) {
        alert("❌ Dibatalkan");
      },
      onError: function(error) {
        alert("❌ Error: " + JSON.stringify(error));
      }
    }
  );
}
