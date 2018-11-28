export class Vendor {
    private _registrationNo: string;
    private _vendorName: string;
    private _vehicleNo: string;
    private _vendorType: string;
    private _address: string;
    private _phone: string;
    private _email: string;
    private _charges: string;
    private _fromDate: string;
    private _toDate: string;
    private _status: string;
    constructor() {}
    public set registrationNo(registrationNo: string) {
        this._registrationNo = registrationNo;
    }
    public get registrationNo() {
        return this._registrationNo;
    }
    public set vendorName(vendorName: string) {
        this._vendorName = vendorName;
    }
    public get vendorName() {
        return this._vendorName;
    }
    public set vehicleNo(vehicleNo: string) {
        this._vehicleNo = vehicleNo;
    }
    public get vehicleNo() {
        return this._vehicleNo;
    }
    public set vendorType(vendorType: string) {
        this._vendorType = vendorType;
    }
    public get vendorType() {
        return this._vendorType;
    }
    public set address(address: string) {
        this._address = address;
    }
    public get address() {
        return this._address;
    }
    public set phone(phone: string) {
        this._phone = phone;
    }
    public get phone() {
        return this._phone;
    }
    public set email(email: string) {
        this._email = email;
    }
    public get email() {
        return this._email;
    }
    public set charges(charges: string) {
        this._charges = charges;
    }
    public get charges() {
        return this._charges;
    }
    public set fromDate(fromDate: string) {
        this._fromDate = fromDate;
    }
    public get fromDate() {
        return this._fromDate;
    }
    public set toDate(toDate: string) {
        this._toDate = toDate;
    }
    public get toDate() {
        return this._toDate;
    }
    public set status(status: string) {
        this._status = status;
    }
    public get status() {
        return this._status;
    }
}
