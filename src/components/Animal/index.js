import React from "react";
import { useStore } from "../../store";
import { observer } from 'mobx-react'
import { message } from 'antd';
const Animal = () => {
  const { animal, counter } = useStore();
  const [messageApi, contextHolder] = message.useMessage();
  React.useEffect(()=>{
    if(counter.count<animal.panda){
      messageApi.info('竹子不够熊猫吃了!')
    }
  }, [counter.count, animal.panda])
  return (
    <div>
      {contextHolder}
      <h3 style={{ color: "deeppink" }}>动物园</h3>
      <div>熊猫数量：{animal.panda}</div>
      <br />
      <button onClick={animal.addPanda}>买熊猫</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={animal.movePanda}>卖熊猫</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default observer(Animal)