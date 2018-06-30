### Install


`npm i -g typescript`
npm typescript install
`tsc --init` -> tsconfig.json
tsc compile 설정파일 생성 

### tsConfig default 설정


* target -> 컴파일 된 파일을 어떤 버전으로 맞출 것인지 
* module -> 어떤 모듈을 쓸 것인지 
* lib 파일 엄청 중요함 ! 어떻게 쓰라 하는지 definition 설정들이 들어있음 ! 

```typescript
   "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    /* Strict Type-Checking Options */
    "strict": true,    
```

### ts-lint 

`npm i -D tslint`
`tslint --init`