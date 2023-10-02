import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-h1')
export class MyElement extends LitElement {
    render() {
        return html` <h3 class="text-3xl font-semibold leading-none tracking-tight">
            <slot></slot>
        </h3>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-h1': MyElement;
    }
}
