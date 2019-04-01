<template>
  <div id="app">
    <router-link to="/">Main</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test-container {
  max-width: 800px;
  margin: 0 auto;
}
.block-note {
  text-align: left;
  border-radius: 5px;
  background-color: #eee;
  padding: 1rem;
  margin-bottom: 1rem;
}
.block-message {
  text-align: left;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  padding: 1rem;
  margin: 1rem 0;
}
.block-invalid {
  border-color: red;
  color: red;
}
.block-valid {
  border-color: forestgreen;
  color: forestgreen;
}
.flex-1 {
  flex: 1;
}
.form {
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
}

.form .el-date-editor.el-input {
  width: 100%;
}
.form .el-select {
  display: initial;
  width: 100%;
}
.form .el-input-number {
  width: initial;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  display: flex;
}
.form-input label {
  min-width: 150px;
  margin-top: 0.5rem;
}

/* @media (min-width: 768px) {
  .el-input {
    width: unset;
  }
} */
</style>
