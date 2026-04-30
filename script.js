const Pi = window.Pi;

if (Pi) {
  Pi.init({ version: "2.0" });

  Pi.authenticate([], function(auth) {
    console.log("Login sukses");
  }, function(error) {
    console.log("Login gagal");
  });
}

function bayarPi() {
  alert("Mulai");

  if (!Pi) {
    alert("❌ SDK tidak aktif");
    return;
  }

  Pi.createPayment(
    {
      amount: 0.01,
      memo: "Test Payment",
      metadata: {}
    },
    {
      onReadyForServerApproval: function(paymentId) {
        alert("➡️ Approval: " + paymentId);
      },
      onReadyForServerCompletion: function(paymentId, txid) {
        alert("✅ TX: " + txid);
      },
      onCancel: function() {
        alert("❌ Dibatalkan");
      },
      onError: function(error) {
        alert("❌ Error: " + JSON.stringify(error));
      }
    }
  );
}
