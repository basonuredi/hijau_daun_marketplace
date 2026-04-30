function bayarPi() {
  alert("Mulai");

  const Pi = window.Pi;

  if (!Pi) {
    alert("❌ Pi SDK belum siap");
    return;
  }

  // init DI SINI (bukan di atas)
  Pi.init({ version: "2.0" });

  // login user
  Pi.authenticate([], function(auth) {
    console.log("Login sukses");

    // BARU lakukan payment setelah login
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

  }, function(error) {
    alert("❌ Login gagal: " + JSON.stringify(error));
  });
}
