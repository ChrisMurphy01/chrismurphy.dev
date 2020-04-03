import { newE2EPage } from '@stencil/core/testing';

describe('cmd-layout-impact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmd-layout-impact></cmd-layout-impact>');

    const element = await page.find('cmd-layout-impact');
    expect(element).toHaveClass('hydrated');
  });
});
