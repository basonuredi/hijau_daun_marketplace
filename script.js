const Pi = window.Pi;

Pi.init({ version: "2.0" });

function bayarPi() {
  Pi.createPayment(
    {
      amount: 0.01,
      memo: "Test",
      metadata: {}
    },
    {
      onReadyForServerApproval: function(paymentId) {
        fetch('/api/approve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentId })
        });
      },

      onReadyForServerCompletion: function(paymentId, txid) {
        fetch('/api/complete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentId, txid })
        });
      },

      onCancel: function(paymentId) {
        alert("Dibatalkan");
      },

      onError: function(error) {
        alert("Error: " + error);
      }
    }
  );
}
