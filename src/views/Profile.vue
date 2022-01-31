<template>
  <div class="container">
    <div class="main-body">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card bg-dark">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="text-white mt-3">
                  <h4>{{ name }}</h4>
                  <p class="text-white mb-1">Pełno prawny korepetytor</p>
                  <p class="text-white font-size-sm"> {{ cities }}</p>
                  <button class="btn btn-primary">Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="text-white card mb-3 bg-dark">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Name</h6>
                </div>
                <div v-if="!edit" class="col-sm-9">
                  {{ name }}
                </div>
                <div v-if="edit" class="col-sm-9">
                  <form>
                    <input type="text" v-model="this.name" placeholder="Name">
                  </form>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Surname</h6>
                </div>
                <div v-if="!edit" class="col-sm-9">
                  {{ surname }}
                </div>
                <div v-if="edit" class="col-sm-9">
                  <form>
                    <input type="text" v-model="this.surname" placeholder="Surname">
                  </form>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9">
                  {{ email }}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Phone</h6>
                </div>
                <div v-if="!edit" class="col-sm-9">
                  {{ phone }}
                </div>
                <div v-if="edit" class="col-sm-9">
                  <form>
                    <input type="text" v-model="this.phone" placeholder="Phone number">
                  </form>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Birthday</h6>
                </div>
                <div v-if="!edit" class="col-sm-9">
                  {{ age }}
                </div>
                <div v-if="edit" class="col-sm-9" style="padding-left: 182px;">
                  <Datepicker 
                    placeholder="Your birthday"
                    v-model = 'age' 
                    style="width: 200px; opacity:80%;">
                  </Datepicker>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div v-if="!edit" class="col-sm-9">
                  {{ cities }}
                </div>
                <div v-if="edit" class="col-sm-9">
                  <form>
                    <input type="text" v-model="this.cities" placeholder="City">
                  </form>
                </div>
              </div>
              <hr v-if="edit"  />
              <div v-if="edit" class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Password</h6>
                </div>
                <div class="col-sm-9">
                  <form>
                    <input type="password" v-model="this.password" placeholder="Please enter new password">
                  </form>
                </div>
              </div>
              <hr />
              <div v-if="owner" class="row">
                <div class="col-sm-12">
                  <button v-if="!edit" class="btn btn-primary" @click="edit_click" >
                    Edit
                  </button>
                  <button v-if="edit" class="btn btn-primary" @click="save_click" >
                    Save
                  </button>
                  <button v-if="edit" class="btn btn-primary" @click="cancel_click" >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <q-btn 
    class="btn btn-primary" 
    @click="my_offers"
    label="My offers"
    color="dark"
    size="lg"
    style="margin-top: 80px; right: 20px;"
  />

  <q-btn 
    class="btn btn-primary" 
    @click="reserved_offers"
    label="Reserved"
    color="dark"
    size="lg"
    style="margin-top: 80px; left: 20px;"
  />

  <div class="q-pa-md">
    <div class="row col-8 inline">
      <div v-for="offer in offers" :key="offer" class="card mb-10 pt-1 bg-dark text-white " id="box2">
        <div class="card-body">
          <h5 class="card-title text-orange" style="line-height: 1.5em; height: 3em; overflow: hidden;"  >{{ offer.title }}</h5>
          <p class="card-text">{{ offer.subjects[0] }}</p>
          <p class="card-text">{{ "Date: " + offer.dateFrom.slice(0, 10) + "; " + offer.dateFrom.slice(11, 16) }}</p>
          <p class="card-text">{{ "Duration - "  + (new Date(offer.dateTo).getTime() - new Date(offer.dateFrom).getTime() )/ 60000 + "min" }}</p>
          <p class="card-text">{{ offer.cities[0] }}</p>
          <p class="card-text">{{ "Price - " + offer.price + " zł"}}</p>


          <!-- <p class="card-text">{{ offer.level[0] }}</p> -->
          <!-- <p class="card-text">{{ offer.user }}</p> -->
          <router-link
            class="nav-link btn btn-primary bg-black text-orange"
            :to="{ name: 'Offer', params: { offerId: offer._id } }"
            >Details</router-link
          >
        </div>
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

import { ref } from "vue";

