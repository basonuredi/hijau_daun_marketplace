async function bayarPi() {

  try {

    const Pi = window.Pi;

    if (!Pi) {
      alert("Pi tidak ditemukan");
      return;
    }

    Pi.init({
      version: "2.0",
      sandbox: false
    });

    alert("SDK siap");

    const auth = await Pi.authenticate(["username", "payments"]);

    alert("LOGIN BERHASIL");

    const payment = await Pi.createPayment({
      amount: 0.01,
      memo: "Hijau Daun Test Payment",
      metadata: {
        product: "test"
      }
    });

    alert("PAYMENT DIBUAT");

    console.log(payment);

  } catch (e) {

    alert("ERROR: " + JSON.stringify(e));

    console.error(e);

  }

}
