import html from "html-literal";
import * as views from "./views";

export default () => html`
  ${views["Bio"]()} ${views["Event"]()} ${views["Groupemail"]()}
  ${views["History"]()} ${views["Home"]()} ${views["Ordersubmission"]()}
  ${views["Updates"]()} ${views["Viewnotfound"]()}
`;
