//import { makeObservable, observable, action, computed, makeAutoObservable } from "mobx";

import { makeAutoObservable, autorun, reaction } from "mobx";

class Counter {
  constructor() {
    /* 
      makeObservable(this, {  //将this(类的实例)变成响应式(可观察)
        count: observable,   //存储state的可追踪字段--Proxy
        increment: action.bound, //装饰器,将类中的方法绑定到类实例上，调用时this自动指向类实例
        decrement: action.bound,
        reset: action.bound,
        doubleCount: computed,
      }); 
    */
    
    /* 
      makeAutoObservable(this, {reset: false}, {autoBind: true})
      makeAutoObservable是加强版的makeObservable，在默认情况下它将推断所有属性。推断规格如下：
      所有属性都成为observable
      所有方法都成为action
      所有的个体都成为computed
      可以通过第二个参数overrides排除不需要被观察的属性和方法，第三个参数autoBind可以绑定this指向 
    */
    makeAutoObservable(this, {}, {autoBind: true})
  }
  count = 0;
  increment() {
    this.count++;  
  }
  decrement() {
    this.count--;
  }
  /* 异步方式一 */
  asyncIncrement(){
    setTimeout(this.increment, 1000)  //在action中改数据才不会报警告
  }
  /* 异步方式二 */
  /* increment() {
    setTimeout(()=>{
      runInAction(()=>{  
        this.count++
      })
    }) 
  } */
  reset() {
    this.count = 0;
  }
  get doubleCount() {
    return this.count * 2;
  }
}

const counter = new Counter();

//初始化时自动执行一次
autorun(()=>{
  console.log('监测到count发生变化', counter.count)
})

//初始化时不会自动执行
reaction(()=>counter.count,(newV,oldV)=>{
  console.log('监测到count发生变化', oldV, newV)
})

export default counter;
