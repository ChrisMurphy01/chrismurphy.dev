import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "app-technology",
  styleUrl: "app-technology.css",
  shadow: true
})
export class AppTechnology implements ComponentInterface {
  render() {
    return (
      <Host>
        <cmd-wrapper>
          <main>
            <cmd-header></cmd-header>
            <cmd-layout-impact>
              <h3 class="heading" slot="name">
                HTML
                <br />
                CSS
                <br />
                JavaScript
              </h3>
              <h3 class="heading" slot="title">
                React
                <br />
                TypeScript
              </h3>
            </cmd-layout-impact>
          </main>
        </cmd-wrapper>
      </Host>
    );
  }
}
