import { newSpecPage } from '@stencil/core/testing';
import { CmdLink } from './cmd-link';

describe('cmd-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdLink],
      html: `<cmd-link></cmd-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cmd-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmd-link>
    `);
  });
});
