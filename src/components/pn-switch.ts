import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-switch')
export class MyElement extends LitElement {
    render() {
        return html` <div class="flex items-center space-x-2">
            <button
                type="button"
                role="switch"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-input transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                id="airplane-mode"
            >
                <span
                    data-state="unchecked"
                    class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                ></span></button
            ><label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="airplane-mode"
                >Airplane Mode</label
            >
        </div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-switch': MyElement;
    }
}
