import { Plugin } from 'vite';

interface IconOptions {
    offset?: number;
    background?: boolean | string;
    mask?: boolean;
    overlayGlow?: boolean;
    overlayShadow?: boolean;
}
interface FaviconOptions {
    /** Path for overriding default icons path @default '/' */
    path: string;
    /** Your application's name @default null */
    appName: string | null;
    /**
     * Your application's short_name.
     * @default appName
     */
    appShortName: string | null;
    /** Your application's description @default null */
    appDescription: string | null;
    /** Your (or your developer's) name @default null */
    developerName: string | null;
    /** Your (or your developer's) URL @default null */
    developerURL: string | null;
    /** Primary text direction for name, short_name, and description @default 'auto' */
    dir: string;
    /** Primary language for name and short_name @default 'en-US' */
    lang: string;
    /** Background colour for flattened icons @default '#fff' */
    background: string;
    /** Theme color user for example in Android's task switcher @default '#fff' */
    theme_color: string;
    /** Style for Apple status bar @default 'black-translucent' */
    appleStatusBarStyle: 'black-translucent' | 'default' | 'black';
    /** Preferred display mode: 'fullscreen', 'standalone', 'minimal-ui' or 'browser' @default 'standalone' */
    display: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
    /** Default orientation: 'any', 'natural', 'portrait' or 'landscape' @default 'any' */
    orientation: 'any' | 'natural' | 'portrait' | 'landscape';
    /** Set of URLs that the browser considers within your app @default null */
    scope: string;
    /** Start URL when launching the application from a device @default '/?homescreen=1' */
    start_url: string;
    /** Your application's version string @default '1.0' */
    version: string;
    /** Print logs to console? @default false */
    logging: boolean;
    /** Determines whether to allow piping html as a file @default false */
    pipeHTML: boolean;
    /** Use nearest neighbor resampling to preserve hard edges on pixel art @default false */
    pixel_art: boolean;
    /** Browsers don't send cookies when fetching a manifest, enable this to fix that @default false */
    loadManifestWithCredentials: boolean;
    /** Determines whether to set relative paths in manifests @default false */
    manifestRelativePaths: boolean;
    /**
     * Platform Options:
     * - offset - offset in percentage
     * - background:
     *   * false - use default
     *   * true - force use default, e.g. set background for Android icons
     *   * color - set background for the specified icons
     * - mask - apply mask in order to create circle icon (applied by default for firefox)
     * - overlayGlow - apply glow effect after mask has been applied (applied by default for firefox)
     * - overlayShadow - apply drop shadow after mask has been applied
     */
    icons: Partial<{
        android: boolean | IconOptions | string[];
        appleIcon: boolean | IconOptions | string[];
        appleStartup: boolean | IconOptions | string[];
        coast: boolean | IconOptions | string[];
        favicons: boolean | IconOptions | string[];
        firefox: boolean | IconOptions | string[];
        windows: boolean | IconOptions | string[];
        yandex: boolean | IconOptions | string[];
    }>;
}

declare type FaviconsConfig = Partial<FaviconOptions>;
declare type ViteFaviconsPluginOptions = {
    /** Your source logo (Will default to )
        @default "assets/logo.png"
     */
    logo?: string;
    /** Inject html links/metadata -- set to `false` to generate a webapp.html` file.
        @default true
     */
    inject?: boolean;
    /** `Favicons` configuration options
     *  - [See `favicons` documentation](https://github.com/itgalaxy/favicons)
    */
    favicons?: FaviconsConfig;
    /** The root of the project from which you want to load metadata
        @default process.cwd()
     */
    projectRoot?: string;
    /** Output Path for the favicon images & files, relative to the Vite assets directory
     */
    outputPath?: string;
    /** prefix is delegated to Rollup/Vite (keeping for people migrating from Webpack)
     * @deprecated
    */
    prefix?: string;
    /** Caching is delegated to Rollup/Vite (keeping for people migrating from Webpack)
     * @deprecated
    */
    cache?: boolean;
    /** Public Path is delegated to Rollup/Vite (keeping for people migrating from Webpack)
     * @deprecated
    */
    publicPath?: string;
};
declare type FaviconsPluginArgs = Partial<ViteFaviconsPluginOptions> | ViteFaviconsPluginOptions['logo'];
declare const ViteFaviconsPlugin: (options?: FaviconsPluginArgs) => Plugin;

export default ViteFaviconsPlugin;
export { ViteFaviconsPlugin, ViteFaviconsPluginOptions };
