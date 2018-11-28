import { HttpRequest } from '@angular/common/http';

export class AssetServerUrl {
    public static ADD_ASSET_SERVER_URL = 'http://localhost:8080/asset-management/add';
    public static DELETE_ASSET_URL = '';
    public static EDIT_ASSET_URL = '';
    public static GET_ASSET_URL = '';
    public static ALL_ASSET_URL = '';
    public static PROGRESS: any = {reportProgress: true, observe: 'events'};
    public static TEMP = 'http://localhost:8080/temp';
}
