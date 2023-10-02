import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-progress')
export class MyElement extends LitElement {
    render() {
        return html` <div
            aria-valuemax="100"
            aria-valuemin="0"
            role="progressbar"
            data-state="indeterminate"
            data-max="100"
            class="relative h-4 overflow-hidden rounded-full bg-secondary w-[100%]"
        >
            <div
                data-state="indeterminate"
                data-max="100"
                class="h-full w-full flex-1 bg-primary transition-all"
                style="transform: translateX(-34%);"
            ></div>
        </div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-progress': MyElement;
    }
}
