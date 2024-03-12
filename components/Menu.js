import html from "html-literal";
import * as menu from "./menu";

export default state => html`
  ${views[state.view](state)}
`;
