import html from "html-literal";
//import { Http2ServerRequest } from "http2";
export default state => html`
  <section id="jumbotron">
    <h2>MB Capstone</h2>
    <a href="index.html">"Call to Action Button"</a>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
