class LocaleModel {
    constructor(body) {
        this.id = body.id;
        this.name = body.name;
        this.state = body.state;
        this.longitude = body.longitude;
        this.latitude = body.latitude;
    }
}

export default LocaleModel;