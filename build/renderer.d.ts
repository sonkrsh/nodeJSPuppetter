/// <reference types="node" />
import * as puppeteer from 'puppeteer';
import { Config } from './config';
declare type SerializedResponse = {
    status: number;
    content: string;
};
declare type ViewportDimensions = {
    width: number;
    height: number;
};
/**
 * Wraps Puppeteer's interface to Headless Chrome to expose high level rendering
 * APIs that are able to handle web components and PWAs.
 */
export declare class Renderer {
    private browser;
    private config;
    constructor(browser: puppeteer.Browser, config: Config);
    serialize(requestUrl: string, isMobile: boolean): Promise<SerializedResponse>;
    screenshot(url: string, isMobile: boolean, dimensions: ViewportDimensions, options?: object): Promise<Buffer>;
}
declare type ErrorType = 'Forbidden' | 'NoResponse';
export declare class ScreenshotError extends Error {
    type: ErrorType;
    constructor(type: ErrorType);
}
export {};
