import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-a')
export class MyElement extends LitElement {
    render() {
        return html` <a
            class="mx-1 transition-colors hover:text-foreground/80 text-foreground/60"
            href="/docs"
            ><slot></slot
        ></a>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-a': MyElement;
    }
}
