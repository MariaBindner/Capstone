export default state => html`
  <section id="menu">
    <h2>Menu</h2>
    <ul>
      ${state.menu.map(item => menu(item)).join("")}
    </ul>
  </section>
`;

// import html from "html-literal";
// //import menuItem from "../menuItem";

// export default state => html`
//   <section id="menu">
//     <h2>Menu</h2>
//     <ul></ul>
//   </section>
// `;
