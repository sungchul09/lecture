import { BaseComponent } from './../component.js'
export class ImageComponent extends BaseComponent<HTMLImageElement> {
    constructor(title: string, url: string) {
        super(`
            <section class="image">
            <h1 class="image__title"></h1>
            <div class="image__holder"><img class="image__thumbnail"></div>
            </section>
        `)

        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement
        imageElement.src = url
        imageElement.alt = title

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement
        titleElement.textContent =  title

    }
}
