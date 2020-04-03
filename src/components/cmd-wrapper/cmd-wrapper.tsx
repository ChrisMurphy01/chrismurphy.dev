import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "cmd-wrapper",
  styleUrl: "cmd-wrapper.css",
  shadow: false
})
export class CmdWrapper implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
