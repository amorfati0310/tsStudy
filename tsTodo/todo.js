"use strict";
// todoO
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["done"] = 0] = "done";
    TodoStatus[TodoStatus["doing"] = 1] = "doing";
    TodoStatus[TodoStatus["todo"] = 2] = "todo";
})(TodoStatus || (TodoStatus = {}));
var TodoMethods;
(function (TodoMethods) {
    TodoMethods[TodoMethods["add"] = 0] = "add";
    TodoMethods[TodoMethods["update"] = 1] = "update";
    TodoMethods[TodoMethods["remove"] = 2] = "remove";
})(TodoMethods || (TodoMethods = {}));
class TodoO {
    constructor() {
        this.nextId = 1;
        this.todoList = [];
        this.todoItem = { name: '', tag: '', id: 1, status: TodoStatus.todo };
    }
    add({ name, tag }) {
        this.todoList = this.todoList.concat(Object.assign({}, this.todoItem, { id: this.nextId, name,
            tag }));
        this.printAddLog(this.nextId, name);
        this.nextId += 1;
    }
    update({ id, nextStatus }) {
        const updateOne = this.todoList.find(todoItem => todoItem.id === id);
        let isSame = false;
        let beforeStatus = nextStatus;
        if (updateOne !== undefined) {
            if (updateOne.status === nextStatus) {
                isSame = true;
            }
            else {
                beforeStatus = updateOne.status;
                updateOne.status = nextStatus;
            }
        }
        this.printUpdateLog(updateOne, isSame, beforeStatus);
    }
    remove({ id }) {
        const removeOne = this.findOne(id);
        if (removeOne) {
            this.todoList = this.todoList.filter(todo => todo.id !== id);
            console.log(`id: ${id}, ${removeOne.name} 삭제 완료`);
        }
        else
            console.log(`해당 id를 찾을 수 없습니다`);
    }
    findOne(id) {
        return this.todoList.find(todoItem => todoItem.id === id);
    }
    printAddLog(id, name) {
        console.log(`id: ${id} ,${name} 항목이 새롭게 추가 됐습니다`);
    }
    printUpdateLog(todoItem, isSame, beforeStatus) {
        if (todoItem) {
            if ((isSame)) {
                console.log(`변경할 값이 기존 값으로 ${TodoStatus[beforeStatus]} 같습니다.`);
            }
            else {
                console.log(`id: ${todoItem.id} ,${todoItem.name} 항목이 ${TodoStatus[beforeStatus]}=>${TodoStatus[todoItem.status]}상태로 업데이트 됐습니다`);
            }
        }
        else
            console.log('해당 id를 찾을 수 없습니다');
    }
}
const todo = new TodoO();
todo.add({ name: "자바스크립트 공부하기", tag: "programming" });
todo.update({ id: 1, nextStatus: TodoStatus.done });
todo.remove({ id: 1 });
