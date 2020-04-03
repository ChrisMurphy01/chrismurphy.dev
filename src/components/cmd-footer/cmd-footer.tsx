import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cmd-footer',
  styleUrl: 'cmd-footer.css',
  shadow: true,
})
export class CmdFooter implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
