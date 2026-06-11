async function bayarPi() {

  alert("Mulai");

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

    console.log(auth);

  } catch (e) {

    alert("ERROR: " + JSON.stringify(e));

  }

}
