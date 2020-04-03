import { newSpecPage } from '@stencil/core/testing';
import { CmdWrapper } from './cmd-wrapper';

describe('cmd-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdWrapper],
      html: `<cmd-wrapper></cmd-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cmd-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmd-wrapper>
    `);
  });
});
