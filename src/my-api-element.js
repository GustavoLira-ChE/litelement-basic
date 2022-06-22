import { LitElement, html } from "lit-element";
//import "./my-element"

class MyApiElement extends LitElement{
    static get properties(){
        return {
            data: {type: Array},
            loading: {type: Boolean},
        }
    }
    constructor(){
        super();
        this.loading = true;
    }
    connectedCallback() {
        super.connectedCallback();

        if (!this.data) {
          this.fetchBreweries();
        }
    }
    render(){
        if(this.loading) {
            return html`<p>loading...</p>`
        }
        return html`
        <p>Vamos a llamar una API</p>
        <my-element></my-element>
        <ul>
            ${this.data.map(item => html`<li>${item.name}</li>`)}
        </ul>
        
        `;

    }


    async fetchBreweries() {
        this.loading = true;
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        const jsonResponse = await response.json();
        this.data = jsonResponse;
        this.loading = false;
    }
}

customElements.define("my-api-element", MyApiElement);