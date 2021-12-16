<template>

<div class="q-pa-md">
  <div class="row col-8 inline">
    <div class="card" id="box2">
        <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">{{ this.offer[0].subjects[0] }}</h5>
            <p class="card-text">{{ this.offer[0].time }}</p>
            <p class="card-text">{{ this.offer.user }}</p>
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

  beforeMount() {
    fetch(`https://panoramx.ift.uni.wroc.pl:8888/offer/${this.offer_Id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + readCookie("jwt"),
        },
    })
    .then((res) => res.json())
    .then((offer) => {
        this.offer.push(offer);
        fetch(`https://panoramx.ift.uni.wroc.pl:8888/user/${offer.userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + readCookie("jwt"),
            },
        })
        .then((res) => res.json())
        .then((user) => {
            this.offer.user = user.name;
        });
        });
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
