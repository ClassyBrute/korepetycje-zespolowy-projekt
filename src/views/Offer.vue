<template>

<div class="q-pa-md fixed-center  " style="width:89%; top:42%; height:60%; left:64%">
  <div class="row col-8 inline full-width    fixed-center ">
    <div class="card" id="box2" style="width:65%;height:70%;" >
        <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt="..."
            
            style="width:100%; height:300px ; position:flex ; left:70px" 
            
        />
        <div class="card-body" style="width:100%; height:250px "   >
            <h5 class="card-title" >{{ this.offer[0].subjects[0] }}</h5>
            <p>{{ this.offer[0].title }}</p>
            <p>{{ this.offer[0].level[0] }}</p>
            <p>{{ this.offer[0].cities[0] }}</p>
            <p>{{ this.offer[0].dateFrom }}</p>
            <p>{{ this.offer[0].dateTo }}</p>
            <p>{{ this.offer.user }}</p>
            <a href="#!" class="btn btn-primary">Button</a>
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

export default {

  props: ['offerId'],

  setup() {
    return {
      
    };
  },
  
  data() {
    return {
      offer: [],
      offer_Id: this.offerId,
    };
  },


  created() {
    console.log(this.offer_Id);
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
        
         fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/account/${offers.ownerId}`, {
             method: "GET",
             headers: {
                 "Content-Type": "application/json",
                 Authorization: "Bearer " + readCookie("jwt"),
             },
         })
         .then((res) => res.json())
         .then((user) => {
             this.offer.user = user.firstName;
             
         });
        })
        
        // console.log(this.offer[0]);
    }
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
