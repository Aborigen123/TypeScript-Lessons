/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//tsc -w включити компілятор
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ТИПИ ДАНИХ
//string
/*let str  = 'string!';
//відмінність ts від js в тому як що я захочу занести в змінну іншого типу н-д str = 10; то компілятор погчне видавати error.
//тому що не можна міняти типи дани а якщо ввнести н-д str = 'qwe'; то помилки не буде
//str = 10 //error
str = 'qwe'//work

//let variable; -  змінній буде присвоєно any

let str1: string = 'string!' //явне присвоєння типу змінної

//number
let num = 10;
let num1: number  = 10;

//boolean

let inTrue = true
let isFasle:boolean = false

inTrue = false // не можемо присвоїти 1 або 0 (true false)

//зміна типів змінної (convertation)
let unknow = '1';
//unknow = 1;//error

// 1 спосіб any - ми можемо запхати будь який тип даних
let unknowAny: any = '1';
unknowAny = 1;
unknowAny = true//all work

// 2 спосіб перечислення типів які може прийняти змінна

let  unknowEnum: string | number = 'qewwq'
unknowEnum = 1
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ТИПИ МАСИВІВ | МАСИВИ
/*let numArray = [1,2,3];
let numArrayType: number[] = [1,2,3];
let numArray1: Array<number> = [1,2,3];


let strArray = ['1', '2', '3'];
let strArrayType: string[] = ['1', '2', '3'];
let strArray1:Array<string>  = ['1', '2', '3'];

let boolArray = [true, false]
let boolArrayType: boolean[] = [true, false]
let boolArray1: Array<boolean> = [true, false]

//tuples
let array: [number, number,string] = [1,2,'3']; // сталась ситуація що ми хочемо добавити до масиву string

let array2: [boolean, string, number] = [true,'str', 22]

//let array3: Array<number, string> = [1, 'str'] // error так записувати не можна

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Функції
//вказування в кінці функці н-д :void :string не є обовязковим це потрібно вказувати для читабельності
/*const myName: string = 'WFM'
const  myAge = 50;

function getMyName(): string { //string - тип який вертає функція
    return myName
}

console.log(getMyName())

function getMyAge(): number {
    return myAge
}
console.log(getMyAge())

//function getParam(age): number {//work
function getParam(age:number): number {// work
    return age
}
console.log(getParam(40))//work out 40

function getParamwithPrefix(age:number, prefix:string): string {
    return  prefix + age;
}
console.log(getParamwithPrefix(40, 'wew'))

function getParamwithDefaultValue(age:number, prefix:string = 'default value'): string {//default value
    return  prefix + age;
}
console.log(getParamwithDefaultValue(40))

function consoleLog( str:string ):void {//void - нічого не вертає (хорошою практикою є це вказувати)
    console.log()
}
consoleLog('sew')


function sum(num1:number, num2:number):number {
    return num1 + num2;
}

console.log(sum(5,10))

let mySum;

mySum = sum
console.log(sum(10,15))

//короткий запис
let mySum2: (num1:number, num2:number) => number; // => number - повернення типу
mySum2 = sum
console.log(mySum2(1,32))
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Обєкти
/*
let user:{name:string, age:number} = {
  name:'WFM',
  age:50
};
let user2:{name:string, age:number, logName:() => void} = {//logName:() => void - logName:()  -це функція => void - нічого не вертає
    name:'WFM',
    age:50,
    logName():void{
        console.log(this.name)
    }
};

let user3:{name:string, age:number, logName:() => void,jobs:string[]} = {
    name:'Max',
    age: 30,
    jobs: ['2'],
    logName(): void {
        console.log(this.name)
    }
}
//щоб не писати таку довгу стрічку ми напишемо свою констрекцію яка буде створювати свій тип

type User = {name:string, age:number, logName?:() => void, jobs:string[] , getJobs?:() => string[]} //getJobs?:() => string[]  - де ? - вказує що поле є необовязковим

let user4: User = {
    name:'Max',
    age: 30,
    jobs: ['2'],
    logName(): void {
        console.log(this.name)
    }
}


let user5: User = {
    name:'Max',
    age: 30,
    jobs: ['2'],
    getJobs(): string[] {
        return this.jobs;
    }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Компілятор і конфігурації
/*
// Компілятор як працює в ts.   ts - це MBM model коли ми пишемо команду tsc (file.ts) спочатку компілятор дивиться в корінь нашого проекту
//і знаходить tsconfig.json який зчитує і приймає всі конфіги ||| цікавий факт все що закоментовано в tsconfig.json має значення false і воно є робочим просто знак // присвоює йому false

//    "target": "es5", - у нас спочатку компілюється ts в es6(вона обгортка для es5) а після цього воно компілюється в es5 (тому що більшість браузерів підтримуються es5)
//   "sourceMap": true, - коли білдиться ts файл він перебілджується в .js де лінійки не відповідають одна одній якщо винекне якась помилка то в ts буде відображатися помилка не в тому місці
//тому що номера лінійок не відповідні | якщо розкоментувати цю лінійку то нам буде показувати еrror не в js а в ts | для того щоб збілдити tsconfig.json треба прописати команду tsc

//"noEmitOnError" : false (її немав в базовому файлі tsconfig.json) - якщо застосувати цю функцію і при помилці зкомпілювати tsc file.js то воно збільдиться і запуститься файл але напише що була помилка при білджені

//let variable; -  змінній буде присвоєно any
const user:User = {
    name: 'WFM',
    age:20
}
type User = {name:string, age: number}

function logUser(user:User):void {
    console.log(user.name + ' ' + user.age)
}

logUser(user)*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Спеціальні типи enum,
/*
enum Job{
  Frontend,
  Backend,
  Designer
}
const job: Job = Job.Backend;
console.log(job);// Виведе 1

enum Job1{
    Frontend,
    Backend=50,
    Designer
}
const job1: Job1 = Job1.Backend;
console.log(job1);// Виведе 50
const job2: Job1 = Job1.Designer;
console.log(job2);//51


function throwNewError(err: string): never {//функції які нічого не вертають а тільки викидають помилки
    throw  new Error(err);
}

let newVar;//newVar - any і має в собі значення undefined
newVar = null;//присвоюємо undefined і в кінцевому результаті буде undefined

let myNumber = 20;
//myNumber = null; //виведе помилку бо ми не можемо присвоїти null типу number
//вирішення
let myNumber1: number|null = 20;
myNumber1 = null;
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Класи
// constructor - являється функцією
/*
class User{
    name: string; //public
   private isTeacher: boolean;
   protected age: number = 30;
   public job:string;

 //   constructor(name:string) {
  //      this.name = name;
  //  }

    constructor(name:string, public job:string) { // public  job:string ==  this.job = job;
        this.name = name;

    }

    getAge():number{
        return this.age;
    }


    public setTitle(title: boolean){
        console.log('Befor ',this.isTeacher)
        this.isTeacher = title;
        console.log('After ',this.isTeacher)
    }
}

const user = new User('WFM','qwe')
console.log(user)
console.log(user.getAge())

user.setTitle(true)
console.log(user)
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Класи , Наслідування класів, Абстрактний клас
/*
class User{
    name: string; //public
    private isTeacher: boolean;
    protected age: number = 30;
    public job:string;

    //   constructor(name:string) {
    //      this.name = name;
    //  }

    constructor(name:string, public job:string) { // public  job:string ==  this.job = job;
        this.name = name;

    }

    getAge():number{
        return this.age;
    }

}

class WFM extends User{
    //name: string = 'WFM';
    constructor(job:string){
        super('WFM', job);
        this.age = 100

    }
}

abstract class Car {
    model: string;
    year: number = 2010;

    getCarYear(): number {
        return this.year;
    }

    abstract logInfo(info: string): void;
}

class Mercedes extends Car{
    logInfo(info: string): void {
        console.log(info)
    }

}

const user = new User('WFM','qwe')
const wfm = new WFM('FrontEnd')
console.log(user)
console.log(wfm)
console.log(wfm.getAge())//100

const car = new Mercedes()
console.log(car)
car.logInfo('eqw')
console.log(car.getCarYear())
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Інтерфейси
/*
function getLength(variable: any):void {
    console.log(variable.length);
}

getLength([1,2,3,4])//4

const box = {
    name: 'WFM',
    length: 20
};
getLength(box)//20 тому що length = 20  якщо length замінити на length1 то буде undefined
//но можна вивести довжину функції
function getLengthFix(variable: {length:number}):void {//  {length:number} - обовязково повинно бути таке поле
    console.log(variable.length);
}

getLengthFix(box)



interface ILength {
length: number;
}
function getLengthFixWithInterface(variable: ILength):void {//  {length:number} - обовязково повинно бути таке поле
    console.log(variable.length);
}
getLengthFixWithInterface([1,2,3])


interface IUser {
    name: string;
    age?: number;
    logInfo(info:string): void;

}

const User:IUser = {
    name: 'QWERTY',
    age: 20,
    logInfo(info: string): void {

    }
}

interface  IGetYear {
    getYear(): number
}
class User2 implements  IUser, IGetYear{
    getYear(): number {
        throw new Error("Method not implemented.");
    }
    age: number;
    name: string;
    job:string;
    newAge:number;

    logInfo(info: string): void {
        console.log(info)
    }
}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Загальні типи (generic)
// generic - це просто позначення типів в загальному  вигляді. Ми самі будемо задавати якийсь тип після чого ми будемо працювати з повернутими даними
/*
function  getter(data: any) {
    return data;
}
//console.log(getter(100).length)//undefined
console.log(getter('qwe').length)


function genericGetter<T>(data: T): T  {//функція основана на generic | T - generic
    return data;
}

console.log(genericGetter(100))//.length додати не зможе тому що компілятор буде розуміти який тип ми передаємо
console.log(genericGetter('qwe').length)
console.log(genericGetter<String>('qwe'))
console.log(genericGetter<Number>(100).toFixed(2));//toFixed(2) - додаємо крапку і 2 значення після крапки Виведе .00

const array: Array<number> = [1,2,3];

let newGenericFunction:<T>(data:T) => T = genericGetter;

class Multiply<T  extends number| string> { //<T extends number> - наш клас буде працювати тільки з number | <T > - всі типи
    constructor(private a:T, private b:T){

    }
    public  getResult(): number {
        return +this.a * +this.b;
    }
}

const m = new Multiply(10,5)//50
console.log(m.getResult())

const m = new Multiply<string>('60','40')//50
console.log(m.getResult())

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Декоратори
/*
// Декоратори - це спеціальна можливість typeScript по добавленню мета-дати в різні класи або функції
// constructor - являється функцією
@log // функцію яку викликаємо. Класс стає невалідним і є можливість того що функціонал класу зміниться
    //в tsconfig.json - треба внести зміни "experimentalDecorators": true,
    //Ця функція принімає констректор класу до якого прикріплена
    @shouldLog(true)
class User {
    constructor(public name: string, public age:number){
        console.log('I am new User')
    }
}

function log(constrFn: Function) {
console.log(constrFn)//получаємо і виводимо конструктор в консоль
}

//для того щоб передати параметри для виконнання функціх
function loggger(constrFn: Function) {
    console.log(constrFn)
}
function shouldLog(flag:boolean):any{
    return flag ? loggger : null //if(flag === true){logger}else{null}
}
let user = new User('WFM', 20);
console.log(user)
// наступна задача

function addShowAbility(costructorFn: Function) {
    costructorFn.prototype.showHtml = function () {
 const  pre = document.createElement('pre');

 pre.innerHTML=JSON.stringify(this)//JSON - обєкт | stringify - метод який перетворює js обєкти в JSON формат(в лінійки) ерші this - це і є юзер

 document.body.append(pre)
    }
}

@addShowAbility
class User2 {
    constructor(public name: string, public age:number, public job:string){
        console.log('I am new User')
    }
}

let user2 = new User2('WFM', 20, 'Frontend');
console.log(user2);

//user2.showHtml(); // не можемо так записати тому що ми добавляли неявно
//рішення
(<any>user2).showHtml();
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Namespace
/*
function isEmpty(d: any):boolean {
    return !d;
}

console.log(isEmpty(''))//true
console.log(isEmpty('qwe'))//fasle

function isUndefined(d: any):boolean {
    return typeof d === 'undefined';
}

console.log(isUndefined(20))//false
console.log(isUndefined(undefined))//true
console.log(isUndefined(null))//false

const PI = Math.PI;
const EXP = Math.E;

namespace Util{//namespace - це локальна сушність яка має в собі певний набір функціоналу

    export  function isEmptyUtil(d: any):boolean {//локальна видимість за замовчуванням private | отримати функцію можна через export
        return !d;
    }


    function isUndefinedUtil(d: any):boolean {
        return typeof d === 'undefined';
    }


    const PIUtil = Math.PI;
    const EXPUtil = Math.E;
}

console.log(Util.isEmptyUtil(''))
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Typescript i webpack
//створемо файл packa
//встановлення WebPack
var myNumber = 10;
var numberArray = [10, 20, 30, 40];
function log(str) {
    console.log(str);
}
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQTRCO0FBQzVCLGdKQUFnSjtBQUNoSixZQUFZO0FBQ1osUUFBUTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NFO0FBQ0YsZ0pBQWdKO0FBQ2hKLHVCQUF1QjtBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFDRixnSkFBZ0o7QUFDaEosU0FBUztBQUNULHNHQUFzRztBQUN0Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbURFO0FBQ0YsZ0pBQWdKO0FBQ2hKLFFBQVE7QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJDRTtBQUNGLGdKQUFnSjtBQUNoSiwyQkFBMkI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXFCZTtBQUVmLGdKQUFnSjtBQUNoSix1QkFBdUI7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0NFO0FBQ0YsZ0pBQWdKO0FBQ2hKLE9BQU87QUFDUCxtQ0FBbUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQ0U7QUFFRixnSkFBZ0o7QUFDaEosK0NBQStDO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJERTtBQUNGLGdKQUFnSjtBQUNoSixZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRERztBQUNILGdKQUFnSjtBQUNoSix5QkFBeUI7QUFDekIscUpBQXFKO0FBQ3JKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQ0U7QUFFRixnSkFBZ0o7QUFDaEosWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtREU7QUFDRixnSkFBZ0o7QUFDaEosV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQ0U7QUFDRixnSkFBZ0o7QUFDaEosc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFFdEIsSUFBTyxRQUFRLEdBQVcsRUFBRSxDQUFDO0FBQzdCLElBQU0sV0FBVyxHQUFhLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUE7QUFFM0MsU0FBUyxHQUFHLENBQUMsR0FBVztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3BCLENBQUM7QUFFRDtJQUNJLGNBQW9CLElBQVksRUFBVSxHQUFXO1FBQWpDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFRO0lBRXJELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMifQ==

/***/ })

/******/ });
//# sourceMappingURL=main.js.map