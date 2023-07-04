import { makeAutoObservable } from "mobx"
import { makePersistable } from 'mobx-persist-store'
class Animal{
  constructor(){
    makeAutoObservable(this, {lion: false}, {autoBind: true})
    makePersistable(this, {
      name: 'key', // 存储到localStorage的key值
      properties: ['panda'], // 需要持久化的数据
      storage: window.localStorage, 
    })

  }
  panda = 0
  lion = 0
  addPanda(){
    this.panda++
  }
  movePanda(){
    this.panda--
  }
}
const animal = new Animal()
export default animal

