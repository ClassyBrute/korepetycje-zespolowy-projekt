<template>
  <div class="center">
    <div class="property-card">
      <a href="#">
        <div class="property-image">
          <div class="property-image-title">
            <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. -->
          </div>
        </div></a
      >
      <div class="property-description">
        <h5 v-if="!showEdit">{{ this.offer[0].subjects[0] }}</h5>

        <div v-if="showEdit">
          <form>
            <input type="text" v-model="this.offer[0].subjects[0]" />
          </form>
        </div>

        <p v-if="!showEdit">{{ this.offer[0].title }}</p>

        <div v-if="showEdit">
          <form>
            <input type="text" v-model="this.offer[0].title" />
          </form>
        </div>

        <p v-if="!showEdit">{{ this.offer[0].level[0] }}</p>

        <div v-if="showEdit">
          <form>
            <input type="text" v-model="this.offer[0].level[0]" />
          </form>
        </div>

        <p v-if="!showEdit">{{ this.offer[0].cities[0] }}</p>

        <div v-if="showEdit">
          <form>
            <input type="text" v-model="this.offer[0].cities[0]" />
          </form>
        </div>

        <p v-if="!showEdit">{{ this.offer[0].dateFrom }}</p>

        <div v-if="showEdit">
          <form>
            <input type="text" v-model="this.offer[0].dateFrom" />
          </form>
        </div>

        <p v-if="!showEdit">{{ this.offer[0].dateTo }}</p>

        <div v-if="showEdit">
          <form>
            <input type="text" v-model="this.offer[0].dateTo" />
          </form>
        </div>

        <p>{{ this.offer.user }}</p>

        <button
          id="buttonID"
          @click="startEdit"
          v-if="checkLogged"
          class="btn btn-primary"
        >
          Edit
        </button>

        <button @click="saveEdit" v-if="showEdit" class="btn btn-primary">
          Save
        </button>
        <button @click="cancel" v-if="showEdit" class="btn btn-primary">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>


<script>
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default {
  props: ["offerId"],

  setup() {
    return {};
  },

  data() {
    return {
      showEdit: false,
      checkLogged: false,
      offer: [],
      offer_Id: this.offerId,
      loggedId: "",
    };
  },

  created() {
    fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/post/${this.offer_Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + readCookie("jwt"),
      },
    })
      .then((res) => res.json())
      .then((offers) => {
        this.offer.push(offers);

        fetch(
          `https://panoramx.ift.uni.wroc.pl:8888/v1/account/${offers.ownerId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + readCookie("jwt"),
            },
          }
        )
          .then((res) => res.json())
          .then((user) => {
            this.offer.user = user.firstName;
          });
      });

    //zapisywanie id zalogowanego id
    fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + readCookie("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.loggedId = data._id;
      });
  },

  beforeUpdate() {
    if (this.loggedId == this.offer[0].ownerId) {
      this.checkLogged = true;
    }
  },

  methods: {
    startEdit() {
      this.showEdit = !this.showEdit;
      let myClock = document.getElementById("buttonID");
      myClock.style.display = "none";
    },

    saveEdit() {
      this.showEdit = !this.showEdit;

      let editData = {
        subjects: this.offer[0].subjects[0],
        level: this.offer[0].level[0],
        // dateFrom: this.offer[0].dateFrom.toJSON(),
        // dateTo: this.offer[0].dateTo.toJSON() ,
        cities: this.offer[0].cities[0],
        title: this.offer[0].title,
      };

      fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/post/${this.offer_Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + readCookie("jwt"),
        },
        body: JSON.stringify(editData),
      }).then((response) => {
        if (response.status == 400) {
          alert("Try again");
          return;
        }
        if (response.status == 200) {
          console.log("sukces");
        }
      });
    },
// dorobić zamienianie na stare wartości :)
    cancel() {
      this.showEdit = !this.showEdit;
      let myClock = document.getElementById("buttonID");
      myClock.style.display = "inline";
    },
  },
};
</script>


<style>
body {
  background-color: #f2f2f2;
  font-family: "RobotoDraft", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h5 {
  margin: 0px;
  font-size: 1.4em;
  font-weight: 700;
}

p {
  font-size: 12px;
}

.center {
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* End Non-Essential  */

.property-card {
  height: 39em;
  width: 55em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow: 15px 15px 27px #34495e, -15px -15px 27px #34495e;
}

.property-image {
  height: 15em;
  width: 55em;
  padding: 1em 2em;
  position: Absolute;
  top: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-image: url("https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.property-description {
  background-color: #fafafc;
  height: 24em;
  width: 55em;
  position: absolute;
  bottom: 0em;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align: center;
}
</style>
