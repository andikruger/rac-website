import React, {useEffect} from "react";

const Card = (heading, message) => {
       <div
          aboutme-card
          class="Card animated z-10 rounded-xl backdrop-blur-lg border-[1px] border-[#5353532c] shadow-2xl shadow-black bg-[#1414143d] w-[330px] h-[300px] md:w-[500px] md:h-[250px] flex flex-col overflow-hidden"
        >
          <div
            name-and-field
            class="text-white flex justify-between mx-auto w-[80%] h-[35%]"
          >
            <div class="flex flex-row gap-1 items-center">
            
              <div class="text-3xl text-white font-bold ">{heading}</div>
            </div>
           
          </div>

          <div
            introduction-text
            class="text-center py-5 text-xl font-mono"
           
          >
            {message}
          </div>

          <div
            social-media-wrapper
            class="mx-auto flex flex-row justify-around w-[18em] h-[25%] hoverable"
          >
            <img
              github-icon
              src="https://icons8.com/icon/32292/instagram"
              class="w-[1.15em] media"
              onclick="window.open('https://github.com/StikiStock/')"
            />
            <img
              reddit-icon
              src="./util/img/icons8-reddit-64.png"
              class="media"
              onclick="window.open('https://www.reddit.com/user/xStiki')"
            />
            <img
              telegram-icon
              src="./util/img/icons8-telegram-64.png"
              class="media"
              onclick="window.open('https://t.me/stikistock')"
            />
          </div>
        </div>

}

export default Card;
