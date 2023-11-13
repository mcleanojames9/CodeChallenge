export class User {
    user_id: number;
    username: string;
    password: string;
    
    constructor(username: string, password:string){
        // this.user_id = null;
        this.username = username;
        this.password = password;
    }
}
