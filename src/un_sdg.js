import { LitElement, html, css } from "lit";
export class UnSDG extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.goal = 1;
    this.title = "";
    this.colorOnly = false;

  }

  static get properties() {
    return {
      goal: { type: Number },
      titlr: { type: String },
      colorOnly: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 254px;
        height: 254px;
        background-color: var(--un-sdg-goal-color, #4a439a);
        text-align: center;
        line-height: 254px;
        font-size: 24px;
        color: #ffffff;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }
      .color-box {
        width: 100%;
        height: 100%;
      }
    `;
  }
  
  updated(changedProperties) {
    if (changedProperties.has("goal")) {
        this._updateGoal();
    }
  }
  _updateGoal() {
    const colors = {
      1: "#E5243B",
      2: "#DDA63A",
      3: "#4C9F38",
      4: "#C5192D",
      5: "#FF3A21",
      6: "#26BDE2",
      7: "#FCC30B",
      8: "#A21942",
      9: "#FD6925",
      10: "#DD1367",
      11: "#FD9D24",
      12: "#BF8B2E",
      13: "#3F7E44",
      14: "#0A97D9",
      15: "#56C02B",
      16: "#00689D",
      17: "#19486A"
    };

    const color = colors[this.goal] || "#000000";
    this.style.setProperty("--un-sdg-goal-color", color);

    if (!this.title) {
      this.title = `Goal ${this.goal}`;
    }
  }

  render() {
    const imgUrl = new URL(`./lib/svgs/goal-${this.goal}.svg`, import.meta.url).href;

    return html`
      ${this.colorOnly
        ? html`<div class="color-box" style="background-color: var(--un-sdg-goal-color);"></div>`
        : html`<img src="${imgUrl}" alt="${this.title}" loading="lazy" fetchpriority="low" />`}
    `;
  }
}
customElements.define(UnSDG.tag, UnSDG);