import { newE2EPage } from '@stencil/core/testing';

describe('cmd-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmd-heading></cmd-heading>');

    const element = await page.find('cmd-heading');
    expect(element).toHaveClass('hydrated');
  });
});
