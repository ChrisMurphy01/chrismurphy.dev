import { newE2EPage } from '@stencil/core/testing';

describe('cmd-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmd-header></cmd-header>');

    const element = await page.find('cmd-header');
    expect(element).toHaveClass('hydrated');
  });
});
