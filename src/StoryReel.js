import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return  ( 
          <div  className="storyReel"> 
           <Story
           image="lavishimage.jpg"
           profileSrc="./lavishimage.jpg"
           title="Lavish Jain"
           />
            <Story
           image="./vivek.jpg"
           profileSrc="./vivek.jpg"
           title="Vivek Deshumukh"
           />
            <Story
           image="./story1.jpg"
           profileSrc="./swapnil.jpg"
           title="Swapnil Selokar"
           />
            <Story
           image="./amruta.jpg"
           profileSrc="./amruta.jpg"
           title="Amruta"
           />
             <Story
           image="./daxta.jpg"
           profileSrc="./daxta.jpg"
           title="Daxta Pandey"
           />
        </div>
        );

}

export default StoryReel;
