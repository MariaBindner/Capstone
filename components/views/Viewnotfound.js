import html from "html-literal";
import Maria_IMG from "../../docs/img/404.png";

export default () => {
  console.log("Hello from my view");
  return html`
    <div id="404">
      <img src="assets/img/oops-404.jpg" alt="Doh, view not found!" />
      <div class="attribution">
        <a
          href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_13315300.htm"
          target="_blank"
          >Image by storyset</a
        >
        on Freepik
      </div>
    </div>
  `;
};
