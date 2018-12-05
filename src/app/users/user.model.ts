export class User{
    constructor(public name:string, public gender:string, public age:number){}
    getName(){
        return this.name;
    }
}