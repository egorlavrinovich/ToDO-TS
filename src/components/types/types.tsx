export interface IAdress {
    street: string,
    city:string,
    zipcode?:string
}

export interface IUser {
    name: string,
    email?:string,
    id:number,
    adress:IAdress // используем отдельный интерфейс IAdress, т.к. в принятых пропсах есть объект в объекте и тем самым избагаем [object object]
}