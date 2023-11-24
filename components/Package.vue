<template>
    <div>
      <div class="stories__content">
      <button class="story story--has-story">
        <div class="story__avatar">
          <div class="story__border">
            <img src="/images/manicure.png" alt="expert 2" />
          </div>
        </div>
  
      </button>
      <button class="story story--has-story">
        <div class="story__avatar">
          <div class="story__border">
            <img src="/images/RelaxSpa.png" alt="User Picture" />
          </div>
  
        </div>
  
      </button>
      <button class="story story--has-story">
        <div class="story__avatar">
          <div class="story__border">
            <img src="/images/hairStyle.png" alt="User Picture" />
          </div>
        </div>
      </button>
    </div>
  
    </div>
  
  </template>
  
  <style scoped>
  .stories__content {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 16px;
    padding: 0 16px;
    position: relative;
  
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  
  .story {
    background-color: transparent;
    border: none;
    cursor: pointer;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  
  
  
  /* .story__border {
    width: 64px;
    height: 64px;
  
    fill: none;
    stroke: var(--story-border);
    stroke-width: 1.5;
  } */
  
  .story--has-story .story__border {
    stroke: url(#--story-gradient);
    stroke-width: 2;
  }
  
  /* .story__avatar {
    position: relative;
  } */
  
  .story__picture {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .story__picture::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  
    border: 1px solid var(--img-border);
    border-radius: 50%;
  }
  
  .story__user {
    font-size: 12px;
    font-weight: 400;
    margin-top: 15px;
  
    max-width: 72px;
  
  }
  
  
  </style>