<template>
  <div id="selectBox" class="item-center">
    <div class="q-px-md">
      <h2> Create your notice! </h2>
      <div class="q-gutter-md row justify-center" style="margin-top: 40px">
        <q-select 
          popup-content-class="scroll 
          overflow-hidden" 
          outlined 
          v-model="model1" 
          :options="subject" 
          label="Subject" 
          hide-dropdown-icon 
          :rules="[myRule]" 
          style="width: 250px;"/>

        <q-select 
          popup-content-class="scroll overflow-hidden" 
          outlined 
          v-model="model2" 
          :options="level" 
          label="Level" 
          hide-dropdown-icon 
          :rules="[myRule]" 
          style="width: 250px;"/>

        <q-select 
          popup-content-class="scroll overflow-hidden" 
          multiple 
          outlined 
          v-model="model3" 
          :options="times" 
          label="Time" 
          hide-dropdown-icon 
          :rules="[myRule]" 
          style="width: 250px;"/>

        <q-select 
          popup-content-class="scroll overflow-hidden" 
          outlined 
          v-model="model5" 
          :options="cities" 
          label="City" 
          hide-dropdown-icon 
          :rules="[myRule]" 
          style="width: 250px;"/>

      </div>
      <div class="q-gutter-md row justify-center" style="margin-top: 40px; margin-bottom: 40px">
      <q-input class="inputField" outlined v-model="text" autogrow label="Describe your notice" style="width: 500px; "/>
      </div>
    </div>
    <q-btn id="buttonSubmit" class="item-center" color="primary" label="Create" size="lg"/>
  </div>

</template>


<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model1: ref(null),
      model2: ref(null),
      model3: ref(null),
      model5: ref(null),

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

      times: [
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

      cities: [
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
    }
  }
}

</script>


<style>

#selectBox {
  margin-top: 100px;
}

</style>
