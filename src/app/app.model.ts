export class AppModel {
    public appName: string;
    public description: string;
    public imagePath: string;

    constructor( name: string, desc: string, imagePath: string ) {
        this.appName = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

}