export default {
  props: ["accountId"],

  setup() {
    return {
      max_pages: ref(null),
      subjects_: ref(null),
      levels_: ref(null),
      times_: [ref(null), ref(null)],
      ratings_: ref(null),
      cities_: ref(null),
      current: ref(1),
    };
  },

  data() {
    return {
      name: "",
      surname: "",
      email: "",
      age: "",
      phone: "",
      cities: "",
      password: "",

      edit: false,
      owner: false,
      loggedId: "",

      name_old: "",
      surname_old: "",
      email_old: "",
      age_old: "",
      phone_old: "",
      cities_old: "",

      dane: [],
      offers: [],
      pageInfo: [],
    };
  },

  mounted() {
    
    fetch(
      `https://panoramx.ift.uni.wroc.pl:8888/v1/account/${this.accountId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + readCookie("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.name = data.firstName;
        this.surname = data.lastName;
        this.email = data.email;
        this.age = data.birthday.slice(0, 10);
        this.cities = data.cities;
        this.phone = data.phoneNumber;

        this.name_old = data.firstName;
        this.surname_old = data.lastName;
        this.email_old = data.email;
        this.age_old = data.birthday.slice(0, 10);
        this.cities_old = data.cities;
        this.phone_old = data.phone;
      });

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

        if (this.loggedId == this.accountId) {
          this.owner = true;
        }
      });

    this.offers = [];
    this.dane = [];
    this.pageInfo = [];
    fetch(
      `https://panoramx.ift.uni.wroc.pl:8888/v1/posts?ownerId=${this.accountId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + readCookie("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.posts.length; i++) {
          this.dane.push(data.posts[i]._id);
        }
        this.pageInfo = data.pageInfo;
        for (let i = 0; i < data.posts.length; i++) {
          fetch(
            `https://panoramx.ift.uni.wroc.pl:8888/v1/post/${this.dane[i]}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + readCookie("jwt"),
              },
            }
          )
            .then((res) => res.json())
            .then((offer) => {
              this.offers.push(offer);
              fetch(
                `https://panoramx.ift.uni.wroc.pl:8888/v1/account/${offer.ownerId}`,
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
                  this.offers[i].user = user.firstName;
                  this.max_pages = this.pageInfo.lastPage + 1;
                });
            });
        }
      });
  },

  methods: {
    edit_click() {
      this.edit = !this.edit;
    },

    my_offers() {
      this.offers = [];
      this.dane = [];
      this.pageInfo = [];
      console.log(this.$globalVariable);

      fetch(
        `https://panoramx.ift.uni.wroc.pl:8888/v1/posts?ownerId=${this.accountId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.posts.length; i++) {
            this.dane.push(data.posts[i]._id);
          }
          this.pageInfo = data.pageInfo;
          for (let i = 0; i < data.posts.length; i++) {
            fetch(
              `https://panoramx.ift.uni.wroc.pl:8888/v1/post/${this.dane[i]}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + readCookie("jwt"),
                },
              }
            )
              .then((res) => res.json())
              .then((offer) => {
                this.offers.push(offer);
                fetch(
                  `https://panoramx.ift.uni.wroc.pl:8888/v1/account/${offer.ownerId}`,
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
                    this.offers[i].user = user.firstName;
                    this.max_pages = this.pageInfo.lastPage + 1;
                  });
              });
          }
        });
    },

    reserved_offers() {
      this.offers = [];
      this.dane = [];
      this.pageInfo = [];
      fetch(
        `https://panoramx.ift.uni.wroc.pl:8888/v1/posts?interestedIn=${this.accountId}&interestedInBool=1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.posts.length; i++) {
            this.dane.push(data.posts[i]._id);
          }
          this.pageInfo = data.pageInfo;
          for (let i = 0; i < data.posts.length; i++) {
            fetch(
              `https://panoramx.ift.uni.wroc.pl:8888/v1/post/${this.dane[i]}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + readCookie("jwt"),
                },
              }
            )
              .then((res) => res.json())
              .then((offer) => {
                this.offers.push(offer);
                fetch(
                  `https://panoramx.ift.uni.wroc.pl:8888/v1/account/${offer.ownerId}`,
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
                    this.offers[i].user = user.firstName;
                    this.max_pages = this.pageInfo.lastPage + 1;
                  });
              });
          }
        });
    },

    save_click() {
      let editData = {
        password: this.password,
        email: this.email,
        firstName: this.name,
        lastName: this.surname,
        address: this.cities,
        // about: this.about,
        phoneNumber: this.phone,
        birthday: this.age,
      };

      console.log(this.password);

      if (editData.password == "") {
        delete editData.password;
      }

      console.log(this.password);

      fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + readCookie("jwt"),
        },
        body: JSON.stringify(editData),
      }).then((response) => {
        if (response.status == 400) {
          this.cancel_click();
          alert("Enter valid data");
        }
        if (response.status == 401) {
          this.cancel_click();
          alert("Unauthorized 401");
        }
        if (response.status == 200) {
          console.log("sukces");
        }
      });

      this.age = JSON.stringify(this.age).slice(1, 11);

      this.edit = !this.edit;
    },

    cancel_click() {
      this.name = this.name_old;
      this.surname = this.surname_old;
      this.email = this.email_old;
      this.age = this.age_old;
      this.cities = this.cities_old;
      this.phone = this.phone_old;

      this.edit = !this.edit;
    },
  },
};
</script>

<style>
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  top: 70px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

#box2 {
  left: 10px;
  width: 200px;
  height: 330px;
  margin-right: 20px;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>