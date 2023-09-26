<template>
  <router-view v-slot="{ Component, route }">
    <transition :enter-active-class="(route.meta.enterClass || 'animate__animated animate__fadeIn animate__fast').toString()" :leave-active-class="(route.meta.leaveClass || 'animate__animated animate__fadeOut animate__fast').toString()" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
