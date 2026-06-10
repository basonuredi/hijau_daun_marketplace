function bayarPi() {

  alert("Tombol ditekan");

  try {

    const Pi = window.Pi;

    if (!Pi) {
      alert("Pi SDK tidak ditemukan");
      return;
    }

    alert("Pi ditemukan");

    Pi.init({
      version: "2.0",
      sandbox: false
    });

    alert("SDK siap");

    Pi.authenticate(
      ["username", "payments"],

      function(auth) {

        alert("LOGIN BERHASIL");

        Pi.createPayment(
          {
            amount: 0.01,
            memo: "Pembayaran Hijau Daun Marketplace",
            metadata: {
              product: "test-product",
              source: "hijau-daun-marketplace"
            }
          },

          {
            onReadyForServerApproval: function(paymentId) {

              alert("APPROVAL: " + paymentId);

              fetch("/api/approve", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  paymentId: paymentId
                })
              })
              .then(res => res.json())
              .then(data => {
                console.log("Approve OK", data);
              })
              .catch(err => {
                alert("APPROVE ERROR");
                console.error(err);
              });

            },

            onReadyForServerCompletion: function(paymentId, txid) {

              alert("TX BERHASIL");

              fetch("/api/complete", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  paymentId: paymentId,
                  txid: txid
                })
              })
              .then(res => res.json())
              .then(data => {
                console.log("Complete OK", data);
              })
              .catch(err => {
                alert("COMPLETE ERROR");
                console.error(err);
              });

            },

            onCancel: function(paymentId) {

              alert("PEMBAYARAN DIBATALKAN");

            },

            onError: function(error) {

              alert("PAYMENT ERROR");

              console.error(error);

            }

          }
        );

      },

      function(error) {

        alert("AUTH ERROR");

        console.error(error);

      }
    );

  } catch (e) {

    alert("JS ERROR: " + e.message);

    console.error(e);

  }

}
