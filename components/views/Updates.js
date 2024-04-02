import html from "html-literal";

export default state => html`
  <section id="Updates">
    <div class="filter">
      <select name="column" id="column">
        <option value="">Select a column</option>
        <option value="bread">Bread</option>
        <option value="cheese">Cheese</option>
        <option value="protein">Protein</option>
        <option value="customizations">Customizations</option>
        <option value="name">Name</option>
        <option value="allergies">Allergies</option>
        <option value="notes">Notes</option>
      </select>
      <input type="search" name="filter" id="filter" />
      <button id="search-button">Search</button>
    </div>
    <table id="updates">
      <tr>
        <th>Bread</th>
        <th>Cheese</th>
        <th>Protein</th>
        <th>Customizations</th>
        <th>Name</th>
        <th>Allergies</th
        <th>Notes</th
        <th>Actions</th
      </tr>
      ${state.updates
        .map((updates, index) => {
          return html`
            <tr id="${updates._id}">
              <td>${updates.bread}</td>
              <td>${updates.cheese}</td>
              <td>${updates.protein}</td>
              <td>${updates.customizations.join(" & ")}</td>
              <td>${updates.name}</td>
              <td>${updates.allergies}</td>
              <td>${updates.notes}</td>
              <td>
                <button
                  class="delete"
                  data-id="${updates._id}"
                  data-index="${index}"
                >
                  Delete
                </button>
              </td>
            </tr>
          `;
        })
        .join("")}
    </table>
  </section>
`;
