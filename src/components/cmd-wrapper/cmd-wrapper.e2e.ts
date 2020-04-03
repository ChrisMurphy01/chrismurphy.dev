import { newE2EPage } from '@stencil/core/testing';

describe('cmd-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmd-wrapper></cmd-wrapper>');

    const element = await page.find('cmd-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
