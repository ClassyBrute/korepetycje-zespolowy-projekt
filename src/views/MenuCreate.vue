<template>
  <div id="selectBox" class="item-center">
    <div class="q-px-md">
      <h2> Create your notice! </h2>
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
          style="width: 250px;"/>

        <q-select 
          popup-content-class="scroll overflow-hidden" 
          outlined 
          v-model="levels_" 
          :options="level" 
          label="Level" 
          hide-dropdown-icon 
          :rules="[myRule]" 
          style="width: 250px;"/>

        <q-select 
          popup-content-class="scroll overflow-hidden" 
          multiple 
          outlined 
          v-model="times_" 
          :options="time" 
          label="Time" 
          hide-dropdown-icon 
          :rules="[myRule]" 
          style="width: 250px;"/>

        <q-select 
          popup-content-class="scroll overflow-hidden" 
          outlined 
          v-model="cities_" 
          :options="city"
          label="City" 
          hide-dropdown-icon 
          :rules="[myRule]" 
          style="width: 250px;"/>

      </div>
      <div class="q-gutter-md row justify-center" style="margin-top: 40px; margin-bottom: 40px">
      <q-input class="inputField" outlined v-model="text" autogrow label="Describe your notice" style="width: 500px; "/>
      </div>
    </div>
    <q-btn @click="submit" id="buttonSubmit" class="item-center" color="primary" label="Create" size="lg"/>
  </div>

</template>


<script>
import { ref } from 'vue'

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export default {
  setup () {
    return {
      subjects_: ref(null),
      levels_: ref(null),
      times_: ref(null),
      cities_: ref(null),

      subject: [
        {label: 'Maths',
          value: 'maths',
        },
        {label: 'Physics',
          value: 'physics',
        }, 
        {label: 'Chemistry',
          value: 'chemistry',
        }, 
        {label: 'English',
          value: 'english',
        }, 
      ],

      level: [
        {label: 'Primary School',
          value: 'primary',
        },
        {label: 'Middle School',
          value: 'middle',
        }, 
        {label: 'High School',
          value: 'high',
        }, 
        {label: 'University',
          value: 'uni',
        }, 
      ],

      time: [
        {label: '12:00-13:00',
          value: '12-13',
        },
        {label: '13:00-14:00',
          value: '13-14',
        }, 
        {label: '14:00-15:00',
          value: '14-15',
        }, 
        {label: '15:00-16:00',
          value: '15-16',
        }, 
      ],

      city: [
        {label: 'Wrocław',
          value: 'Wrocław',
        },
        {label: 'Poznań',
          value: 'Poznań',
        }, 
        {label: 'Legnica',
          value: 'Legnica',
        }, 
      ],
    }
  },

  methods: {
    myRule (val) {
      if (val == null) {
        alert("You must make a selection");
      }
    },

    submit(){
      if (this.subjects_ == null || this.levels_ == null || this.times_ == null || this.cities_ == null) {
        alert("Please make a selection in every field");
      }
      else{
        let times_array = [];
        for (let i = 0; i < this.times_.length; i++) {
          times_array.push(this.times_[i]);
        }

        let data = {
          subjects: this.subjects_.value,
          level: this.levels_.value,
          // time: times_array,
          time: "2022-01-05",
          city: this.cities_.value,
        }

        fetch("https://panoramx.ift.uni.wroc.pl:8888/offers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + readCookie("jwt"),
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
                if (response.status == 401) {
                  alert("Wrong email or password");
                  return;
                }
                response.json().then((data123) => {
                  console.log(data123);
                  // window.location.replace("/offer")
                  // i jeszcze jako params wyslac offer._id
                });
              })
      }
    }
  }
}

</script>


<style>

#selectBox {
  margin-top: 100px;
}

</style>
