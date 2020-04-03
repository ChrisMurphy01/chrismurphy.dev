import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cmd-p',
  styleUrl: 'cmd-p.css',
  shadow: true,
})
export class CmdP implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
