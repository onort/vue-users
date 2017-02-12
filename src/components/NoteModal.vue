<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('closeModal')"></div>
    <div class="modal-content">
      <div class="container modal-form">
        <label class="label title is-4">Add Note For User:</label>
        <p class="control">
          <textarea class="textarea" placeholder="Write your note here" v-model="note"></textarea>
        </p>
        <button class="button is-primary is-pulled-right" @click="handleSave">Save</button>
        <div class="is-clearfix"></div>
      </div>
    </div>
    <button class="modal-close" @click="$emit('closeModal')"></button>
  </div>
</template>

<script>
export default {
  name: 'NoteModal',
  data () {
    return {
      note: ''
    }
  },
  methods: {
    handleSave () {
      this.$emit('addNote', this.note)
    }
  }
}
</script>

<style scoped>
.modal-form {
  padding: 20px;
  background: white;
}
.textarea {
  resize: none;
  min-height: 90px;
}
</style>
