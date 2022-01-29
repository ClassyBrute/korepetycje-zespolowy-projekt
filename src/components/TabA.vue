<template>
    <div class="row col-8 inline">
        <div v-for="offer in offers" :key="offer" class="card mb-3 pt-1 bg-dark text-white" id="box2">
        <div class="card-body">
            <h5 style="line-height: 1.5em; height: 3em; overflow: hidden" class="card-title">{{ offer.title }}</h5>
            <p class="card-text">{{ offer.subjects[0] }}</p>
            <p class="card-text">{{ "Since " + offer.dateFrom.slice(0, 10) + " " + offer.dateFrom.slice(11, 16) }}</p>
            <p class="card-text">{{ "Until " + offer.dateTo.slice(0, 10) + " " + offer.dateTo.slice(11, 16) }}</p>
            <p class="card-text">{{ offer.cities[0] }}</p> -->
            <!-- <p class="card-text">{{ offer.level[0] }}</p> -->
            <!-- <p class="card-text">{{ offer.user }}</p> -->
            <router-link
            class="nav-link btn btn-primary"
            :to="{ name: 'Offer', params: { offerId: offer._id } }"
            >Details</router-link
            >
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["accountId"],
    name: 'TabA',

    data() {
    return {

      dane: [],
      offers: [],

      
    };
  },

    mounted() {
    

    this.offers = [];
    this.dane = [];
    fetch(`https://panoramx.ift.uni.wroc.pl:8888/v1/posts?ownerId=${this.accountId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + readCookie("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.dane.push(data[i]._id);
        }
        for (let i = 0; i < data.length; i++) {
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
                });
            });
        }
      })
  },
}
</script>

<style>

</style>