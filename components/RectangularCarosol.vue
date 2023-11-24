<script setup>

const slides =
  [
    {
      title: "Upto 50% off",
      paragraph: "Look more beautiful & save more discount",
      button: "Get offer now!",
      background: "white",
      path: '/icons/Path 4.svg',
      icon: '/icons/icon50.svg'
    },
    {
      title: "Upto 25% off",
      paragraph: "On Wedding package & Hairstyles",
      button: "Get offer now!",
      background: "white",
      path: '/icons/Ellipse 2.svg',
      icon: '/icons/icon25.svg'
    },
    {
      title: "Upto 20%",
      paragraph: "Supper Offer Hair-styling & treatment",
      button: "Get offer now!",
      background: "white",
      path: '/icons/Ellipse 2.svg',
      icon: '/icons/icon20.svg'
    },
  ]
  // const activeSlideIndex = ref(0);



</script>

<template>
  <v-card elevation="24" width="321" height="148" class="background">
    <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-circle"
      height="300" width="3750" cycle>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="slide.background" height="100%" tile>
          <div>
            <div class="path">
              <div class="part1">
                <div class="text-title">{{ slide.title }}</div>
                <p class="text-paragraph">{{ slide.paragraph }}</p>
                <button  class="button-slider">{{ slide.button }}</button>
              </div>
              <div class="path2">
                <img :src="slide.path" alt="path" style="position: absolute;" >
                <img :src="slide.icon" alt="icon"  style="position: absolute; margin-top: 15px;margin-left: -12px;">
              </div>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  
  </v-card>

  
</template>

<style scoped>
.text-title {
  margin-top: 14px;
  margin-left: 14px;
  color: #D350BB;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  /* 150% */
}

.text-paragraph {
  margin-left: 14px;
  color: #444053;
  width: 233px;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* 18px */
  letter-spacing: -0.092px;
}

.background {
  border-radius: 8px;
  background: var(--ui-55, #FFF);
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.10);
}

.path1 {
  position: absolute;

}
.path{
  display: flex;
}

.path2 {
  margin-left: 220px;
  margin-top: 38px;
  position: absolute;
  z-index: 1;

}
.button-slider{
  color: #D350BB;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  margin-left: 14px;
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 5px;
  margin-top: 8px;
  padding-bottom: 5px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 171.429% */
  border-radius: 20px;
  border: 1px solid rgba(115, 115, 115, 0.49);
  background: rgba(23, 92, 76, 0.00);
}

.pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

/* Customize the appearance of the indicators */
.v-carousel-indicator {
  background-color: #D350BB; /* Color of inactive indicators */
}

.v-carousel-indicator--active {
  background-color: #444053; /* Color of the active indicator */
}
</style>
