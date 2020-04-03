import { newSpecPage } from '@stencil/core/testing';
import { CmdHeading } from './cmd-heading';

describe('cmd-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdHeading],
      html: `<cmd-heading></cmd-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <cmd-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmd-heading>
    `);
  });
});
