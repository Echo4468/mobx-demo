import counter from './Counter'
import animal from './Animal'
import task from './Task'
import { useContext, createContext } from 'react'
import { configure } from 'mobx'

class RootStore{
  counter = counter
  animal = animal
  task = task
}

//对正在使用的 MobX 实例进行全局行为设置
configure({enforceActions: 'always'})

const store = new RootStore()
//创建一个上下文对象, 用于跨级组件通讯
//如果createContext提供了默认值, 则不需要Provider
const Context = createContext(store)

//自定义hooks--将store被托管到context中，即自定义useStore替换Provider、inject
export const useStore = () => {
  return useContext(Context)
}