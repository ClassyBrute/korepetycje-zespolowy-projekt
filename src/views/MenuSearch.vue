<template>
  <div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>



    

    <div class="q-px-md">
      <div class="q-gutter-md row">
        <q-select outlined v-model="model1" :options="subject" label="Subject" hide-dropdown-icon style="width: 250px;"/>
        <q-select outlined v-model="model2" :options="level" label="Level" hide-dropdown-icon style="width: 250px;"/>
        <q-select outlined v-model="model3" :options="times" label="Time" hide-dropdown-icon style="width: 250px;"/>
      </div>
    </div>

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
      ]
    }
  }
}

</script>


<style>



</style>
