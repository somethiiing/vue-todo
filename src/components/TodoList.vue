<template>
  <div>
    <p class="tasks">Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p class="tasks">Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>

    <todo
      v-on:delete-todo="deleteTodo"
      v-on:toggleComplete-todo="toggleCompleteTodo"
      v-for="todo in todos"
      v-bind:todo="todo"
      v-bind:key="todo.text"
    ></todo>
  </div>
</template>

<script type = "text/javascript" >

import Todo from './Todo.vue';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    toggleCompleteTodo(todo) {
      const status = todo.done;
      const index = this.todos.indexOf(todo);
      this.todos[index].done = status === true ? false : true;
    }
  }
};
</script>

<style scoped>
  p.tasks {
    text-align: center;
  }
</style>
