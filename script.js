function bayarPi() {
  alert("Mulai");

  if (!window.Pi) {
    alert("❌ Pi SDK TIDAK AKTIF (domain salah)");
    return;
  }

  alert("✅ Pi SDK AKTIF");
}
