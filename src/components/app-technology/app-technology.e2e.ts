import { newE2EPage } from '@stencil/core/testing';

describe('app-technology', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-technology></app-technology>');

    const element = await page.find('app-technology');
    expect(element).toHaveClass('hydrated');
  });
});
