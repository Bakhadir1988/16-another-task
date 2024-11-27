"use strict";

const todo = {
  tasks: [],
  addTask: function (props) {
    this.tasks.push({
      name: props.name,
      id: props.id,
      description: props.description,
      order: props.order,
    });
  },

  removeTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTask: function (id, name, order) {
    const update = this.tasks.find((task) => task.id === id);
    update.name = name;
    update.order = order;
  },

  sortTasks: function () {
    this.tasks.sort((a, b) => a.order - b.order);
  },
};

const newTask = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
};

const addNewTasks = todo.addTask.bind(newTask);
addNewTasks({ id: 2, name: "новая задача", description: "описание", order: 2 });

console.log(newTask.tasks);
