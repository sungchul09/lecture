import { Component } from './components/component.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { VideoComponent } from './components/item/video.js';
import { ImageComponent } from './components/item/image.js'
import { PageComponent, Composable } from './components/page/page.js'
class App {
  private readonly page: Component & Composable
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()
    this.page.attachTo(appRoot)

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300')
    this.page.addChild(image)
    
    const note = new NoteComponent('Note Title', 'Note Body')
    this.page.addChild(note)
    
    const todo = new TodoComponent('Todo Title', 'Todo Item')
    this.page.addChild(todo)
    
    const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/VU2_yjIMDEg')
    this.page.addChild(video)
  }
}

new App(document.querySelector('.document')! as HTMLElement) 