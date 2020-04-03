import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "cmd-link",
  styleUrl: "cmd-link.css",
  shadow: false
})
export class CmdLink implements ComponentInterface {
  @Prop() href: string;

  render() {
    return (
      <Host>
        <stencil-route-link
          url={this.href}
          activeClass="link-active"
          anchorClass="link"
        >
          <slot />
        </stencil-route-link>
      </Host>
    );
  }
}
