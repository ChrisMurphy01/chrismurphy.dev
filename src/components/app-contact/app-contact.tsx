import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "app-contact",
  styleUrl: "app-contact.css",
  shadow: true
})
export class AppContact implements ComponentInterface {
  render() {
    return (
      <Host>
        <cmd-wrapper>
          <main>
            <cmd-header></cmd-header>
            <cmd-layout-impact>
              <h3 class="heading" slot="name">
                Chris Murphy
              </h3>
              <h3 class="heading" slot="title">
                <a href="mailto:chrismurphy01@gmail.com" class="contact-link">
                  chrismurphy01@gmail.com
                </a>
                <br />
                <a href="tel:07870645490" class="contact-link">
                  07870 645 490
                </a>
              </h3>
            </cmd-layout-impact>
          </main>
        </cmd-wrapper>
      </Host>
    );
  }
}
