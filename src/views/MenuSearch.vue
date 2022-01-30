<template>
  <div id="selectBox" class="item-center text-white">
    <div class="q-px-md" style="margin-top: 100px">
      <h2>Search for what you desire!</h2>
      <div class="q-gutter-md row justify-center" style="margin-top: 40px">
        <q-select
          
          filled
          color = "white"
          bg-color = "grey-10"
          v-model="subjects_"
          :options="subject"
          label="Subject"
          label-color="white"
          dark
          hide-dropdown-icon
          style="width: 250px"
        />

        <q-select
          popup-content-class="scroll overflow-hidden"
          filled
          color = "white"
          bg-color = "grey-10"
          v-model="levels_"
          :options="level"
          label="Level"
          label-color="white"
          dark
          hide-dropdown-icon
          style="width: 250px;"
        />

        <q-input
          popup-content-class="scroll overflow-hidden"
          filled
          color = "white"
          bg-color = "grey-10"
          v-model="ratings_"
          :options="rating"
          label="Max price"
          
          label-color="white"
          dark
          hide-dropdown-icon
          style="width: 250px"
        />

        <q-select
          
          filled
          color = "white"
          bg-color = "grey-10"
          v-model="cities_"
          :options="city"
          label="City"
          label-color="white"
          dark
          hide-dropdown-icon
          style="width: 250px"
        />

        <Datepicker 
        placeholder="Select Date Range"
        range
        dark
        v-model = 'times_' 
        style="width: 400px; opacity:80%;">
        </Datepicker>

      </div>
    </div>
    <q-btn
      id="buttonSubmit"
      class="item-center"
      color="black"
      text-color="orange"
      label="Search"
      @click="search"
      size="lg"
    />
  </div>
  <div class="q-pa-md">
    <div class="row col-8 inline">
      <div v-for="offer in offers" :key="offer" class="card mb-3 pt-1 bg-dark text-white" id="box2">
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
 
    <div class="q-pa-lg flex  row flex-center" style="margin-top:40px">
      <q-pagination
        v-model="current"
        color="white"
        text-color="black"
        :max="max_pages"
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
      max_pages : ref(null),
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
        { label: "Biology", value: "biology" },
        { label: "Geography", value: "geography" },
        { label: "Art", value: "art" },
        { label: "Computer science", value: "computer science" },
        { label: "Polish", value: "polish" },
        { label: "German", value: "german" },
        { label: "Spanish", value: "spanish" },
        { label: "Japanese", value: "japanese" },
        { label: "French", value: "french" },
        { label: "Russian", value: "russian" },
        { label: "History", value: "history" },
      ],

      level: [
        { label: "Primary School", value: "primary school" },
        { label: "Middle School", value: "middle school" },
        { label: "High School", value: "high school" },
        { label: "University", value: "university" },
      ],

      city: [
        { label: "Wrocław", value: "Wrocław" },
        { label: "Poznań", value: "Poznań" },
        { label: "Warszawa", value: "Warszawa" },
        { label: "Kraków", value: "Kraków" },
        { label: "Łódź", value: "Łódź" },
        { label: "Gdańsk", value: "Gdańsk" },
        { label: "Szczecin", value: "Szczecin" },
        { label: "Bydgoszcz", value: "Bydgoszcz" },
        { label: "Lublin", value: "Lublin" },
        { label: "Białystok", value: "Białystok" },
        { label: "Katowice", value: "Katowice" },
        { label: "Gdynia", value: "Gdynia" },
        { label: "Częstochowa", value: "Częstochowa" },
      ],

      duration: [
        { label: "30 min", value: "1800000" },
        { label: "45 min", value: "2700000" },
        { label: "60 min", value: "3600000" },
        { label: "120 min", value: "7200000" },
      ],

    };
  },

  data() {
    return {
      dane: [],
      offers: [],
      pageInfo:[],
    };
  },

  methods: {
    search() { 
      this.offers = [];
      this.dane = [];
      this.pageInfo = [];
      

      if (this.times_ == null) {
        this.times_ = [];      
      }
      
      let variables = [
        [this.subjects_, 'subjects='], 
        [this.levels_, 'level='], 
        [parseInt(this.ratings_), 'price='], 
        [this.times_[0], 'dateFrom='],
        [this.times_[1], 'dateTo='],
        [this.cities_, 'cities='], 
        [this.current, 'page=']];

      let link = 'https://panoramx.ift.uni.wroc.pl:8888/v1/posts?';
      let amount = 0;
      
      variables.forEach(function(variable) {
        console.log(variable[0]);
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
          else if ( (variable[1] == "price=") && (variable[0] != null)){
          
              if (amount >= 1) {
                link = link + '&';
              }
              

              link = link + variable[1] + variable[0];
              console.log(link);
              amount += 1;
            
          }else{
            if (variable[0].value != null){
              if (amount >= 1) {
                link = link + '&';
              }
              console.log(variable[0]);

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
                    console.log(this.offers)
                    
                  });
              });
          }
        });
    },


    pagination() {
      this.offers = [];
      this.dane = [];
      this.pageInfo =[];


      fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/posts?currentPage=${this.current-1}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + readCookie("jwt"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.posts.length; i++) {
            this.dane.push(data.posts[i]._id);
          }
          this.pageInfo = data.pageInfo;
          console.log(data.pageInfo)

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
        })
        
    },
  },

  mounted() {
    this.offers = [];
    this.dane = [];
    this.pageInfo =[];
    fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + readCookie("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.posts.length; i++) {
          this.dane.push(data.posts[i]._id);
        }
        this.pageInfo = data.pageInfo;
        console.log(data.pageInfo)
        for (let i = 0; i < data.posts.length; i++) {
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
                  this.max_pages = this.pageInfo.lastPage + 1;
                  
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
  height: 330px;
  margin-right: 20px;
}


</style>
