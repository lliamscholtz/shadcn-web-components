import { LitElement, unsafeCSS, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import tailwind from '../tailwind.css?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('pn-nav')
export class MyElement extends LitElement {
    render() {
        return html` <header
            class="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur"
        >
            <div class="container flex h-14 items-center">
                <div class="mr-4 flex">
                    <a class="mr-6 flex items-center space-x-2" href="/"
                        ><span class="inline-block font-bold text-xl"
                            ><slot name="title"></slot></span
                    ></a>
                    <nav class="flex items-center space-x-6 text-sm font-medium">
                        <slot name="links"></slot>
                    </nav>
                </div>
            </div>
        </header>`;
    }

    static styles = unsafeCSS(tailwind);
}

declare global {
    interface HTMLElementTagNameMap {
        'pn-nav': MyElement;
    }
}
