# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Osaretin(Osa) Agho

Time spent: 7 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
(http://g.recordit.co/Odur2sSuwI.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
https://www.w3schools.com/tags/tag_img.asp
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
https://www.geeksforgeeks.org/arrays-in-javascript/
https://www.geeksforgeeks.org/call-multiple-javascript-functions-in-onclick-event/
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value ]


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[The main challenge I ran into during this assignment happened mainly when I was implementing the optional features. In particular adding pictures to the buttons. Since I main coding language is C++ I am not used to dealing with pictures in code. Even when I was looking up how to insert pictures, the searches that were coming up were not helpful. The way I overcame was using what I learned from doing the pre-work so far. I used the hidden class to make the picture hidden just we did with the buttons. I then used the getElementById function to remove the hidden feature of the pictures only when the button was being clicked. After that I used the same function to add the hidden feature back when they button was done being clicked. I then called the function in “onmousedown” and “onmouseup” and did that for all the buttons. I believe that was the only true problem I had during the duration of the pre-work. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[There are a lot of questions I have about web development. The first one being when exactly you have to add semicolons. In C++ you add them basically after every line but with JavaScript it seems random to me. Another question I have would be about CSS and if there are derived class like in C++ or if you can call a class in another class. When I was trying to add the pictures to the buttons that was one thing I was trying to see if I could do but could not find out how to.  Another question I have is how does JavaScript, HTML, and CSS compare to coding languages like C++ when it comes to difficulty and what they can develop. I ask this because in terms of difficulty CSS, HTML, and JavaScript seemed easier for me compared to when I start coding in C++. Also, I was wondering about development because I know C++ can be used to make games, but I also see that web development can too now since that is what we created. I just wondering like the full extend of what web development can truly do. ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

[If I had more time to work on this I think I would make it a little more creative. I would add more features like trying to find a way to make it multiplayer or a way for the player to gain points. I would also add levels, where each level there are more buttons, and the sequences get quicker faster. I would probably even add some dialogue if I could, like something to announce the name of the game and each level. I probably add a difficulty setting so the player could choose between easy, medium and hard. Basically, I want to make this feel like more than just a typical memory game. ]



## License

    Copyright [Osaretin Agho]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
