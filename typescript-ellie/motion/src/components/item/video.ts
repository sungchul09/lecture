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
        
        iframe.src = this.convertToEmbeddedURL(url)

        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement
        titleElement.textContent = title
    }

    private convertToEmbeddedURL(url: string): string {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp)

        const videoId = match ? match[1] || match[2] : undefined

        if(videoId) {
            return `https://www.youtube.com/embed/${videoId}`
        }

        return url
    }
}
