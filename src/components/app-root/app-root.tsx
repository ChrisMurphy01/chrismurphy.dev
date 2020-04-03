import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/technology" component="app-technology" />
          <stencil-route url="/contact" component="app-contact" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
