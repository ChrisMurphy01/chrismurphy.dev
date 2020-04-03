import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "cmd-heading",
  styleUrl: "cmd-heading.css",
  shadow: true
})
export class CmdHeading implements ComponentInterface {
  @Prop() level: string;
  @Prop() weight: "normal" | "bold";

  renderHeading = (level, weight, slot) => {
    let el = "";
    let classes = "heading";

    switch (weight) {
      case "normal":
        classes += " normal";
        break;
      case "bold":
        classes += " bold";
        break;
    }

    switch (level) {
      case "1":
        el = <h1 class={classes}>{slot}</h1>;
        break;
      case "2":
        el = <h2 class={classes}>{slot}</h2>;
        break;
      case "3":
        el = <h3 class={classes}>{slot}</h3>;
        break;
      case "4":
        el = <h4 class={classes}>{slot}</h4>;
        break;
      case "5":
        el = <h5 class={classes}>{slot}</h5>;
        break;
      case "6":
        el = <h6 class={classes}>{slot}</h6>;
        break;
    }

    return el;
  };

  render() {
    return <Host>{this.renderHeading(this.level, this.weight, <slot />)}</Host>;
  }
}
