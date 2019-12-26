import { stringify } from 'querystring';

export class User {
    constructor(
        public fname:string,
        public lname:string,
        public  mobileno:number,
        public gender:string,
        public  email:string,
        public  pass:string,
        public  repass:string,
        public city:string,
        public state:string,
        public pincode:number
        
        ){ }
}
