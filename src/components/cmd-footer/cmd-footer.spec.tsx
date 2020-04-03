import { newSpecPage } from '@stencil/core/testing';
import { CmdFooter } from './cmd-footer';

describe('cmd-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdFooter],
      html: `<cmd-footer></cmd-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <cmd-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmd-footer>
    `);
  });
});
