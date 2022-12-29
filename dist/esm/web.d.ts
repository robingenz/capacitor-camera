import { WebPlugin } from '@capacitor/core';
import type { CameraPlugin, GalleryImageOptions, GalleryPhotos, ImageOptions, PermissionStatus, Photo, GalleryMedia } from './definitions';
export declare class CameraWeb extends WebPlugin implements CameraPlugin {
    getPhoto(options: ImageOptions): Promise<Photo>;
    pickImages(_options: GalleryImageOptions): Promise<GalleryPhotos>;
    pickMedia(): Promise<GalleryMedia>;
    private cameraExperience;
    private fileInputExperience;
    private multipleFileInputExperience;
    private _getCameraPhoto;
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(): Promise<PermissionStatus>;
    pickLimitedLibraryPhotos(): Promise<GalleryPhotos>;
    getLimitedLibraryPhotos(): Promise<GalleryPhotos>;
}
declare const Camera: CameraWeb;
export { Camera };
