export class  Parking {
    private _vehicleName: string;
    private _vehicleType: string;
    private _modelNo: string;
    private _vehicleNo: string;
    private _member: string;
    private _parkingNo: string;
    private _buildingName: string;
    private _status: string;
    public constructor() {}
    public get vehicleName() {
        return this._vehicleName;
    }
    public set vehicleName(vehicleName: string) {
        this._vehicleName = vehicleName;
    }
    public get vehicleType() {
        return this._vehicleType;
    }
    public set vehicleType(vehicleType: string) {
        this._vehicleType = vehicleType;
    }
    public get modelNO() {
        return this._modelNo;
    }
    public set modelNO(modelNO: string) {
        this._modelNo = modelNO;
    }
    public get vehicleNo() {
        return this._vehicleNo;
    }
    public set vehicleNo(vehicleNo: string) {
        this._vehicleNo = vehicleNo;
    }
    public get member() {
        return this._member;
    }
    public set member(member: string) {
        this._member = member;
    }
    public get parkingNo() {
        return this._parkingNo;
    }
    public set parkingNo(parkingNo: string) {
        this._parkingNo = parkingNo;
    }
    public get buildingName() {
        return this._buildingName;
    }
    public set buildingName(buildingName: string) {
        this._buildingName = buildingName;
    }
    public get status() {
        return this._status;
    }
    public set status(status: string) {
        this._status = status;
    }
}
