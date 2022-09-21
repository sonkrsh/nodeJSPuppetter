/// <reference types="google-cloud__datastore" />
/// <reference types="node" />
import { DatastoreKey } from '@google-cloud/datastore/entity';
import * as Koa from 'koa';
import Datastore = require('@google-cloud/datastore');
export declare class DatastoreCache {
    datastore: Datastore;
    clearCache(): Promise<void>;
    cacheContent(key: DatastoreKey, headers: {}, payload: Buffer): Promise<void>;
    /**
     * Returns middleware function.
     */
    middleware(): (ctx: Koa.Context, next: () => Promise<unknown>) => Promise<void>;
}
