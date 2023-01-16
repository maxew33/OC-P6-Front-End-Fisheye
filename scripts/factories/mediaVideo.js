export default class Video{
    constructor(data, name) {              
        this._name = name
        this._filename = data.video
        this._title = data.title
    }

    createTag(){
        const tag = `
        <video loop muted autoplay width="250" class="photographer-media photographer-video" aria-label="${this._title}">    
            <source src="./assets/sample-photos/${this._name}/${this._filename}"
                type="video/mp4">
        </video>`
        return tag
    }
}