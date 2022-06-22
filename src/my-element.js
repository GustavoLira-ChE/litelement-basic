import { LitElement, html, render } from "lit-element";

class MyElement extends LitElement{
    static get properties(){
        return{
            user: {type: String}
        }
    }
    constructor(){
        super();
        this.user = "Gustavo";
    }
    render(){
        return html`
            <p class="paragraph">Soy My Element belong to ${this.user}</p>
            <button @click=${this._changeUser}>Click</button>
        `
    }

    _changeUser(){
        this.user = this.user === "Gustavo" ? "Juan" : "Gustavo";
    }
}

customElements.define('my-element',MyElement);