export class Visitor {

    private _date: string;
    private _photo: File;
    private _visitorName: string;
    private _visitorType: string;
    private _flatNo: string;
    private _owenerName: string;
    private _relationType: string;
    private _visitingPurpose: string;
    private _description: string;
    private _inDateAndTime: string;
    private _outDateAndTime: string;
    private _attchedDocument: File[];
    private _status: string;
    public constructor() {}
    public set date(date: string) {
        this._date = date;
    }
    public get date() {
        return this._date;
    }
    public set photo(photo: File) {
        this._photo = photo;
    }
    public get photo() {
        return this._photo;
    }
    public set visitorName(visitorName: string) {
        this._visitorName = visitorName;
    }
    public get visitorName() {
        return this._visitorName;
    }
    public set visitorType(visitorType: string) {
        this._visitorType = visitorType;
    }
    public get visitorType() {
        return this._visitorType;
    }
    public set flatNo(flatNo: string) {
        this._flatNo = flatNo;
    }
    public get flatNo() {
        return this._flatNo;
    }
    public set owenerName(owenerName: string) {
        this._owenerName = owenerName;
    }
    public get owenerName() {
        return this._owenerName;
    }
    public set relationType(relationType: string) {
        this._relationType = relationType;
    }
    public get relationType() {
        return this._relationType;
    }
    public set visitingPurpose(visitingPurpose: string) {
        this._visitingPurpose = visitingPurpose;
    }
    public get visitingPurpose() {
        return this._visitingPurpose;
    }
    public set description(description: string) {
        this._description = description;
    }
    public get description() {
        return this._description;
    }
    public set inDateAndTime(inDateaAndTime: string) {
        this._inDateAndTime = inDateaAndTime;
    }
    public get inDateAndTime() {
        return this._inDateAndTime;
    }
    public set outDateAndTime(outDateAndTime: string) {
        this._outDateAndTime = outDateAndTime;
    }
    public get outDateAndTime() {
        return this._outDateAndTime;
    }
    public set attachedDocument(attachedDocument: File[]) {
        this._attchedDocument = attachedDocument;
    }
    public get attachedDocument() {
        return this._attchedDocument;
    }
    public set status(status: string) {
        this._status = status;
    }
    public get status() {
       return this._status;
    }

}
