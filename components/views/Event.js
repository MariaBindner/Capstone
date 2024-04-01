import html from "html-literal";

export default () => html`
  <section id="event">
      <form id="event" method="POST" action="">
      <h2>Event Details</h2>
            <div>
        <label for="event">Event:</label>
        <input
          type="text"
          name="event"
E         id="event"
E         placeholder="Event Name and Details"
E         required
        />
      </div>

      <div>
        <label for="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Enter Date of Event"
          required
        />
      </div>

      <div>
        <label for="time"> Event Time:</label>
        <input
          type="time"
          name="time"
          id="time"
          placeholder="Enter Time of Event"
          required
        />
      </div>

      <div>
        <label for="orderDue">Order Due:</label>
        <input
          type="date"
          name="orderDue"
          id="orderDue"
          placeholder="Enter Order Due Date"
          required
        />
      </div>
      <div>
        <label for="orderDue">Order Due Time:</label Due time>
        <input
          type="time"
          name="orderdue"
          id="orderdue"
          placeholder="Enter Order Due Time"
          required
        />
      </div>
      <div>
        <label for="notes">Notes including drop off details:</label>
        <input
          type="text"
          name="notes"
          id="notes"
          placeholder="Enter Notes for Event"
          required
        />
      </div>
      <div>
      <label for="includeExtras">Check to Include Napkins, Plates, Utensils for Entire Order</label>
        <input
          type="checkbox"
          name="includeExtras"
          id="includeExtras"
          placeholder="includeExtras"
          optional
          />
      </div>
      <div>
        <label for="customer">Customer / Order Placer</label>
        <input type="text" name="customer" id="customer" />
      </div>
      <input type="submit" name="submit" value="Submit Event Details and Go To 'Group Email'" />

    //<input type="save" name="save" value="Submit Event Details and Place Order" />

          </form>
  </section>
`;
