import UserModel from "./user.model";

class App
{
    name: string;
    // version;

    constructor()
    {
        console.log("App Constructor");


    }
}

var myApp = new App();

let age: number = 20.2;
let isLegal: boolean = true;

myApp.name = `idan yalovich`;

let users: UserModel[] = [];
let phones: Array<number> = [];

/* create users */
let admin: UserModel = new UserModel();
admin.name = "Yam Regev";

users.push(admin);

/* tuple */
let event: [number, string] = [20, "PageView"];

/* enum */
enum Colors {
    Red = 100,
    Blue,
    Green
}

let name: any = "Any";


/* Fucntions */

/**
 *
 * @param name
 * @param age [OPTIONAL]
 */
let describeMe = function(name: string, age?: number) : string
{
    let me: string = `ME: ${name}`;

    if(age) return me.concat(` (${age})`);

    return me;
};

let me: string = describeMe(myApp.name);

/* OLD WAY */
setTimeout(function() {

}, 2000);

/* ES6 (2015) */
setTimeout(() => {


}, 2000);

/* OLD WAY */
window.addEventListener("load", function(event: Event) {

}, false);

/* NEW WAY */
window.addEventListener("load", (event: Event) => {

}, false);


/* Classes */

let loggedInUser: UserModel = new UserModel("Yarin", 35);

console.log(loggedInUser.describe());


/* Vars (var & let) Vs. Const */

// let version: string = "1.0.2";

const VERSION: string = "200";
console.log(VERSION);


/* DOM INTERACTION */

document.querySelector("#action").addEventListener("click", (event: MouseEvent) => {
    
    document.querySelector("span").innerHTML = "WOW!";

}, false);

