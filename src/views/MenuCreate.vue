<template>
  <div id="selectBox" class="item-center">
    <div class="q-px-md text-white">
      <h2>Create your notice!</h2>
      <div class="q-gutter-md row justify-center" style="margin-top: 40px">
        <q-select
          color = "white"
          bg-color = "grey-10"
          
          
          filled
          v-model="subjects_"
          :options="subject"
          label="Subject"
          hide-dropdown-icon
          dark
          :rules="[myRule]"
          style="width: 250px; overflow-x :hidden"
        />

        <q-select
          color = "white"
          bg-color = "grey-10"
          popup-content-class="scroll overflow-hidden"
          filled
          v-model="levels_"
          :options="level"
          label="Level"
          hide-dropdown-icon
          dark
          :rules="[myRule]"
          style="width: 250px"
        />

        <q-select
          color = "white"
          bg-color = "grey-10"
          
          filled
          v-model="cities_"
          :options="city"
          label="City"
          hide-dropdown-icon
          dark
          :rules="[myRule]"
          style="width: 250px"
        />

        
        

        <Datepicker 
        placeholder="Select Date"
        dark
        v-model = 'times_' 
        style="width: 300px; opacity:80%;">
        </Datepicker>

        <q-select
          filled
          popup-content-class="scroll overflow-hidden"
          color = "white"
          bg-color = "grey-10"
          v-model="duration_"
          :options="duration"
          label="Duration"
          
          hide-dropdown-icon
          dark
          :rules="[myRule]"
          style="width: 250px"
        />

        
      </div>
      <div
        class="q-gutter-md row justify-center"
        style="margin-top: 40px; margin-bottom: 40px"
      >

        <q-input
          filled
          color = "white"
          bg-color = "grey-10"
          v-model.number="price_"
          mask="#########"
          suffix="zł"
          type="number"
          dark
          autogrow
          label="Price"
          style="width: 250px;"
        />

        <q-input
          filled
          color = "white"
          bg-color = "grey-10"
          class="inputField"
          
          v-model="title_"
          dark
          autogrow
          label="Title"
          style="width: 500px;"
        />

        <q-input
          filled
          color = "white"
          bg-color = "grey-10"
          class="inputField"
          
          v-model="text_"
          dark
          autogrow
          label="Describe your notice"
          style="width: 500px;"
        />
      </div>
    </div>
    

    <q-btn
      @click="submit"
      id="buttonSubmit"
      class="item-center"
      color="primary"
      label="Create"
      size="lg"
    >
 
    </q-btn>
    
  </div>
  <!-- <router-link class="nav-link btn btn-primary" @click="submit" :to="{ name: 'Offer', params: { offerId: this.dane } }">Button</router-link> -->

  
</template>


<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import { ref } from "vue";


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
  components: { Datepicker },



  setup() {
    return {
      subjects_: ref(null),
      levels_: ref(null),
      times_: new Date(),
      cities_: ref(null),
      text_: ref(null),
      duration_: ref(null),
      price_: ref(null),
      title_: ref(null),

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

  methods: {
    myRule(val) {
      if (val == null) {
        alert("You must make a selection");
      }
    },

    submit() {
      console.log(   new Date(parseInt(this.times_.getTime()) + parseInt(this.duration_.value) ) );
      if (
        this.subjects_ == null ||
        this.levels_ == null ||
        this.times_ == null ||
        this.cities_ == null ||
        this.text_ == null ||
        this.duration_ == null ||
        this.price_ == null ||
        this.title_ == null
      ) {
        alert("Please make a selection in every field");
      } else {
        let data = {
          subjects: this.subjects_.value,
          level: this.levels_.value,
          description: this.text_,
          price: this.price_,
          dateFrom: this.times_.toJSON(),
          dateTo: new Date(parseInt(this.times_.getTime()) + parseInt(this.duration_.value) ),
          cities: this.cities_.value,
          title: this.title_,
        };

        fetch("https://panoramx.ift.uni.wroc.pl:8888/v1/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
          },
          body: JSON.stringify(data),
        })
         .then((response) => {
           if (response.status == 400) {
             alert("Try again");
             return;
           }
           if (response.status == 200)  {
             response.json().then((data123) => {
               this.$router.push({name: 'Offer', params: { offerId: data123 }});
             });

           }
         });
         
        
      }
    },
  },
};
</script>


<style>
#selectBox {
  margin-top: 100px;
}


</style>
