import { useStore } from "../../store";
import { observer } from 'mobx-react'

const Animal = () => {
  const { animal } = useStore();
  return (
    <div>
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