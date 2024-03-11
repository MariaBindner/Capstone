import html from "html-literal";

export default () => html`
  <section id="Groupemail">
    <form id="email" method="POST" action="">
      <h2>Group Email</h2>
        <div>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
        />
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          name="LastName"
          id="LastName"
          placeholder="Last Name"
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
          required
        />
      </div>
      <div>
        <label for="optiontoExclude">Note if not participating:</label>
        <input
          type="text"
          name="optiontoExclude"
          id="optiontoExclude"
          placeholder="optiontoExclude"
          required
        />
      </div>

    <header>
      <h1>Group Email</h1>
    </header>
    <p>WIP - Group Email</p>
  </section>
`;
