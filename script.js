const Pi = window.Pi;

function bayarPi() {
  alert("Mulai");

  if (!Pi) {
    alert("❌ Pi SDK tidak aktif");
    return;
  }

  Pi.init({ version: "2.0" });

  Pi.createPayment(
    {
      amount: 0.01,
      memo: "Test Payment Hijau Daun",
      metadata: { produk: "test" }
    },
    {
      onReadyForServerApproval: function(paymentId) {
        alert("➡️ Masuk approval: " + paymentId);

        fetch('/api/approve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentId })
        });
      },

      onReadyForServerCompletion: function(paymentId, txid) {
        alert("✅ Sukses TX: " + txid);

        fetch('/api/complete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentId, txid })
        });
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
