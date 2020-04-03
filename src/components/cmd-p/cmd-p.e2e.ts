import { newE2EPage } from '@stencil/core/testing';

describe('cmd-p', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmd-p></cmd-p>');

    const element = await page.find('cmd-p');
    expect(element).toHaveClass('hydrated');
  });
});
