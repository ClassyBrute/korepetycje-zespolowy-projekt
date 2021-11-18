<template>
  <div id="selectBox">
    <div class="q-px-md"  style="margin-top: 100px;">
      <div class="q-gutter-md row">
        <q-select popup-content-class="scroll overflow-hidden" outlined v-model="model1" :options="subject" label="Subject" hide-dropdown-icon style="width: 250px;"/>
        <q-select popup-content-class="scroll overflow-hidden" outlined v-model="model2" :options="level" label="Level" hide-dropdown-icon style="width: 250px;"/>
        <q-select popup-content-class="scroll overflow-hidden" multiple outlined v-model="model3" :options="times" label="Time" hide-dropdown-icon style="width: 250px;"/>
        <q-select popup-content-class="scroll overflow-hidden" outlined v-model="model4" :options="rating" label="Rating" hide-dropdown-icon style="width: 250px;"/>
        <q-select popup-content-class="scroll overflow-hidden" outlined v-model="model5" :options="cities" label="City" hide-dropdown-icon style="width: 250px;"/>
      </div>
    </div>
    <q-btn id="buttonSubmit"  color="primary" label="Search" />
  </div>

  <div class="boxcard" >
    
    <div class="card" id="box2">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>

    <div class="card" id="box2">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>
    
    <div class="card" id="box2">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>

    <div class="card" id="box2">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>

    <div class="card" id="box2">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>

    <div class="card" id="box2">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
        <a href="#!" class="btn btn-primary">Button</a>
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
      model4: ref(null),
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

      rating: [
        {label: '1',
          value: '1',
        },
        {label: '2',
          value: '2',
        }, 
        {label: '3',
          value: '3',
        }, 
      ]
    }
  }
}

</script>


<style>

#selectBox {
  position: relative;
  left: 290px;
  top: -20px;
  width: 80%;
}

#buttonSubmit {
  position: relative;
  left: -100px;
  top: 30px;
  width: 150px;
}

#box2 {
  left: 10px;
  width: 200px;
  height: 375px;
  margin-right: 20px;
}

.boxcard {
  display: inline-flex;
}

</style>
