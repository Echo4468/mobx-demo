import { makeAutoObservable } from "mobx";
class Task {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  todos: string[] = [];
  get desc() {
    return `李智还有${this.todos.length}个需求待完成`;
  }
  addTask(todo: string) {
    this.todos.push(todo)
  }
  deleteTask() {
    this.todos.pop()
  }
  resetTask(){
    this.todos = []
  }
  handleTasks = (type:string) => {
    switch (type) {
      case "add":
        this.addTask("一个新需求");
        break;
      case "delete":
        this.deleteTask();
        break;
      case "reset":
        this.resetTask();
        break;
      default:
    }
  };
}
const task = new Task();
export default task;
