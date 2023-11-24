<script setup>
const changePropertyGoogle=reactive({
    'bgc':'white',
    'color':'#D450BC',
    'padding':'30px',

})


const changePropertyfacebook=reactive({
    'bgc':'#EFEFEF',
    'color':'#737373',
    'padding':'30px',

})

const image=ref('/images/contact.png');


const currentTabFuncGoogle=()=>{
    changePropertyGoogle.bgc='white',
    changePropertyGoogle.color='#D450BC'
    changePropertyfacebook.bgc='#EFEFEF',
    changePropertyfacebook.color='#737373'
    image.value='/images/contact.png'


}
const currentTabFuncFacebook=()=>{
    changePropertyfacebook.bgc='white',
    changePropertyfacebook.color='#D450BC'
    changePropertyGoogle.bgc='#EFEFEF',
    changePropertyGoogle.color='#737373',
    image.value='/images/working.png' 
}

</script>

<template>
    <div class="row" style="margin-left: 15px; background-color: #EFEFEF;  border-radius: 10px;">
        <div class="col-6 text-center" >
           <button  @click="currentTabFuncGoogle" class="review-button" value="google" :style="{backgroundColor:changePropertyGoogle.bgc,color:changePropertyGoogle.color, paddingLeft:changePropertyGoogle.padding,paddingRight:changePropertyGoogle.padding}" >Contact Detail </button>
        </div>
        <div class="col-6 text-center">
            <button @click="currentTabFuncFacebook" class="review-button" value="facebook" :style="{backgroundColor:changePropertyfacebook.bgc,color:changePropertyfacebook.color, paddingLeft:changePropertyfacebook.padding,paddingRight:changePropertyfacebook.padding}" >Working Hrs</button>
        </div>
    </div>
    <div style="margin-top: 25px; margin-left: 10px; margin-bottom: 200px;">
        <img :src="image"  width="360px" alt="reviewG">
    </div>


</template>

<style scoped>
.review-button{
    font-family: DM Sans;
    font-weight: 500;
    text-align: center;
    color: #737373;
    margin: 8px;
    border-radius: 10px;

}

</style>