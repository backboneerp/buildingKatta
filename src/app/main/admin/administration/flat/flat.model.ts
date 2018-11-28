export class Flat{
    private _flatNo:string;
    private _societyName:string;
    private _faze:string;
    private _flatOwener:string;

    private _coOwener:string;
    private _flatType:string;
    private _flatRent:string;
    private _maintenanceCost:string;
    private _service:string;
    private _whoIsStaying:string;
    private _status:string;
    public constructor(){
    }
    public get flatNo(){
        return this._flatNo;

    }
    public set flatNo(flatNo:string){
        this._flatNo=flatNo;
    }
    public get societyName(){
        return this._societyName;
    }
    public set societyName(societyName:string){
        this._societyName=societyName;
    }
    public get faze(){
        return this._faze;
    }
    public set faze(faze:string){
        this._faze=faze;
    }
    public get flatOwener(){
        return this._flatOwener;
    }
    public set flatOwener(flatOwener:string){
        this._flatOwener=flatOwener;
    }

    public get coOwener(){
        return this._coOwener;
    }
    public set coOwener(coOwener:string){
        this._coOwener=coOwener;
    }
    public set flatType(flatType:string){
        this._flatType=flatType;
    }
    public get flatType(){
        return this._flatType;
    }
    public set flatRent(flatRent:string){
        this._flatRent=flatRent;
    }
    public get flatRent(){
        return this._flatRent;
    }
    public get maintenanceCost(){
        return this._maintenanceCost;
    }
    public set maintenanceCost(maintenanceCost:string){
        this._maintenanceCost=maintenanceCost;
    }
    public get service(){
        return this._service;
    }
    public set service(service:string){
        this._service=service;
    }
    public set whoIsStaying(whoIsStaying:string){
        this._whoIsStaying=whoIsStaying;
    }
    public get whoIsStaying(){
        return this._whoIsStaying;
    }
    public get status(){
        return this._status;
    }
    public set status(status:string){
        this._status=status;
    }
}
