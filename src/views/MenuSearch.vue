<template>
  <div id="selectBox" class="item-center">
    <div class="q-px-md" style="margin-top: 100px">
      <h2>Search for what you desire!</h2>
      <div class="q-gutter-md row justify-center" style="margin-top: 40px">
        <q-select
          popup-content-class="scroll overflow-hidden"
          outlined
          v-model="subjects_"
          :options="subject"
          label="Subject"
          hide-dropdown-icon
          style="width: 250px"
        />

        <q-select
          popup-content-class="scroll overflow-hidden"
          outlined
          v-model="levels_"
          :options="level"
          label="Level"
          hide-dropdown-icon
          style="width: 250px"
        />

        <q-select
          popup-content-class="scroll overflow-hidden"
          outlined
          v-model="ratings_"
          :options="rating"
          label="Rating"
          hide-dropdown-icon
          style="width: 250px"
        />

        <q-select
          popup-content-class="scroll overflow-hidden"
          outlined
          v-model="cities_"
          :options="city"
          label="City"
          hide-dropdown-icon
          style="width: 250px"
        />

        <Datepicker 
        placeholder="Select Date Range"
        range
        v-model = 'times_' 
        style="width: 400px; opacity:80%;">
        </Datepicker>

      </div>
    </div>
    <q-btn
      id="buttonSubmit"
      class="item-center"
      color="primary"
      label="Search"
      @click="search"
      size="lg"
    />
  </div>
  <div class="q-pa-md">
    <div class="row col-8 inline">
      <div v-for="offer in offers" :key="offer" class="card" id="box2">
        <img
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <!-- <h5 class="card-title">{{ offer.title }}</h5> -->
          <p class="card-text">{{ offer.subjects[0] }}</p>
          <p class="card-text">{{ offer.dateFrom }}</p>
          <p class="card-text">{{ offer.cities[0] }}</p>
          <p class="card-text">{{ offer.level[0] }}</p>
          <!-- <p class="card-text">{{ offer.user }}</p> -->
          <router-link
            class="nav-link btn btn-primary"
            :to="{ name: 'Offer', params: { offerId: offer._id } }"
            >Button</router-link
          >
        </div>
      </div>
    </div>

    <div class="q-pa-lg flex flex-center" style="padding-top: 20px">
      <q-pagination
        v-model="current"
        color="black"
        :max="10"
        @click="pagination"
        :max-pages="6"
        :boundary-numbers="false"
      />
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
  setup() {
    return {
      subjects_: ref(null),
      levels_: ref(null),
      times_: [ref(null), ref(null)],
      ratings_: ref(null),
      cities_: ref(null),
      current: ref(1),

      subject: [
        { label: "Maths", value: "math" },
        { label: "Physics", value: "physics" },
        { label: "Chemistry", value: "chemistry" },
        { label: "English", value: "english" },
      ],

      level: [
        { label: "Primary School", value: "basic" },
        { label: "Middle School", value: "intermediate" },
        { label: "High School", value: "advanced" },
        { label: "University", value: "advanced" },
      ],

      city: [
        { label: "Wrocław", value: "wroclaw" },
        { label: "Poznań", value: "poznan" },
        { label: "Legnica", value: "legnica" },
      ],

      rating: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
      ],
    };
  },

  data() {
    return {
      dane: [],
      offers: [],
    };
  },

  methods: {
    search() { 
      this.offers = [];
      this.dane = [];

      if (this.times_ == null) {
        this.times_ = [];      
      }
      
      let variables = [
        [this.subjects_, 'subjects='], 
        [this.levels_, 'level='], 
        [this.ratings_, 'ratings='], 
        [this.times_[0], 'dateFrom='],
        [this.times_[1], 'dateTo='],
        [this.cities_, 'cities='], 
        [this.current, 'page=']];

      let link = 'https://panoramx.ift.uni.wroc.pl:8888/v1/posts?';
      let amount = 0;
      
      variables.forEach(function(variable) {
        if (variable[0] != null) {
          if ((variable[1] == 'dateFrom=') || (variable[1] == 'dateTo=')) {
            if (!variable[0].hasOwnProperty('_value')){
              if (variable[0] != null){
                if (amount >= 1) {
                  link = link + '&';
                }
                link = link + variable[1] + variable[0].toJSON();
                console.log(link);
                amount += 1;
              }
            }
          }
          else{
            if (variable[0].value != null){
              if (amount >= 1) {
                link = link + '&';
              }
              link = link + variable[1] + variable[0].value;
              console.log(link);
              amount += 1;
            }
          }
        }
      });

      fetch(`${link}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
          },
        })
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            this.dane.push(data[i]._id);
          }
          for (let i = 0; i < data.length; i++) {
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
                  });
              });
          }
        });
    },


    pagination() {
      this.offers = [];
      this.dane = [];
      fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/posts?page=${this.current-1}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + readCookie("jwt"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            this.dane.push(data[i]._id);
          }
          for (let i = 0; i < data.length; i++) {
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
                  });
              });
          }
        })
        
    },
  },

  mounted() {
    this.offers = [];
    this.dane = [];
    fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + readCookie("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.dane.push(data[i]._id);
        }
        for (let i = 0; i < data.length; i++) {
          fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/post/${this.dane[i]}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + readCookie("jwt"),
            },
          })
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
                });
            });
        }
      })
      
  },
};
</script>


<style>
#buttonSubmit {
  top: 30px;
}

#box2 {
  left: 10px;
  width: 200px;
  height: 375px;
  margin-right: 20px;
}

.boxcard {
  display: flex;
}
</style>
