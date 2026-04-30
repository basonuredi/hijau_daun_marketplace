const Pi = window.Pi;

function bayarPi() {
  alert("Mulai");

  if (!Pi) {
    alert("Pi SDK tidak terbaca!");
    return;
  }

  Pi.init({ version: "2.0" });

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
        alert("Error: " + JSON.stringify(error));
      }
    }
  );
}
