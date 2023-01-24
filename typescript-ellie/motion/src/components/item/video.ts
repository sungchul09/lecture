import { BaseComponent } from './../component.js'

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`
            <section class="video">
            <h1 class="video__title"></h1>
            
            <div class="video__player"><iframe class="iframe" width="450" height="260" title="랭커는 모든 총의 사거리가 0이면 브론즈를 이길 수 있을까?!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </section>
        `)

        const iframe = this.element.querySelector('.iframe')! as HTMLIFrameElement
        iframe.src = url
        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement
        titleElement.textContent = title
    }
}
