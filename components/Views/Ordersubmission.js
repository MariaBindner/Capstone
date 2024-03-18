import html from "html-literal";

export default () => html`
  <section id="Ordersubmission">
  <form id="order" method="POST" action="">
      <h2>Order a burger</h2>
<div>
  <label for="bread">Bread:</label>
  <select id="bread" name="bread">
    <option value="">Select a Bread</option>
    <option value="regular-burger-bun">Burger Bun</option>
    <option value="no-bread-lettuce-wrap">No Bread Lettuce Wrap</option>
    <option value="skinny-bread">Skinny Bread</option>
  </select>
</div>
<div>
  <label for="cheese">Cheese:</label>
  <select id="cheese" name="cheese">
  <option value="">cheese</option>Cheese</select>
    <option value="american">American</option>
    <option value="cheddar">Cheddar</option>
    <option value="mozzarella">Mozzarella</option>
    </select>
    </div>
    <div>
  <label for="protein">Protein:</label>
  <select id="protein" name="protein">
  <option value="">protein>Select a Protein</select>
    <option value="beef-burger">100% Beef Burger</option>
    <option value="turkey-burger">Turkey Burger</option>
    <option value="fried-egg">Fried Egg</option>
    </select>
  </div>
<div>
  <label for="condiments">Condiments:</label>
  <input
    type="checkbox"
    id="id_of_checkbox1"
    class="items1"
    name="condiments"
    value="Onion"
  />
  <label for="cond1">onion</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="condiments"
          value="crispy onions"
  />
  <label for="cond2">crispy onions</label>
  <input
    type="checkbox"
    id="id_of_checkbox3"
    class="items1"
    name="condiments"
    value="iceberg lettuce"
    />
    <label for="cond3">iceberg lettuce</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="condiments"
          value="spinach"
        />
        <label for="cond4">spinach</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="condiments"
          value="avacado"
        />
        <label for="cond5">avacado</label>
        <input
          type="checkbox"
          id="id_of_checkbox6"
          class="items1"
          name="condiments"
          value="pickles"
        />
        <label for="cond6">pickles</label>
        <input
          type="checkbox"
          id="id_of_checkbox7"
          class="items1"
          name="condiments"
          value="jalapenos"
        />
        <label for="cond7">jalapenos</label>
        <input
          type="checkbox"
          id="id_of_checkbox8"
          class="items1"
          name="condiments"
          value="mustard"
        />
        <label for="cond8">mustard</label>
        <input
          type="checkbox"
          id="id_of_checkbox9"
          class="items1"
          name="condiments"
          value="mayo"
        />
        <label for="cond9">mayo</label>
        <input
          type="checkbox"
          id="id_of_checkbox10"
          class="items1"
          name="condiments"
          value="catsup"
        />
        <label for="cond10">catsup</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="condiments"
          value="bacon bits"
        />
        <label for="cond11">bacon bits</label>

        <div>
        <label for="sprinkles">Sprinkles:</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="sprinkles"
          value="Salt"
        />
        <label for="sprink1">salt</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="sprinkles"
          value="pepper"
        />
        />
        <label for="sprink2">pepper</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="sprinkles"
          value="cayenne"
        />
        <label for="sprink3">cayenne</label>
</div>

<div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name for this order e.g., Mike G or Samantha F
          "
          required
        />
      </div>


<div>
        <label for="allergies">Allergies:</label>
        <input
          type="text"
          name="allergies"
          id="allergies"
          placeholder="Enter Allergies. If none, enter NA"
          required
        />
      </div>
      <div>
        <label for="notes">Notes:</label>
        <input
          type="text"
          name="notes"
          id="notes"
          placeholder="Notes"
          />
      </div>


<input
  type="hidden"
  name="customer"
  id="customer"
  value="Anonymous Customer"
/>
<input type="submit" name="submit" value="Submit Burger" />
</form>
</section>
`;
