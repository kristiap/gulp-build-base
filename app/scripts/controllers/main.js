export default class MainController {
    constructor() {
        this._text = "Text text";
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    clearText() {
        this.text = "";
    }
}