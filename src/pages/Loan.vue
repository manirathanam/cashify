<template>
  <q-tabs align="left" indicator-color="secondary" no-caps>
    <q-route-tab to="/loan/" label="Apply Loan" exact />
    <q-route-tab
      label="Repay"
      to="/loan/repay"
      exact
      :disable="!loanApproved"
    />
  </q-tabs>

  <router-view />
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { getLoanData } from "../db.js";

export default defineComponent({
  name: "Loan",
  setup() {
    const { loanStatus, loadAmount, tenure, premiumPaid } = getLoanData();
    let loanApproved = ref(loanStatus === "approved");

    return { loanApproved };
  },
  methods: {
    loadStatusChange() {
      alert();
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === "/loan/repay" && from.path === "/loan/") {
        this.loanApproved = true;
      }
    },
  },
  mounted: function () {
    if (this.loanApproved) {
      this.$router.push("/loan/repay");
    }
  },
});
</script>
<style lang="scss">
.loan-tab-content {
  padding: "q-ml-sm";
}
</style>
