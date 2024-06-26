import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Ordersubmission") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      // console.log("Input Element List", inputList);
      // Create an empty array to hold the toppings
      const customizations = [];

      // // Iterate over the toppings array
      for (let input of inputList.customizations) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (input.checked) {
          customizations.push(input.value);
        }
      }

      // Create a request body object to send to the API
      const requestData = {
        customer: inputList.customer.value,
        bread: inputList.bread.value,
        cheese: inputList.cheese.value,
        protein: inputList.protein.value,
        customizations: customizations,
        name: inputList.name.value,
        allergies: inputList.allergies.value,
        notes: inputList.notes.value
      };
      // // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        //     .post(`${process.env.ORDER_UP_API_URL}/Ordersubmission?${column}=${filter}`)
        //  .then(response => {
        .post(`${process.env.ORDER_UP_API_URL}/ordersubmission`, requestData)
        .then(response => {
          //  Then push the new Ordersubmission onto the Ordersubmission state ordersubmission attribute, so it can be displayed in the Ordersubmission list
          store.Ordersubmission.order = response.data;
          router.navigate("/Ordersubmission");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("Uh Oh!", error);
        });
    });
  }

  if (state.view === "History") {
    // document
    //   // .getElementById("search-button")
    //   .addEventListener("click", event => {
    //     event.preventDefault();

    //     const column = document.getElementById("column").value;
    //     const filter = document.getElementById("filter").value;

    //     axios
    //       .get(
    //         `${process.env.ORDER_UP_API_URL}/Ordersubmission?${column}=${filter}`
    //       )
    //       // or .get(`${process.envORDER_UP_API_URL}/Ordersubmissions?${column}=${filter}`)

    //       .then(response => {
    //         // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
    //         store.History.ordersubmissions = response.data;
    //         router.navigate("/History");
    //       })
    //       .catch(error => {
    //         console.log("Uh oh!", error);
    //       });
    //   });

    Array.from(document.getElementsByClassName("delete")).forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();

        const OrdersubmissionId = event.target.dataset.id;
        const OrdersubmissionIndex = event.target.dataset.index;

        if (
          confirm(
            `Are you sure you want to delete Ordersubmission ${OrdersubmissionId}?`
          )
        ) {
          axios
            .delete(
              `${process.env.ORDER_UP_API_URL}/Ordersubmission/${OrdersubmissionId}`
            )
            .then(response => {
              // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
              store.Ordersubmission.ordersubmissions.splice(
                OrdersubmissionIndex,
                1
              );
              router.navigate("/Ordersubmission");
            })
            .catch(error => {
              console.log("Uh oh!", error);
            });
        }
      });
    });
  }
}

router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    // const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }

    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API

      case "Ordersubmission":
        //   //above is referring to referencing view called ordersubmission
        //   // New Axios get request utilizing already made environment variable

        axios
          .get(`${process.env.ORDER_UP_API_URL}/ordersubmission`)
          .then(response => {
            //       // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            console.log("response data", response.data);

            store.Ordersubmission.order = response.data;

            done();
          })
          .catch(error => {
            console.log("Uh oh!", error);
            done();
          });
        break;
      case "Holidays":
        axios
          .get(
            `https://calendarific.com/api/v2/holidays?api_key=${process.env.CALENDERIFIC_API_KEY}&country=us&cn&gb&mx&year=2024&type=national`
          )
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response data", response.data);

            store.Holidays.holidays = response.data.response.holidays;

            done();
          })
          .catch(error => {
            console.log("Uh oh!", error);
            done();
          });
        break;
      //case "Menu":
      // Do stuff here
      // done();
      // break;
      default:
        done();
        break;
    }
  },

  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);

      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
