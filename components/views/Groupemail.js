import html from "html-literal";

export default () => html`

//add summary of event details in here

  <section id="Groupemail">
    <form id="email" method="POST" action="">
            <h4>Enter participant details

            </h4>

        <div>
       //<label for="excludeMe">Check if not participating:</label>
        <input
          type="checkbox"
          name="excludeMe"
          id="excludeMe"
          placeholder="excludeMe"
          />
      </div>

      //nn to add code to submit and move to next if not participating
        <div>
        <label for="Name">First Name, Full Name Initials or Alias:</label>
        <input
          type="text"
          name="Name"
          id="Name"
          placeholder="Name"
          required
        />
      </div>

      <div>
        <label for="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>

      <div>
        <label for="costCenter">Cost Center or Department:</label>
        <input
          type="text"
          name="costCenter"
          id="costCenter"
          placeholder="Cost Center"
          optional
        />


      // need to add a loop to keep on adding email names
      <input type="submit" name="submit" value="Send Email to All Participants" />

  </section>
`;
