<template>
  <div class="app-layout">
    <AppHeader />

    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/mixins" as *;

.app-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}
</style>
