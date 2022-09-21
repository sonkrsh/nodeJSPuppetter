export declare type Config = {
    datastoreCache: boolean;
    timeout: number;
    port: string;
    width: number;
    height: number;
};
export declare class ConfigManager {
    static config: Config;
    static getConfiguration(): Promise<Config>;
}
