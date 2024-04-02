import html from "html-literal";

export default () => html`

//Add order placer name, event details and/or menu at the top here

  <section id="Ordersubmission">
  <form id="Ordersubmission" method="POST" action="">
      <h2>Order a burger</h2>
<div>
  <label for="bread">Bread:</label>
  <select id="bread" name="bread">
    <option value="">Bread Selection</option>
    <option value="regular-burger-bun">Burger Bun</option>
    <option value="lettuce-wrap">Lettuce Wrap</option>
    <option value="herb pita">Herb Pita</option>
  </select>
</div>
<div>
  <label for="cheese">Cheese:</label>
  <select id="cheese" name="cheese">
  <option value="">Cheese Selection</option>
    <option value="american">American</option>
    <option value="cheddar">Cheddar</option>
    <option value="mozzarella">Mozzarella</option>
    <option value="shavedParm">Shaved Parmesan</option>
    <option value="provolone">Provolone</option>
    </select>
    </div>
    <div>
  <label for="protein">Protein:</label>
  <select id="protein" name="protein">
  <option value="">Select a Protein</option>
    <option value="beef-burger">100% Angus Beef Burger</option>
    <option value="turkey-burger">Turkey Burger</option>
    <option value="fried-egg">Fried Egg</option>
    </select>
  </div>
<div>
  <label for="customizations">Customizations:</label>
  <input
    type="checkbox"
    id="id_of_checkbox1"
    class="items1"
    name="customizations"
    value="French's crispy fried onions"
  />
  <label for="customizations1">French's crispy fried onions | </label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="customizations"
          value="onion"
  />
  <label for="customizations2">Onion | </label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="customizations"
          value="lettuce"
          />

  <label for="customizations3">Lettuce | </label>
  <input
    type="checkbox"
    id="id_of_checkbox4"
    class="items1"
    name="customizations"
    value="spinach"
    />
    <label for="customizations4">Spinach | </label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="customizations"
          value="avacado"
        />
        <label for="customizations5">Avacado | </label>
        <input
          type="checkbox"
          id="id_of_checkbox6"
          class="items1"
          name="customizations"
          value="pickles"
        />
        <label for="customizations6">Pickles | </label>
        <input
          type="checkbox"
          id="id_of_checkbox7"
          class="items1"
          name="customizations"
          value="jalapenos"
        />
        <label for="customizations7">Jalapenos | </label>
        <input
          type="checkbox"
          id="id_of_checkbox8"
          class="items1"
          name="customizations"
          value="tomato"
          />
        <label for="customizations8">Tomato | </label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="customizations"
          value="mustard"
          />
        <label for="customizations9">Mustard | </label>
        <input
          type="checkbox"
          id="id_of_checkbox9"
          class="items1"
          name="customizations"
          value="mayo"
        />
        <label for="customizations10">Mayonnaise | </label>
        <input
          type="checkbox"
          id="id_of_checkbox10"
          class="items1"
          name="customizations"
          value="catsup"
        />
        <label for="customizations11">Catsup | </label>
        <input
          type="checkbox"
          id="id_of_checkbox11"
          class="items1"
          name="customizations"
          value="baconBits"
        />
        <label for="customizations12">Bacon Bits | </label>
        <input
          type="checkbox"
          id="id_of_checkbox12"
          class="items1"
          name="customizations"
          value="basil"
        />
        <label for="customizations13">Basil | </label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="customizations"
          value="oregano"
        />
        <label for="customizations14">Oregano | </label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="customizations"
          value="oil_and_vinegar"
        />
        <label for="customizations15">Oil & Vinegar | </label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="customizations"
          value="salt"
        />
        <div>
        <label for="customizations16">Salt | </label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="customizations"
          value="pepper"
        />
        <label for="customizations17">Pepper | </label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="sprinkles"
          value="cayenne"
        />
        <label for="18">cayenne</label>
</div>

//may not need the section below if I am able to route the order info into this page
<div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name for this order e.g., Mike G or MG"
          required
        />
      </div>
<div>
        <label for="allergies">Allergies:</label>
        <input
          type="text"
          name="allergies"
          id="allergies"
          placeholder="Enter Allergies. If none, leave blank"
          required
        />
      </div>
      <div>
        <label for="notes">Notes - any comments, requests, questions or anything you want us to know?:</label>
        <input
          type="text"
          name="notes"
          id="notes"
          placeholder="Notes"
          />
      </div>

      <div>
        <label for="customer">Customer</label>
        <input type="text" name="customer" id="customer" />
      </div>
      />

<input type="submit" name="submit" value="Ordersubmission" />
</form>
</section>
`;
