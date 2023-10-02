import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-skeleton')
export class MyElement extends LitElement {
    render() {
        return html` <div class="flex items-center space-x-4">
            <div class="animate-pulse bg-muted h-12 w-12 rounded-full"></div>
            <div class="space-y-2">
                <div class="animate-pulse rounded-md bg-muted h-4 w-[250px]"></div>
                <div class="animate-pulse rounded-md bg-muted h-4 w-[200px]"></div>
            </div>
        </div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-skeleton': MyElement;
    }
}
