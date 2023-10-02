import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-card')
export class MyElement extends LitElement {
    render() {
        return html` <div
            class="rounded-lg border border-input bg-card text-card-foreground shadow-sm"
        >
            <div class="flex flex-col space-y-1.5 p-6">
                <slot></slot>
            </div>
        </div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-card': MyElement;
    }
}
