import html from "html-literal";
import Maria from "../../docs/img/MariaB.png";

export default () => html`
  <section id="bio">
    <h3>About Me</h3>
    img src="${Maria}" alt="me" />
    <p>
      The author of this web page was in a support role for over twenty years.
      All things being equal, submitting group orders/catering orders, on time,
      accurate and organized was very difficult to do. Hoping this solution
      takes away the complexity for group/catering orders. All the best - now
      Order Up!
    </p>
  </section>
`;
