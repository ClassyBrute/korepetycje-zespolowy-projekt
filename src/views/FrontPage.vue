<template>
    <div>
        <MDBCarousel
        v-model="carousel8"
        :items="items8"
        dark
        />
    </div>
 

</template>


<script>
import { ref } from 'vue'
import { MDBCarousel } from "mdb-vue-ui-kit";

export default {
    components: {
        MDBCarousel
    },
    setup() {
        const items8 = [
        {
            src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/162541784/original/07c5c73e10bb9e7876b60751ebf1b1420407cf4f/design-an-easy-to-use-ui-ux-for-your-mobile-app.png",
            alt: "...",
            label: "First slide label",
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            src: "https://www.ucview.com/images/portal-ui-screens/new-ui.jpg",
            alt: "...",
            label: "Second slide label",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            src: "https://www.semplice.com/wp-content/uploads/2019/04/ui-kit-mockups.png",
            alt: "...",
            label: "Learn more ",
            caption: "Thanks to our application, you can communicate and learn"
            
        }
        ];

        const carousel8 = ref(0);

        return {
            items8,
            carousel8
        };
    }
};

</script>


<style>

.carousel-item{
    max-height: 880px;
}

.carousel-caption h5{
    font-size: 50px;
    /* color: white; */
}
.carousel-caption p{
    font-size: 30px;
}

</style>