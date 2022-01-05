<template>
  <div id="selectBox" class="item-center">
    <div class="q-px-md">
      <h2>Create your notice!</h2>
      <div class="q-gutter-md row justify-center" style="margin-top: 40px">
        <q-select
          popup-content-class="scroll 
          overflow-hidden"
          outlined
          v-model="subjects_"
          :options="subject"
          label="Subject"
          hide-dropdown-icon
          :rules="[myRule]"
          style="width: 250px"
        />

        <q-select
          popup-content-class="scroll overflow-hidden"
          outlined
          v-model="levels_"
          :options="level"
          label="Level"
          hide-dropdown-icon
          :rules="[myRule]"
          style="width: 250px"
        />

        <Datepicker 
        placeholder="Select Date Range"
        range
        v-model = 'times_' 
        style="width: 400px; opacity:80%;">
        </Datepicker>

        <q-select
          popup-content-class="scroll overflow-hidden"
          outlined
          v-model="cities_"
          :options="city"
          label="City"
          hide-dropdown-icon
          :rules="[myRule]"
          style="width: 250px"
        />
      </div>
      <div
        class="q-gutter-md row justify-center"
        style="margin-top: 40px; margin-bottom: 40px"
      >
        <q-input
          class="inputField"
          outlined
          v-model="text_"
          autogrow
          label="Describe your notice"
          style="width: 500px"
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
    />
  </div>
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

      subject: [
        { label: "Maths", value: "math" },
        { label: "Physics", value: "physics" },
        { label: "Chemistry", value: "chemistry" },
        { label: "English", value: "english" },
      ],

      level: [
        { label: "Primary School", value: "basic" },
        { label: "Middle School", value: "intermidiate" },
        { label: "High School", value: "advanced" },
        { label: "University", value: "advanced" },
      ],

      city: [
        { label: "Wrocław", value: "wroclaw" },
        { label: "Poznań", value: "poznan" },
        { label: "Legnica", value: "legnica" },
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
      if (
        this.subjects_ == null ||
        this.levels_ == null ||
        this.times_ == null ||
        this.cities_ == null ||
        this.text_ == null
      ) {
        alert("Please make a selection in every field");
      } else {
        let data = {
          subjects: this.subjects_.value,
          level: this.levels_.value,
          dateFrom: this.times_[0].toJSON(),
          dateTo: this.times_[1].toJSON(),
          cities: this.cities_.value,
          title: this.text_,
        };

        fetch("https://panoramx.ift.uni.wroc.pl:8888/v1/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
          },
          body: JSON.stringify(data),
        }).then((response) => {
          if (response.status == 400) {
            alert("Try again");
            return;
          }
          if (response.status == 200) {
            // response.json().then((data123) => {
            console.log(response);
            // window.location.replace("/offer")
            // i jeszcze jako params wyslac offer._id
            // });
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
