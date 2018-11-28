import { assertNotNull } from '@angular/compiler/src/output/output_ast';

export class Service {
    private _serviceId: string;
    private _serviceName: string;
    private _serviceType: string;
    private _description: string;
    private _assignServiceTo: string;
    private _startDateAndTime: string;
    private _dueDateAndTime: string;
    private _status: string;
    public constructor() {}
    public get serviceId() {
        return this._serviceId;
    }
    public set serviceId(serviceId: string) {
        this._serviceId = serviceId;
    }
    public get serviceName() {
        return this._serviceName;
    }
    public set serviceName(serviceName: string) {
        this._serviceName = serviceName;
    }
    public get serviceType() {
        return this._serviceType;
    }
    public set serviceType(serviceType: string) {
        this._serviceType = serviceType;
    }
    public get description() {
        return this._description;
    }
    public set description(description: string) {
        this._description = description;
    }
    public get assignServiceTo() {
        return this._assignServiceTo;
    }
    public set assignServiceTo(assignServiceTo: string) {
        this._assignServiceTo = assignServiceTo;
    }
    public get startDateAndTime() {
        return this._startDateAndTime;
    }
    public set startDateAndTime(startDateAndTime: string) {
        this._startDateAndTime = startDateAndTime;
    }
    public get dueDateAndTime() {
        return this._dueDateAndTime;
    }
    public set dueDateAndTime(dueDateAndTime: string) {
        this._dueDateAndTime = dueDateAndTime;
    }
    public get status() {
        return this._status;
    }
    public set status(status: string) {
        this._status = status;
    }


}
