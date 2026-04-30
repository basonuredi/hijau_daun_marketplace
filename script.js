const Pi = window.Pi;
Pi.init({ version: "2.0" });

function bayarPi() {
  alert("Mulai");

  Pi.createPayment(
    {
      amount: 0.01,
      memo: "Test",
      metadata: {}
    },
    {
      onReadyForServerApproval: function(paymentId) {
        alert("Masuk approval");
      },
      onError: function(error) {
        alert("ERROR: " + JSON.stringify(error));
      }
    }
  );
}
