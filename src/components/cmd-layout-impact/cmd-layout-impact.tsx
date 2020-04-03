import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "cmd-layout-impact",
  styleUrl: "cmd-layout-impact.css",
  shadow: false
})
export class CmdLayoutImpact implements ComponentInterface {
  @Prop() name: string;
  @Prop() title: string;

  render() {
    return (
      <Host>
        <div class="bg-wrapper">
          <div class="bg-top"></div>
          <div class="bg-bottom"></div>
        </div>
        <div class="content-wrapper">
          <div class="content-top">
            <div class="text">
              <slot name="name"></slot>
            </div>
          </div>
          <div class="content-bottom">
            <div class="text">
              <slot name="title"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
