import { newSpecPage } from '@stencil/core/testing';
import { CmdP } from './cmd-p';

describe('cmd-p', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdP],
      html: `<cmd-p></cmd-p>`,
    });
    expect(page.root).toEqualHtml(`
      <cmd-p>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmd-p>
    `);
  });
});
