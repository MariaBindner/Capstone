import html from "html-literal";
import * as menu from "./menu";

export default state => html`
  ${views[state.view](state)}

  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
