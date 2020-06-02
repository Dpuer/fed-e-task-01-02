# 王昱旸 | Part 1 | 模块二

## 简答题

### 第一题

#### 题目

1.描述引用计数的工作原理和优缺点

#### 解答

- 引用计数算法的工作原理：

  - 在内部维护一个引用计数器，来维护内部对象的引用数，根据当前当前引用数是否为 0 来判断该对象是否为垃圾对象，当引用数为 0 时将其释放回收和再使用

- 优点：

  - 发现垃圾时立即回收
  - 最大限度减少程序卡顿时间

- 缺点：
  - 无法回收循环引用的对象
  - 资源消耗大

### 第二题

#### 题目

2.描述标记整理算法的工作流程

#### 解答

标记清除算法分为标记和清除两个阶段完成，主要工作流程如下：

- 遍历所有对象找到活动对象（可达对象），并进行标记
- 遍历所有对象清除没有标记对象，并抹除之前的标记便与 GC 的后续操作
- 回收相应的空间

### 第三题

#### 题目

3.描述 V8 中新生代储存区垃圾回收的流程

#### 解答

- 回收过程采用复制算法+标记整理两个算法
- 新生代内存会区分为两个等大小空间
- 使用的空间我们称之为 From，空闲空间称之为 To
- 活动对象储存于 From 空间中
- 标记整理后将活动对象拷贝至 To
- From 与 To 交换空间完成后释放内存

### 第四题

#### 题目

4.描述增量标记算法在何时使用及工作原理

#### 解答

- 何时使用：在 V8 老生代存储区垃圾回收时，会使用增量标记算法来优化回收性能
- 工作原理：将一次性的垃圾回收拆分成多次标记和标记完成后的清除，从而尽可能少的阻塞程序的执行

## 代码题

> 代码题源码路径`/code/operation`

### 第一题

基于以下代码完成下面的四个练习

```javascript
const fp = require("lodash/fp");

// 数据
// horsepower 马力，dollar_value 价格，in_stock 库存

const cars = [
  {
    name: "Ferrari FF",
    horsepower: 660,
    doller_vale: 700000,
    in_stock: true,
  },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    doller_vale: 648000,
    in_stock: false,
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    doller_vale: 132000,
    in_stock: false,
  },
  {
    name: "Audi R8",
    horsepower: 525,
    doller_vale: 114200,
    in_stock: false,
  },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    doller_vale: 1850000,
    in_stock: true,
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    doller_vale: 1300000,
    in_stock: false,
  },
];
```

#### 练习 1

##### 题目

使用函数组合 fp.flowRight()重新实现下面这个函数

```javascript
let isLastInStock = function (cars) {
  // 获取最后一条数据
  let last_car = fp.last(cars);
  // 获取最后一条数据的in_stock属性值
  return fp.prop("in_stock", last_car);
};
```

##### 解答

```javascript
let isLastInStock = fp.flowRight(fp.prop("in_stock"), fp.last);
```

#### 练习 2

##### 题目

使用 fp.flowRight、fp.prop()和 fp.first()获取第一个 car 的 name

##### 解答

```javascript
let isFirstName = fp.flowRight(fp.prop("name"), fp.first);
```

#### 练习 3

##### 题目

使用帮助函数\_average 重构 averageDollarValue，使用函数组合的方式实现

```javascript
let _average = function (xs) {
  return fp.reduce(fp.add, 0, xs) / xs.length;
}; // 无需修改
let averageDollarValue = function (cars) {
  let doller_vales = fp.map(function (car) {
    return car.doller_vale;
  }, cars);
  return _average(doller_vales);
};
```

##### 解答

```javascript
let averageDollarValue = fp.flowRight(_average, fp.map(fp.prop("doller_vale")));
```

#### 练习 4

##### 题目

使用 flowRight 写一个 sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的 name 转为这种形式：例如：sanitizeNames(["Hello World"]) => ["hello_world"]

```javascript
let _underscore = fp.replace(/\W+/g, "_"); // 无需修改并在sanitizeNames中使用
```

##### 解答

```javascript
let sanitizeNames = fp.map(
  fp.flowRight(fp.toLower, _underscore, fp.prop("name"))
);
```

### 第二题

基于以下代码完成下面的四个练习

```javascript
// support.js
class Container {
  static of(value) {
    return new Container(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return Container.of(fn(this._value));
  }
}

class Maybe {
  static of(x) {
    return new Maybe(x);
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }

  constructor(x) {
    this._value = x;
  }

  map(fn) {
    return this.isNothing() ? this : Maybe.of(fn(this._value));
  }
}

module.exports = {
  Maybe,
  Container,
};
```

#### 练习 1

##### 题目

使用 fp.add(x,y)和 fp(f,x)创建一个能让 functor 里的值增加的函数 ex1

```javascript
let maybe = Maybe.of([5, 6, 11])
let ex1 = // 你的实现
```

##### 解答

```javascript
let ex1 = (number) => maybe.map(fp.map(fp.add(number)));
```

#### 练习 2

##### 题目

实现一个函数 ex2，能够使用 fp.first 获取列表的第一个元素

```javascript
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = // 你的实现
```

##### 解答

```javascript
let ex2 = () => xs.map(fp.first);
```

#### 练习 3

##### 题目

实现一个函数 ex3，使用 safeProp 和 fp.first 找到 user 的名字的首字母

```javascript
let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = {
    id: 2,
    name: 'albert'
}
let ex3 = // 你的实现
```

##### 解答

```javascript
let ex3 = (user) => safeProp("name")(user).map(fp.first);
```

#### 练习 4

##### 题目

使用 Maybe 重写 ex4，不要有 if 语句

```javascript
let ex4 = function (n) {
  if (n) {
    return parseInt(n);
  }
};
```

##### 解答

```javascript
let ex4 = (str) => Maybe.of(str).map(parseInt);
```
