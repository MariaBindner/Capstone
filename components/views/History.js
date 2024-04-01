import html from "html-literal";

export default state => html`
  <section id="Ordersubmission">
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
        <option value="customer">Customer</option>
      </select>
      <input type="search" name="filter" id="filter" />
      <button id="search-button">Search</button>
    </div>
    <table id="Ordersubmissions">
      <tr>
        <th>Crust</th>
        <th>Cheese</th>
        <th>Sauce</th>
        <th>Toppings</th>
        <th>Customer</th>
        <th>Actions</th>
      </tr>
      ${state.Ordersubmissions.map((Ordersubmission, index) => {
        return html`
          <tr id="${Ordersubmission._id}">
            <td>${Ordersubmission.bread}</td>
            <td>${Ordersubmission.cheese}</td>
            <td>${Ordersubmission.protein}</td>
            <td>${Ordersubmission.condiments}</td>
            <td>${Ordersubmission.sprinkles}</td>
            <td>${Ordersubmission.allergies}</td>
            <td>${Ordersubmission.notes}</td>
            //
            <td>${Ordersubmission.toppings.join(" & ")}</td>
            <td>${Ordersubmission.name}</td>
            <td>
              <button
                class="delete"
                data-id="${Ordersubmission._id}"
                data-index="${index}"
              >
                Delete
              </button>
            </td>
          </tr>
        `;
      }).join("")}
    </table>
  </section>
`;
