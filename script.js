JavaScript
console.log("Marketplace siap");
const Pi = window.Pi;
Pi.init({ version: "2.0" });

function bayarPi() {
  Pi.createPayment({
    amount: 0.01,
    memo: "Pembelian Cabai",
    metadata: { productId: "cabai_1" }
  }, {
    onReadyForServerApproval: function(paymentId) {
      console.log("Ready approval:", paymentId);
    },
    onReadyForServerCompletion: function(paymentId, txid) {
      console.log("Ready completion:", paymentId, txid);
    },
    onCancel: function(paymentId) {
      console.log("Dibatalkan:", paymentId);
    },
    onError: function(error) {
      console.error(error);
    }
  });
}
