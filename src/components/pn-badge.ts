import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-badge')
export class MyElement extends LitElement {
    render() {
        return html` <div
            class="inline-flex items-center rounded-full border border-primary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
        >
            <slot></slot>
        </div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-badge': MyElement;
    }
}
