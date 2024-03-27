import html from "html-literal";
//import { Http2ServerRequest } from "http2";
export default state => html`
  <section id="holidays">
    <ul>
      ${state.holidays
        .map(
          holiday =>
            html`
              <li>${holiday.name} - ${holiday.date.iso}</li>
            `
        )
        .join("")}
    </ul>
  </section>
`;
