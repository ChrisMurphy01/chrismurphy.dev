import { newSpecPage } from '@stencil/core/testing';
import { CmdLayoutImpact } from './cmd-layout-impact';

describe('cmd-layout-impact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmdLayoutImpact],
      html: `<cmd-layout-impact></cmd-layout-impact>`,
    });
    expect(page.root).toEqualHtml(`
      <cmd-layout-impact>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmd-layout-impact>
    `);
  });
});
