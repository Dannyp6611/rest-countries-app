<template>
  <header>
    <nav class="main-nav">
      <h1>Where in the world?</h1>
      <!-- toggle -->
      <button class="toggle">
        <input
          type="checkbox"
          :checked="mode === 'dark' ? 'checked' : false"
          @change="$emit('toggle')"
          id="toggleMode"
        />
        <i class="far fa-moon moon-icon" :class="{ dark: mode === 'dark' }"></i>
        <label class="toggler" for="toggleMode">Dark Mode</label>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
header {
  background: var(--light-elements);
  box-shadow: 0 0 4px rgb(0 0 0 / 9%), 0 7px 8px rgb(0 0 0 / 5%);
  margin-bottom: 3rem;
}
.app.dark header {
  background: var(--dark-elements);
}
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 35px;
}

.toggle {
  background: transparent;
  outline: none;
  border: none;
  color: var(--light-text);
  position: relative;
  display: inline-block;
}
.app.dark .toggle {
  color: var(--dark-text);
}

.moon-icon {
  display: inline-block;
  margin-right: 5px;
  font-size: 14px;
}
.moon-icon.dark {
  color: white;
}
.toggler {
  cursor: pointer;
}
input {
  opacity: 0;
}
</style>
