import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asset } from './asset.model';
import { Observable } from 'rxjs';
import { AssetServerUrl } from './asset.server.url';

@Injectable()
export class AssetHttpService {
    constructor(private http: HttpClient) {
    }
    public addAsset(asset: Asset): Observable<any> {
       return this.http.post(AssetServerUrl.ADD_ASSET_SERVER_URL, asset, AssetServerUrl.PROGRESS);

    }
}
