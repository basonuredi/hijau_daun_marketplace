function bayarPi() {

  const Pi = window.Pi;

  if (!Pi) {
    alert("Pi SDK tidak ditemukan");
    return;
  }

  Pi.init({
    version: "2.0",
    sandbox: false
  });

  alert("SDK siap");

  
Pi.authenticate(
  ['username', 'payments'],
  function(auth) {
    alert("Login OK");
  },
  function(error) {
    alert("Auth Error: " + JSON.stringify(error));
  }
);
      Pi.createPayment(
        {
          amount: 0.01,
          memo: "Hijau Daun Test",
          metadata: {
            item: "test"
          }
        },
        {
          onReadyForServerApproval: function(paymentId) {
            alert("Approval: " + paymentId);
          },

          onReadyForServerCompletion: function(paymentId, txid) {
            alert("TXID: " + txid);
          },

          onCancel: function() {
            alert("Dibatalkan");
          },

          onError: function(error) {
            alert(JSON.stringify(error));
          }
        }
      );

    },

    function(error) {
      alert("Auth Error: " + JSON.stringify(error));
    }
  );
}
