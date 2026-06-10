function bayarPi() {

  alert("Tombol ditekan");

  try {

    const Pi = window.Pi;

    if (!Pi) {
      alert("Pi tidak ditemukan");
      return;
    }

    alert("Pi ditemukan");

    Pi.init({
      version: "2.0",
      sandbox: false
    });

    alert("SDK siap");

    Pi.authenticate(
      ["payments"],
      function(auth) {
        alert("LOGIN BERHASIL");

        Pi.createPayment(
          {
            amount: 0.01,
            memo: "Test Payment",
            metadata: {
              test: true
            }
          },
          {
            onReadyForServerApproval: function(paymentId) {
              alert("APPROVAL: " + paymentId);
            },

            onReadyForServerCompletion: function(paymentId, txid) {
              alert("TXID: " + txid);
            },

            onCancel: function() {
              alert("DIBATALKAN");
            },

            onError: function(error) {
              alert("PAYMENT ERROR: " + JSON.stringify(error));
            }
          }
        );
      },

      function(error) {
        alert("AUTH ERROR: " + JSON.stringify(error));
      }
    );

  } catch (e) {
    alert("JS ERROR: " + e.message);
  }
}
