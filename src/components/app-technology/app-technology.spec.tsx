import { newSpecPage } from '@stencil/core/testing';
import { AppTechnology } from './app-technology';

describe('app-technology', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTechnology],
      html: `<app-technology></app-technology>`,
    });
    expect(page.root).toEqualHtml(`
      <app-technology>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-technology>
    `);
  });
});
