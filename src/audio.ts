export default {
    el(id: string): HTMLAudioElement {
        return document.querySelector(`#${id}`)!
    },
    start() {
        this.el('begins').play()
    },
    fire() {
        this.el('fire').play()
    },
    explode() {
        this.el('ends').play()
    }
}