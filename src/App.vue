<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
html, body {
  width: 393px; 
  height: 852px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  overflow: hidden; 
}

#app {
  width: 393px;
  height: 852px;
  position: absolute;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  #app {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    position: relative;
  }
}
</style>