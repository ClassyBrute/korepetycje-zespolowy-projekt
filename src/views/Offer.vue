<template>
  <div class="center">
    <div class="property-card">
      <div class="property-description bg-dark text-white">
        <div class="row gutters-sm">
          <div class="col-ms-5">
            <div class="text-white card mb-3 bg-dark">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Subject</h5>
                  </div>
                  <div v-if="!showEdit" class="col-sm-9">
                    {{ subjects_ }}
                  </div>
                  <div v-if="showEdit" class="col-sm-9">
                    <form>
                      <q-select 
                        dense
                        
                        outlined
                        v-model="this.offer[0].subjects[0]"
                        :options="subject"
                        label="Subject"
                        hide-dropdown-icon
                        label-color="white"
                        dark
                        :rules="[myRule]"
                        hide-bottom-space
                        style="width: 550px"
                      />


                      <!-- <input
                        ref="msgInput"
                        type="text"
                        v-model="this.offer[0].subjects[0]"
                        placeholder="Name"
                      /> -->
                    </form>
                  </div>
                </div>
                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Title</h5>
                  </div>
                  <div v-if="!showEdit" class="col-sm-9">
                    {{ this.offer[0].title }}
                  </div>
                  <div v-if="showEdit" class="col-sm-9">
                    <form>

                      <q-input
                        dense
                        
                        outlined
                        v-model="this.offer[0].title"
                        :options="subject"
                        label="Title"
                        hide-dropdown-icon
                        label-color="white"
                        dark
                        :rules="[myRule]"
                        hide-bottom-space
                        style="width: 550px"
                      />

                      <!-- <input
                        type="text"
                        v-model="this.offer[0].title"
                        placeholder="Name"
                      /> -->
                    </form>
                  </div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Description</h5>
                  </div>
                  <div v-if="!showEdit" class="col-sm-9">
                    {{ this.offer[0].description }}
                  </div>
                  <div v-if="showEdit" class="col-sm-9">
                    <form>

                      <q-input
                        dense
                        
                        outlined
                        v-model="this.offer[0].description"
                        
                        label="Description"
                        hide-dropdown-icon
                        label-color="white"
                        dark
                        :rules="[myRule]"
                        hide-bottom-space
                        style="width: 550px"
                      />

                      <!-- <input
                        type="text"
                        v-model="this.offer[0].title"
                        placeholder="Name"
                      /> -->
                    </form>
                  </div>
                </div>
                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Level</h5>
                  </div>
                  <div v-if="!showEdit" class="col-sm-9">
                    {{ levels_ }}
                  </div>
                  <div v-if="showEdit" class="col-sm-9">
                    <form>

                      <q-select 
                        dense
                        popup-content-class="scroll 
                        overflow-hidden"
                        outlined
                        v-model="this.offer[0].level[0]"
                        :options="level"
                        label="Level"
                        hide-dropdown-icon
                        label-color="white"
                        hide-bottom-space
                        dark
                        :rules="[myRule]"
                        style="width: 550px"
                      />
                      

                      <!-- <input
                        type="text"
                        v-model="this.offer[0].level[0]"
                        placeholder="Name"
                      /> -->
                    </form>
                  </div>
                </div>
                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Cities</h5>
                  </div>
                  <div v-if="!showEdit" class="col-sm-9">
                    {{ cities_ }}
                  </div>
                  <div v-if="showEdit" class="col-sm-9">
                    <form>


                      <q-select 
                        dense
                        
                        outlined
                        v-model="this.offer[0].cities[0]"
                        :options="city"
                        label="Cities"
                        hide-dropdown-icon
                        label-color="white"
                        dark
                        hide-bottom-space
                        :rules="[myRule]"
                        style="width: 550px"
                      />

                      <!-- <input
                        type="text"
                        v-model="this.offer[0].cities[0]"
                        placeholder="Name"
                      /> -->
                    </form>
                  </div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Price</h5>
                  </div>
                  <div v-if="!showEdit" class="col-sm-9">
                    {{ this.offer[0].price + " zł" }} 
                  </div>
                  <div v-if="showEdit" class="col-sm-9">
                    <form>


                      <q-input 
                        dense
                        popup-content-class="scroll 
                        overflow-hidden"
                        outlined
                        v-model.number="this.offer[0].price"
                        mask="#########"
                        suffix="zł"
                        label="Price"
                        hide-dropdown-icon
                        label-color="white"
                        dark
                        hide-bottom-space
                        :rules="[myRule]"
                        style="width: 550px"
                      />

                      <!-- <input
                        type="text"
                        v-model="this.offer[0].cities[0]"
                        placeholder="Name"
                      /> -->
                    </form>
                  </div>
                </div>


                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Date</h5>
                  </div>
                  <div v-if="!showEdit" class="col-sm-9">
                    {{
                      this.offer[0].dateFrom.slice(0, 10) + " " + this.offer[0].dateFrom.slice(11, 16) +
                      " - " +

                      (new Date(this.offer[0].dateTo).getTime() - new Date(this.offer[0].dateFrom).getTime() )/ 60000 + "min"

                      
                      
                    }}
                  </div>
                  <div
                    v-if="showEdit"
                    class="col-sm-9 row"
                    style="width:560px"
                  >
                    <Datepicker
                      placeholder="Select Date"
                      dark
                      
                      v-model="times_"
                      style="width: 260px; opacity: 80%"
                    >
                    </Datepicker>

                    <q-select 
                        dense
                        popup-content-class="scroll 
                        overflow-hidden"
                        outlined
                        v-model="duration_"
                        :options="duration"
                        label="Duration"
                        hide-dropdown-icon
                        label-color="white"
                        dark
                        hide-bottom-space
                        :rules="[myRule]"
                        style="width: 300px"
                      />

                  </div>

                  <div
                    v-if="showEdit"
                    class="col-sm-9"
                    style="padding-left: 188px"
                  >
                    <!-- <q-select
                      popup-content-class="scroll overflow-hidden"
                      outlined
                      v-model="duration_"
                      :options="duration"
                      label="Duration"
                      hide-dropdown-icon
                      label-color="white"
                      dark
                      :rules="[myRule]"
                      style="width: 250px"
                    /> -->
                  </div>
                </div>
                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h5 class="mb-0">Owner</h5>
                  </div>
                  <div class="col-sm-9">
                    <router-link
                      class="nav-link"
                      :to="{
                        name: 'Profile',
                        params: { accountId: this.offer[0].ownerId },
                      }"
                    >
                      {{ this.offer.user }}
                    </router-link>
                  </div>
                </div>
                <hr />

                <div v-if="checkLogged" class="row">
                  <div class="col-sm-12">
                    <button
                      v-if="!showEdit"
                      class="btn btn-primary"
                      @click="startEdit"
                    >
                      Edit
                    </button>
                    <button
                      v-if="showEdit"
                      class="btn btn-primary"
                      @click="saveEdit"
                    >
                      Save
                    </button>
                    <button
                      v-if="showEdit"
                      class="btn btn-primary"
                      @click="cancel"
                    >
                      Cancel
                    </button>

                    <button
                      v-if="showEdit"
                      class="btn btn-primary"
                      @click="duplicate"
                    >
                      Duplicate
                    </button>

                    
                  </div>
                </div>

                <div v-if="!checkLogged " class="row">
                  <div class="col-sm-12">
                    <button v-if="!isRegistered " class="btn btn-primary" @click="reservation">
                      Reserve
                    </button>
                    <button v-if="isRegistered " class="btn btn-primary" @click="unReservation">
                      Unreserve
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
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
  props: ["offerId"],

  setup() {
    return {};
  },

  data() {
    return {
      subjects_: ref(null),
      levels_: ref(null),
      times_: new Date(),
      cities_: ref(null),
      text_: ref(null),
      duration_: ref(null),
      price_: ref(null),
      title_: ref(null),
    
      showEdit: false,
      checkLogged: false,
      offer: [],
      offer_old: [],
      offer_Id: this.offerId,
      loggedId: "",
      checkInterested: false,
      isRegistered: false,


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

 

  mounted() {
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

        if (this.loggedId == this.offer[0].ownerId) {
          this.checkLogged = true;
        }

        
      });
  },

  created() {
    //Jak cos sie "zepsuje" to wywalamy to 
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

        // if (this.loggedId == this.offer[0].ownerId) {
        //   this.checkLogged = true;
        // }

        
      });

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
        this.offer_old.push(offers);


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
            this.duration_ = (new Date(this.offer[0].dateTo).getTime() - new Date(this.offer[0].dateFrom).getTime() )/ 60000 ;
            this.subjects_ = this.offer[0].subjects[0];
            this.levels_ = this.offer[0].level[0];
            this.cities_ = this.offer[0].cities[0];
            this.times_ = this.offer[0].dateFrom;
            // console.log(this.loggedId, this.offer[0].interestedIn[0])
            if (this.loggedId == this.offer[0].interestedIn[0]) {
              
              this.isRegistered = true;
            }
            // console.log(new Date(this.offer[0].dateFrom));
          });
      });
    
  },

  methods: {
    startEdit() {
      this.showEdit = !this.showEdit;
      
    },

    saveEdit() {
      this.showEdit = !this.showEdit;
      // console.log(new Date(this.offer[0].dateFrom).toJSON());
      
      let editData = {
        subjects: this.offer[0].subjects[0].value,
        level: this.offer[0].level[0].value,
        description: this.offer[0].description,
        price: this.offer[0].price,
        dateFrom: new Date(this.times_),
        dateTo: new Date(parseInt(this.times_.getTime()) + parseInt(this.duration_.value)) ,
        // dateFrom: this.offer[0].dateFrom.toJSON(),
        // dateTo: this.offer[0].dateTo.toJSON() ,
        cities: this.offer[0].cities[0].value,
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
          if (this.offer[0].subjects[0].hasOwnProperty('value') ){
            this.subjects_ = this.offer[0].subjects[0].value;
          }else{
            this.subjects_ = this.offer[0].subjects[0];
          }
          if ( this.offer[0].level[0].hasOwnProperty('value') ){
            this.levels_= this.offer[0].level[0].value;
          
          }else{
            this.levels_ = this.offer[0].level[0];
          }
          if (this.offer[0].cities[0].hasOwnProperty('value') ){
            this.cities_ = this.offer[0].cities[0].value;
          }else{
            this.cities_ = this.offer[0].cities[0];
          }


          console.log(this.subjects_,this.levels_, this.cities_)
        }
      });
    },
    // dorobić zamienianie na stare wartości :)

    duplicate(){
      
      // console.log(this.duration_.value);
      let editData = {
        subjects: this.offer[0].subjects[0].value,
        level: this.offer[0].level[0].value,
        description: this.offer[0].description,
        price: this.offer[0].price,
        dateFrom: new Date(this.times_),
        dateTo: null,
        // dateFrom: this.offer[0].dateFrom.toJSON(),
        // dateTo: this.offer[0].dateTo.toJSON() ,
        cities: this.offer[0].cities[0].value,
        title: this.offer[0].title,
      };
      if (this.duration_.hasOwnProperty('value')){
        editData.dateTo = new Date(parseInt(new Date(this.times_).getTime()) + parseInt(this.duration_.value))
        
      }else{
        editData.dateTo = new Date(parseInt(new Date(this.times_).getTime()) + parseInt(this.duration_))
      }

      if (this.offer[0].subjects[0].value == null) {
        editData.subjects = this.subjects_;
      }
      if (this.offer[0].level[0].value == null) {
        editData.level = this.levels_;
      }
      if (this.offer[0].cities[0].value == null) {
        editData.cities = this.cities_;
      }






      fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/posts`, {
        method: "POST",
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
          alert("Great, you duplicated your post :D")
          
        }
      });
    },

    cancel() {

      // this.offer_old.map(obj => this.offer);
      // console.log(this.offer);

      this.showEdit = !this.showEdit;

    },

    reservation() {
      fetch(
        `https://panoramx.ift.uni.wroc.pl:8888/v1/reservation/${this.offer_Id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
          },
        }
      ).then((response) => {
        if (response.status == 400) {
          alert("Bad request");
        }
        if (response.status == 404) {
          alert("Not found");
        }
        if (response.status == 409) {
          alert("Someone already registered");
        }
        if (response.status == 200) {
          console.log("sukces");
        }
      });
    },

    unReservation() {
      fetch(
        `https://panoramx.ift.uni.wroc.pl:8888/v1/reservation/${this.offer_Id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
          },
        }
      ).then((response) => {
        if (response.status == 400) {
          alert("Bad request");
        }
        if (response.status == 404) {
          alert("Not found");
        }
        if (response.status == 409) {
          alert("Someone already registered");
        }
        if (response.status == 200) {
          console.log("sukces wyrezerwowalo");
          alert("sukces wyrezerwowalo")
        }
      });
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

.property-card {
  height: 47em;
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

.property-description {
  background-color: #fafafc;
  height: 52em;
  width: 55em;
  position: absolute;
  bottom: 0em;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0em 1em;
  text-align: center;
}
</style>
