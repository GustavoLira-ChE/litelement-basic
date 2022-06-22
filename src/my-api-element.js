import { LitElement, html } from "lit-element";

class MyApiElement extends LitElement{
    static get properties(){
        return {
            data: {type: Array},
        }
    }
    constructor(){
        super();
    }
    connectedCallback() {
        super.connectedCallback();

        if (!this.data) {
          this.fetchBreweries();
        }
    }
    render(){
        return html`
        <p>Vamos a llamar una API</p>
        <ul>
            ${this.data.map(item => html`<li>${item.name}</li>`)}
        </ul>
        
        `;

    }


    async fetchBreweries() {
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        const jsonResponse = await response.json();
        this.data = jsonResponse;
        console.log(this.data);
    }
}

customElements.define("my-api-element", MyApiElement);