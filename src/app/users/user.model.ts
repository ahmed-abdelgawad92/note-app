export class User{
    constructor(public id: number,public name:string, public gender:string, public age:number){}
    getName(){
        return this.name.toUpperCase();
    }
}