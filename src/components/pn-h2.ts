import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-h2')
export class MyElement extends LitElement {
    render() {
        return html` <h3 class="text-xl font-semibold leading-none tracking-tight">
            <slot></slot>
        </h3>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-h2': MyElement;
    }
}
