<template>
  <div class="q-mt-sm q-mb-sm row justify-center q-pa-md shadow-2">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      :class="loanApproved ? 'hidden' : ''"
      style="max-width: 400px"
    >
      <q-input
        prefix="₹"
        type="text"
        v-model="loadAmount"
        label="Loan Amount*"
        lazy-rules
        mask="##,###,###"
        maxlength="10"
        :disable="submitting"
        reverse-fill-mask
        :rules="[
          (val) => (val && val.length > 0) || 'Please type loan amount',
          (val) =>
            (val &&
              val.replace(/,/g, '') >= 10000 &&
              val.replace(/,/g, '') <= 10000000) ||
            'Loan Amount should be 10,000 to 10,000,000.',
        ]"
      />

      <q-input
        :model-value="interest"
        label="Interest"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Invalid']"
        disable
      />

      <q-input
        type="number"
        v-model="tenure"
        label="Tenure *"
        hint="Tenure in months"
        :disable="submitting"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type tenure.',
          (val) =>
            (val && val >= 12 && val <= 60) ||
            'Tenure should be 12 to 60 months.',
        ]"
      />

      <q-toggle
        v-model="accept"
        label="I accept the license and terms"
        :disable="submitting"
        :rules="[(val) => val || 'Please read the licence and terms.']"
      />

      <div>
        <q-btn
          label="Submit"
          type="submit"
          color="accent"
          :disable="submitting"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
          :disable="submitting"
        />
      </div>
    </q-form>

    <q-btn
      :class="loanApproved ? '' : 'hidden'"
      unelevated
      color="white"
      text-color="accent"
      no-caps
      label="Loan account is already open."
    />
    <q-btn
      :class="loanApproved ? '' : 'hidden'"
      unelevated
      color="accent"
      text-color="white"
      no-caps
      label="Go to Repay"
      @click="gotoRepay"
    />
  </div>
</template>
<script>
/**
 * TODO
 * 1. I accept filed validation
 */
import { defineComponent} from "vue";
import { useQuasar } from "quasar";
import { getLoanData, submitLoanData } from "../db.js";
export default defineComponent({
  name: "Apply",
  data: function () {
    return {
      loadAmount: "",
      tenure: "",
      interest: "9.75%",
      accept: false,
      submitting: false,
      loanApproved: "false",
    };
  },
  setup() {
    const $q = useQuasar();
    const showNotif = function (message) {
      $q.notify({
        message,
        color: "accent",
      });
    };

    const submitLoan = async function (data) {
      await submitLoanData(data);
    };

    return { showNotif, submitLoan };
  },
  methods: {
    onSubmit(e) {
      this.submitting = true;
      this.showNotif("Application Submitted");
      // auto-approved
      this.submitLoan(this.$data)
        .then(() => {
          this.showNotif("Approved");
          //  navigate to repay section
          this.$router.push("/loan/repay");
        })
        .catch((e) => {
          this.showNotif("Not Approved");
          console.error(e);
        });
    },
    onReset(e) {
      (this.loadAmount = ""), (this.tenure = ""), (this.accept = false);
    },
    gotoRepay() {
      this.$router.push("/loan/repay");
    },
  },
  mounted: function () {
    const { loanStatus } = getLoanData();
    // validate loan status and hide fields
    this.loanApproved = loanStatus === "approved";
  },
});
</script>
