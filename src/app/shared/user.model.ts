export class User {
    public _username: string;
    public _password: string;
    public _role: string;
    public _name: string;
    set username(username: string) {
        this.username = username;
    }
    get username(): string {
        return this._username;
    }
    set password(password: string) {
        this.password = password;
    }
    get password() {
        return this._password;
    }
    set role(role: string) {
        this.role = role;
    }
    get role() {
        return this._role;
    }
    set name(name: string) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
