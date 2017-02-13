<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content loading">
      <i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
    </div>
</div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped>

.modal-content {
  text-align: center;
  overflow: hidden
}
.fa {
  color: whitesmoke;
}
</style>

