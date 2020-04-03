import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: false
})
export class AppHome {
  years(start) {
    let date = new Date();
    let year = date.getFullYear();
    return year - start;
  }

  render() {
    return (
      <div class="app-home">
        <cmd-wrapper>
          <main>
            <cmd-header></cmd-header>
            <cmd-layout-impact>
              <h1 class="heading" slot="name">
                Chris Murphy
              </h1>
              <h2 class="heading" slot="title">
                web development
              </h2>
            </cmd-layout-impact>
          </main>
        </cmd-wrapper>
      </div>
    );
  }
}
