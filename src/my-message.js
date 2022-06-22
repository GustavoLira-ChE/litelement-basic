import { LitElement, html } from "lit-element";

class MyMessage extends LitElement{
    static get properties(){
        return {
            msg: {type: String}
        }
    }
    constructor(){
        super();
    }
    render(){
        return html`
            <p>Lee el siguiente mensaje:</p>
            <p>${this.msg}</p>
        `
    }
}

customElements.define("my-message", MyMessage);