import { useStore } from "../../store";
import "./style.css";
import { observer } from "mobx-react";
const Todo = () => {
  const { task } = useStore();
  return (
    <div className="home">
      <h1>mobx_mini_demo</h1>
      <div>{task.desc}</div>
      <button onClick={() => task.handleTasks("add")}>添加一个需求</button>
      <button onClick={() => task.handleTasks("delete")}>解决一个需求</button>
      <button onClick={() => task.handleTasks("reset")}>需求槽已空</button>
      {task.todos.map((ele, index) => {
        return <div key={index}>{ele}</div>;
      })}
    </div>
  );
};
export default observer(Todo);
