<template>
  <div class="assist-contain">
    <div class="text-block">
      <h2>Let Us Assist You</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Assist'
}
</script>

<style lang="scss" scoped>
.assist-contain {
  
  .text-block {
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--l-blue);
    margin-bottom: 40px;
    padding: 20px;
    font-size: 2rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
}
</style>