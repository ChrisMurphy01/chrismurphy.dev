import { newE2EPage } from '@stencil/core/testing';

describe('cmd-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmd-footer></cmd-footer>');

    const element = await page.find('cmd-footer');
    expect(element).toHaveClass('hydrated');
  });
});
