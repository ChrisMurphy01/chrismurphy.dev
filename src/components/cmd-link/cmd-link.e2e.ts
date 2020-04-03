import { newE2EPage } from '@stencil/core/testing';

describe('cmd-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmd-link></cmd-link>');

    const element = await page.find('cmd-link');
    expect(element).toHaveClass('hydrated');
  });
});
