<template>
  <div class="q-mt-sm q-mb-sm row justify-center q-pa-md shadow-2">
    <q-btn
      unelevated
      color="accent"
      text-color="white"
      no-caps
      :label="'Pay ₹ ' + amount"
      @click="payLoan"
      :disable="processing"
    />
  </div>
</template>
<script>
/**
 * TODO
 * 1. disabling pay button when payment is in progress.
 * 2. Show Remaining loan amount
 * 3. Close Loan when repayment complete.
 */
import { defineComponent, ref } from "vue";
import { updatePremium, getLoanData } from "../db.js";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "Repay",
  setup() {
    let processing = ref(false);
    const $q = useQuasar();
    const showNotif = function (message) {
      $q.notify({
        message,
        color: "accent",
      });
    };
    const payLoan = function () {
      processing = true;
      // auto-paif
      updatePremium()
        .then(() => {
          showNotif("Paid");
        })
        .catch(() => {
          showNotif("Payment failed");
        })
        .finally(() => {
          processing = false;
        });
    };

    return { processing, payLoan };
  },
  data: function () {
    return { amount: "0" };
  },
  mounted: function () {
    const { loadAmount, tenure, interest } =
      getLoanData();
    let P = loadAmount.replace(/,/g, "");
    let R = parseInt(interest.replace("%", "")) / 12 / 100;
    let N = tenure;
    let emi = (P * R * (1 + R) ** N) / ((1 + R) ** N - 1);
    // divide by 4 for weely payment
    this.amount = (emi / 4).toFixed(2);
  },
});
</script>
