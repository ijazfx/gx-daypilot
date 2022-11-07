import { html, LitElement } from 'lit-element';

class GxDaypilot extends LitElement {
	static get properties() {
		return {
			name: {type: String}
		}
	}
  	render() {
    	return html`<p>Hello, ${this.name}!</p>`;
  	}
	
}
customElements.define('gx-daypilot', GxDaypilot);