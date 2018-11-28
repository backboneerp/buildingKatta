export class Asset {
    constructor() {}
    private _id: string;
    private _assetName: string;
    private _assetOwener: string;
    private _fromDate: string;
    private _toDate: string;
    private _worranty: string;
    private _price: string;
    private _charges: string;
    private _assetType: string;
    private _status: string;
    public get id() {
        return this._id;
    }
    public set id(id: string) {
        this._id = id;
    }

    public get assetName() {
        return this._assetName;
    }
    public set assetName(assetName: string) {
        this._assetName = assetName;
    }
    public get assetOwener() {
        return this._assetOwener;
    }
    public set assetOwener(assetOwener: string) {
        this._assetOwener = assetOwener;
    }
    public get fromDate() {
        return this._fromDate;
    }
    public set fromDate(fromDate: string) {
        this._fromDate = fromDate;
    }
    public get toDate() {
        return this._toDate;
    }
    public set toDate(toDate: string) {
        this._toDate = toDate;
    }
    public get worranty() {
        return this._worranty;
    }
    public set worranty(worranty: string) {
        this._worranty = worranty;
    }
    public get price() {
        return this._price;
    }
    public set price(price: string) {
        this._price = price;
    }
    public get charges() {
        return this._charges;
    }
    public set charges(charges: string) {
        this._charges = charges;
    }
    public get assetType() {
        return this._assetType;
    }
    public set assetType(assetType: string) {
        this._assetType = assetType;
    }
    public set status(status: string) {
        this._status = status;
    }
    public get status() {
        return this._status;
    }
}
