export interface signUp{
    name:string,
    email:string,
    password:string
}

export interface Login{
    email:string,
    password:string
}

export interface product{
    Name:string,
    Description:string,
    Price:number,
    Category:string,
    Image:string,
    id:number
}