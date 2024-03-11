import html from "html-literal";

export default links => html`
  <nav>
    <i class="Order Up"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            html`
              <li>
                <a href="/${link.title}" title="${link.title}" data-navigo
                  >${link.text}</a
                >
              </li>
            `
        )
        .join("")}
    </ul>
  </nav>
`;

// import html from "html-literal";

// export default () => html`
//   <nav>
//       <p>
//         Today I am starting my first html document to help me frame my capstone.
//         There is lot of work left to do, but I enjoy this part a lot. I
//         appreciate how html automatically adds the end tags, unlike JS.
//         Research, decisions, styling and further learning awaits me!
//       </p>
//
//     <a
//       href="https://github.com/savvy-coders/sc-curriculum/blob/master/Section04/Activities/4.1-Activities/4.1.2-Activity/index.md"
//       >HTML4.1.2homework</a
//     >

//     <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
//       >HTMLElementsReference</a
//     >

//     <img
//       src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F270404%2Fpexels-photo-270404.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-270404.jpg%26fm%3Djpg&tbnid=d9cJK7PgU8yf0M&vet=12ahUKEwjbvpa2pq6EAxXptIkEHUB3DhQQMygAegQIARBk..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhtml%2F&docid=P3CySLu60ozlDM&w=5456&h=3064&q=free%20html%20image&ved=2ahUKEwjbvpa2pq6EAxXptIkEHUB3DhQQMygAegQIARBk"
//       alt="Computer Screen with HTMLCoding"
//     />
//     <p />
//     nav class="lists">

//     <h2>To Dos</h2>
//     <ol>
//       <li>homework</li>
//       <li>jira</li>
//       <li>study</li>
//     </ol>

//     <h3>Tasks</h3>
//     <ul>
//       <li>notes</li>
//       <li>links</li>
//       <li>images</li>
//       <li>updates</li>
//     </ul>
//   </nav>
// `;
