export default class MyApi {
    constructor(url) {
        this._url = url
    }

    async getPhotographers() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.error('an error occurs', err))
    }

    async getMedia() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.error('an error occurs', err))
    }
}
