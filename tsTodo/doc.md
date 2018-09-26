### 기능요구사항
다음처럼 동작하는 할일(task)관리 프로그램을 만듭니다.

새로운 task를 추가할 수 있음
태그(tag)를 옵션으로 추가할 수 있음
모든 task는 id를 가짐
todo/doing/done 상태를 가짐(add시에는 todo)
상태변경을 할 수 있음
code 구현형태
코드의 형태는 객체리터럴 형태로 구현한다.

```js
> todo.add({name: "자바스크립트 공부하기", tag:"programming"});  // 태그를 입력받는다.
id: 5,  "자바스크립트 공부하기" 항목이 새로 추가됐습니다. 
현재상태 :  todo:1개, doing:2개, done:2개

> todo.update({id:4,  nextstatus:"doNe"});  //대소문자 모두 잘 된다.
id: 4,  "자바스크립트 공부하기" 항목이 todo => done 상태로 업데이트 됐습니다.
현재상태 :  todo:1개, doing:1개, done:4개  

> todo.remove({id:3});
id:3, iOS공부하기 삭제완료. '
```

### 요구사항을 바탕으로 체크리스트 만들기 

OLOO 패턴으로 만들어보기 -> 나중에 js로 
기본 객체 메소드들로 ts에서 어떻게 하는지 잘 모르겠음 
Object.create()

// 
class 기반은 interface implements로 넣기 용이 


## TODO

- [ ] todo객체 add/update/remove/read methods를 만든다.
- [ ] add/ update /remove/read에 따라 model을 update하고 동작한다. 

