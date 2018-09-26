// todoO

enum TodoStatus {
  done, 
  doing,
  todo,
}
enum TodoMethods {
  add, 
  update, 
  remove,
}
interface TodoItem {
  name: string;
  tag: string;
  id: number;
  status: TodoStatus
}

interface todoStateCounter {
  todo: number;
  doing: number;
  done: number;
}

interface TodoUtils {
  add(object): void,
  update(object): void,
  remove(object): void,
}



class TodoO implements TodoUtils{
  private nextId = 1;
  private todoList:Array<TodoItem> = []
  private todoItem:TodoItem = {name: '', tag: '', id: 1, status: TodoStatus.todo}
  add({name, tag}:{name: string, tag: string}){
    this.todoList =this.todoList.concat({
      ...this.todoItem, id: this.nextId, 
      name,
      tag,
    })   
    this.printAddLog(this.nextId,name);
    this.nextId+=1;
  }
  update({id, nextStatus}:{id: number, nextStatus: TodoStatus}){
   const updateOne:TodoItem|undefined =this.todoList.find(todoItem=>todoItem.id===id)
   let isSame = false;
   let beforeStatus:TodoStatus = nextStatus
   if(updateOne!==undefined){
    if(updateOne.status===nextStatus){
      isSame = true  
    }
    else{
      beforeStatus = updateOne.status
      updateOne.status = nextStatus
    
    } 
   }
    this.printUpdateLog(updateOne, isSame, beforeStatus)
  }
  remove({id}:{id:number}){
    const removeOne =this.findOne(id)
    if(removeOne){
      this.todoList = this.todoList.filter(todo=>todo.id!==id)
      console.log(`id: ${id}, ${removeOne.name} 삭제 완료`)
    }
    else console.log(`해당 id를 찾을 수 없습니다`)
  }
  private findOne(id: number):TodoItem|undefined{
    return this.todoList.find(todoItem=>todoItem.id===id)
  }
  private printAddLog(id: number,name: string){
    console.log(`id: ${id} ,${name} 항목이 새롭게 추가 됐습니다`)
  }
  private printUpdateLog(todoItem:TodoItem|undefined, isSame:boolean, beforeStatus:TodoStatus){
    if(todoItem){
      if((isSame)){
        console.log(`변경할 값이 기존 값으로 ${TodoStatus[beforeStatus]} 같습니다.`)
      }
      else {
        console.log(`id: ${todoItem.id} ,${todoItem.name} 항목이 ${TodoStatus[beforeStatus]}=>${TodoStatus[todoItem.status]}상태로 업데이트 됐습니다`)
      }
    }
    else console.log('해당 id를 찾을 수 없습니다')
  }
}


const todo = new TodoO();
todo.add({name: "자바스크립트 공부하기", tag:"programming"})
todo.update({id: 1, nextStatus: TodoStatus.done})
todo.remove({id: 1})
