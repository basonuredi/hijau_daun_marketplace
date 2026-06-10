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

  } catch (e) {

    alert("JS ERROR: " + e.message);

  }
}
