import html from "html-literal";

export default () => html`
  <section id="event">
      <form id="event" method="POST" action="">
      <h2>Event Details</h2>
        <div>
        <label for="date">Date:</label>
        <input
          type="text"
          name="date"
          id="date"
          placeholder="Enter Date of Event"
          required
        />
      </div>
      <div>
        <label for="event">Event:<Event>
        <input
          type="text"
          name="event"
E         id="event"
E         placeholder="Enter Event Name"
E         required
        />
      </div>

      <div>
        <label for="orderdue">orderdue:</label>
        <input
          type="text"
          name="orderdue"
          id="orderdue"
          placeholder="Enter Order Due Date"
          required
        />
      </div>

      <div>
        <label for="notes">Notes:</label>
        <input
          type="text"
          name="notes"
          id="notes"
          placeholder="Enter Notes for Event"
          required
        />
      </div>

      />
      <input type="save" name="save" value="Save Order" />
    </form>
  </section>
`;
