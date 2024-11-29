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

  updateTask: function (id, props) {
    this.tasks = this.tasks.map((task) =>
      task.id === id
        ? {
            name: props.name,
            description: props.description,
            order: props.order,
          }
        : task
    );
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
addNewTasks({ id: 2, name: "Новая задача", description: "описание", order: 2 });

console.log('newTask', newTask.tasks);

todo.addTask({
  id: 1,
  name: "Новая задача 1",
  description: "описание 1",
  order: 1,
});

todo.addTask({
  id: 2,
  name: "Новая задача 2",
  description: "описание 2",
  order: 2,
});

todo.addTask({
  id: 3,
  name: "Новая задача 3",
  description: "описание 3",
  order: 3,
});

todo.removeTask(2);

todo.updateTask(1, {
  name: "Измененное название",
  description: "Измененное описание",
  order: 4,
});

todo.sortTasks();

console.log('todo', todo.tasks);
