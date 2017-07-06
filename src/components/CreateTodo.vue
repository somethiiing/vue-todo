<template>
  <div class='ui basic content center aligned segment'>
    <div class='ui centered card'>
      <div class='content'>
        <div class='ui form'>
          <form v-on:submit.prevent v-on:submit="sendForm()" >
            <div class='field'>
              <input placeholder="Title" id="textInput" v-model="note.title" type='text' ref='title' defaultValue="">
            </div>
            <div class='field'>
              <input placeholder="Project" v-model="note.project" type='text' ref='project' defaultValue="">
            </div>
            <div class='ui two button attached buttons'>
              <button :disabled="note.title.length < 1 || note.project.length < 1" class='ui basic blue button' type="submit">
                Create
              </button>
              <button class='ui basic red button' v-on:click="reset()">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note:{
        title: '',
        project: '',
        done: false
      }
    };
  },
  methods: {
    sendForm() {
      if (this.note.title.length > 0 || this.note.project.length > 0) {
        this.$emit('create-todo', this.note );
        this.reset();
        document.getElementById("textInput").focus();
      }
    },
    reset() {
      this.note = {title: '', project: '', done: false};
    },
  }
}
</script>
