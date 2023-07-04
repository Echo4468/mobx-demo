import React from "react";
import { useStore } from "../../store";
import { observer } from 'mobx-react'

const Counter = () => {
  const { counter } = useStore();
  return (
    <div>
      <h3 style={{ color: "deeppink" }}>计数器</h3>
      <div>
        竹子数量：{counter.count} ({counter.doubleCount})
      </div>
      <br />
      <button onClick={() => counter.increment()}>加1</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => counter.asyncIncrement()}>异步加1</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={counter.decrement}>减1</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={counter.reset}>重置</button>
    </div>
  );
}

export default observer(Counter)