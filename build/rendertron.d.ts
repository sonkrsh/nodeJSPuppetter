/// <reference types="koa-bodyparser" />
/// <reference types="node" />
import * as Koa from 'koa';
/**
 * Rendertron rendering service. This runs the server which routes rendering
 * requests through to the renderer.
 */
export declare class Rendertron {
    app: Koa;
    private config;
    private renderer;
    private port;
    initialize(): Promise<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>>;
    /**
     * Checks whether or not the URL is valid. For example, we don't want to allow
     * the requester to read the file system via Chrome.
     */
    restricted(href: string): boolean;
    handleRenderRequest(ctx: Koa.Context, url: string): Promise<void>;
    handleScreenshotRequest(ctx: Koa.Context, url: string): Promise<void>;
}
