<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-accent">
      <q-toolbar>
        <q-btn flat @click="toggleLeftDrawer" round dense icon="menu" />
        <q-toolbar-title>Cashify</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      class="bg-primary"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="default"
      bordered
    >
      <q-scroll-area
        style="height: calc(100%); margin-top:50px border-right: 1px solid #ddd"
      >
        <div class="q-pa-md a-pt-xl text-teal-2">
          <q-list separator padding class="">
            <q-item
              clickable
              v-ripple
              to="/"
              active-class="router-link-active"
              exact
            >
              <q-item-section avatar>
                <q-icon name="account_balance"></q-icon>
              </q-item-section>
              <q-item-section>Home</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              to="/loan"
              active-class="router-link-active"
              exact
            >
              <q-item-section avatar>
                <q-icon name="payment"></q-icon>
              </q-item-section>
              <q-item-section>Loans</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              to="/offers"
              active-class="router-link-active"
              exact
            >
              <q-item-section avatar>
                <q-icon name="redeem"></q-icon>
              </q-item-section>
              <q-item-section>Offers</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              to="/settings"
              active-class="router-link-active"
              exact
            >
              <q-item-section avatar>
                <q-icon name="manage_accounts"></q-icon>
              </q-item-section>
              <q-item-section>Settings</q-item-section>
            </q-item>
          </q-list>
          <div class="q-pa-md q-pt-xl">
            <q-separator color="text-accent" inset />
            <div class="text-h4 text-teal-1 q-pt-sm brand-name-container">
              <span>Cashify</span>
            </div>
            <div class="text-h6 text-accent q-pt-sm brand-quote-container">
              <span
                >Trusted way of banking for 3,000+ SMEs and startups in
                Singapore.</span
              >
            </div>
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <div class="q-pa-md">
        <div class="q-pa-sm page-section">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style lang="scss">
.brand-name-container {
  display: flex;
  height: 50px;

  span {
    margin: auto;
  }
}
.brand-quote-container {
  display: flex;
  height: 40px;

  span {
    margin: auto;
  }
}
.router-link-active {
  color: $secondary;
}
</style>
