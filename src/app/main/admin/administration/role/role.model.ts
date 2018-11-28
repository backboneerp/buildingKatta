export class Role {
    private _role: string;
    private _roleType: string;
    private _description: string;
    private _status: string;
    public constructor() {}
    public get role() {
        return this._role;
    }
    public set role(role: string) {
        this._role = role;
    }
    public get roleType() {
        return this._roleType;
    }
    public set roleType(roleType: string) {
        this._roleType = roleType;
    }
    public get description() {
        return this._description;
    }
    public set description( description: string) {
        this._description = description;
    }
    public get status() {
        return this._status;
    }
    public set status(status: string) {
        this._status = status;
    }
}
