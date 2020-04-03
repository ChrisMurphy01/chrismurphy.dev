import { newSpecPage } from '@stencil/core/testing';
import { CmdHeader } from './cmd-header';

describe('cmd-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdHeader],
      html: `<cmd-header></cmd-header>`,
    });
    expect(page.root).toEqualHtml(`
      <cmd-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmd-header>
    `);
  });
});
