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
  [],
  function(auth) {
    alert("LOGIN BERHASIL");
  },
  function(error) {
    alert("AUTH ERROR: " + JSON.stringify(error));
  }
);

        try {

          alert("MEMBUAT PAYMENT");

          const payment = await Pi.createPayment({
            amount: 0.01,
            memo: "Hijau Daun Test",
            metadata: {
              product: "test"
            }
          });

          alert("PAYMENT DIBUAT");
          console.log(payment);

        } catch(err) {

          alert("PAYMENT ERROR: " + err.message);

        }

      },

      function(error) {

        alert("AUTH ERROR: " + JSON.stringify(error));

      }
    );

  } catch (e) {

    alert("JS ERROR: " + e.message);

  }
}
