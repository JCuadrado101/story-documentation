class SideNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div>
                <h1>Hello</h1>
            </div>
        `;
    }
}

customElements.define('side-navigation', SideNav);