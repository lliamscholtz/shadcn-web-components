import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-col-2')
export class MyElement extends LitElement {
    render() {
        return html` <div class="grid md:grid-cols-2 gap-4">
            <slot></slot>
        </div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-col-2': MyElement;
    }
}
