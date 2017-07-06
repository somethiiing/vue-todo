<template>
  <div id="app">
    <create-todo v-on:create-todo="createTodo"></create-todo>
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',
  components: {
    CreateTodo,
    TodoList,
  },
  data () {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: false
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false
      }]
    }
  },
  methods: {
    createTodo(note) {
      console.log(note);
      this.todos.push(note)
    }
  }
}
</script>

<style>
</style>
