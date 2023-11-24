
<script setup>
  
const showDrawer = ref(false);
const selectedLocation = ref(null);
const locations = ref([{   
                title:"Westheimer/Wilcrest",
                HouseNo: 11382,
                street: "Westheimer Rd",
                city: "Houston",
                state: "TX",
                zipCode: "77042"},
  
            {   title:'FM 529',
                HouseNo: 17411,
                street: "Fm 529 Rd",
                city:"Houston",
                state:'TX',
                zipCode:'77095'

            },
                    
            {   title:'Westheimer/Galleria',
                HouseNo:'5959',
                street:'Westheimer Rd, Suite 210',
                city:'Houston',
                state:'TX',
                zipCode:'77057'



            }]);

const toggleDrawer = () => {
  showDrawer.value = true;
  document.body.style.overflow = "hidden"; // Disable body scroll
};

const hideDrawer = () => {
  showDrawer.value = false;
  document.body.style.overflow = ""; // Enable body scroll
};

</script>

<template>
    <div v-if="showDrawer" class="bottom-sheet-drawer">
        <div class="container">
        <div class="row">
            <div class="col-12">
            <div class="d-flex justify-content-end align-items-center">
                <div class="drawer-header">
                <img @click="hideDrawer" class="close-button rounded " src="/icons/Close_round.svg" alt="cross">
                </div>
            </div>
            <div class="text-center select-location">
                <span>Select Location</span>
            </div>
            </div>
        </div>
        </div>

    
      <div class="drawer-content">
        <label v-for="(location, index) in locations" :key="index" class="radio-label">
    <div class="container p-1">
        <div class="row rounded-2 border">
            <div class="col-1 radio-button">
                <img src="/icons/Location2.svg" alt="location2">
            </div>
            <div class="col-10 py-2">
                <span class="location-title">{{ location.title }}</span>
                <p class="location-address">{{ location.HouseNo }}{{ location.street }}, {{ location.city }},{{ location.state }} {{ location.zipCode }}</p>
            </div>

            <div class="col-1 radio-button">
                <input  type="radio" v-model="selectedLocation" :value="location">
                
            </div>
        </div>
    </div>

         
        </label>
      </div>
    </div>
    <div @click ="toggleDrawer"  class="show-button">
        <img src="/icons/Location.svg" alt=""> <span>{{selectedLocation ? selectedLocation.title: "Select Location"}}  </span>
    </div>
  </template>
  

  
  

<style scoped>
.bottom-sheet-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 375px;
  background-color: #fff;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px;
  z-index: 999;
}

.drawer-header {
  display: flex;
  justify-content: flex-end;
  color: #DFDFDF4D;
}

.close-button {
  background: #DFDFDF4D;
  border: none;
  font-size: 20px;
  cursor: pointer;
  
}

.drawer-content {
  margin-top: 20px;
}

.radio-label {
  display: block;
  margin-bottom: 10px;
}

.show-button {
    width: 375px;
    /* height: 300px; */
    flex-shrink: 0;
    position: absolute;
    padding: 20px;
    color: #FFF;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; 
    letter-spacing: -0.092px;
    margin-top: 70px;
    z-index: 1;
    color: #FFF;

    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    letter-spacing: -0.092px;

}
.select-location{
    color: #D450BC;
    text-align: center;
    font-family: DM Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 26.4px */
}
.location-title{
    color: #566A7F;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.location-address{
    color: #566A7F;
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    .radio-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .radio-button input[type="radio"] {
    transform: scale(1.2); /* Increase size slightly */
    border-color: #D450BC; /* Border color */
    background-color: #D450BC; /* Background color */
}
</style>
