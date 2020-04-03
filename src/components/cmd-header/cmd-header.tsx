import { Component, ComponentInterface, Host, h, State } from "@stencil/core";

@Component({
  tag: "cmd-header",
  styleUrl: "cmd-header.css",
  shadow: false
})
export class CmdHeader implements ComponentInterface {
  @State() open: boolean = false;

  handleToggleNav() {
    this.open = !this.open;
  }
  render() {
    return (
      <Host>
        <div class="header">
          <button
            class="nav-toggle"
            type="button"
            onClick={() => this.handleToggleNav()}
          >
            <span class={{ burger: true, active: this.open }}></span>
          </button>
          <div class={{ "nav-bg": true, active: this.open }}>
            <nav class="nav">
              <ul class="links-list">
                <li class="list-item">
                  <cmd-link href="/">Home</cmd-link>
                </li>
                <li class="list-item">
                  <cmd-link href="/technology">Technology</cmd-link>
                </li>
                <li class="list-item">
                  <cmd-link href="/contact">Contact</cmd-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Host>
    );
  }
}
