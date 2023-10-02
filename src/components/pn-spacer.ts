import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-spacer')
export class MyElement extends LitElement {
    @property()
    size = '2';

    render() {
        return html` <div class="h-${this.size}"></div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-spacer': MyElement;
    }
}
