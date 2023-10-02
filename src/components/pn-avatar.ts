import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-avatar')
export class MyElement extends LitElement {
    render() {
        return html` <span
            class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
        >
            <slot></slot
        ></span>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-avatar': MyElement;
    }
}
