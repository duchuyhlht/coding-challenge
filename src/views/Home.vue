<template>
<test-card number="home">
  <div v-if="description.description.length" v-html="description.description"></div>
  <div v-else class="p-5">
    <h3>This is result of I-ON Communication coding challenge. The test provided only a source code "vue-test.zip" without any target to archive.</h3>
    <h3>Therefore, I took the liberty of freely completing this from what i perceived.</h3>
    <br/>
    <p>▶ From what I see, the code includes JSON data files, 4 tests, with different hidden meanings.</p>
    <p>▶ The structure and UI were changed to become like this. If you don't think this is interesting, please contact me for original implemented version.</p>
    <p>▶ Each test had been done with something in my mind and noted on top title.</p>
    <p>▶ Mobile consideration.</p>
    <p>▶ The web uses router and animation to make transition between pages.</p>
    <p>▶ Until this last version, I can still see many features to add and things to improve. That what make this very interesting.</p>
    <br/>
    <p>Finally, thank you for your visit.</p>
  </div>
</test-card>
</template>

<script>
import TestCard from './components/TestCard'

export default {
  components: { TestCard }
}
</script>
