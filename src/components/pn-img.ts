import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-img')
export class MyElement extends LitElement {
    @property()
    src: string = '';

    @property()
    alt: string = '';

    @property()
    aspect: string = '1/1';

    @property()
    max: string = '100px';

    render() {
        return html` <div class="overflow-hidden rounded-md">
            <img
                alt="${this.alt}"
                loading="lazy"
                decoding="async"
                class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[${this
                    .aspect}]"
                src="${this.src}"
            />
        </div>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-img': MyElement;
    }
}
