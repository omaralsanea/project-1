# Pickle Rick- SEI Project 1

## Brief
* Design a simple, grid-based game with HTML, CSS and JavaScript. 
* The game must be built and deployed within 7 days.
* The game must be a solo effort.

## Technologies Used
* JavaScript
* HTML5
* CSS
* VSCode
* Git
* GitHub
* Chrome Developer Edition

## Overview:

<img width="1010" alt="Screenshot 2022-05-11 at 15 59 12" src="https://user-images.githubusercontent.com/98101603/168803934-b033bef3-53d1-4770-a14d-500edd5280c5.png">


Pickle Rick is a Rick and Morty themed arcade style game.
The aim of the game is to help Rick (who's in pickle form) to collect enough Szechuan dipping sauces for him to be able to recreate the recipe.

![ezgif-4-155a9cb60b](https://user-images.githubusercontent.com/98101603/168754769-33e8dc57-903f-42a9-a0c0-62774af8c95f.gif)

The player must guide Pickle Rick through the sewer system of pipes using the direction keys and collect as much Szechuan dipping sauce as they can before the timer runs out. The player must also avoid the hot pipes of water that appear as making contact with these will cause the player's score to drop by 10 points every time.
The game consists of 3 levels of increasing difficulty with the length of time that the Szechuan sauce is in one spot decreasing as difficulty increases.  

### 1. Planning

I spent the first day of my project thinking of the game I wanted to create and using Excalidraw to sketch it out (see the sketch titled 'sketch' in assets).

<img width="488" alt="sketch" src="https://user-images.githubusercontent.com/98101603/167865430-740a324d-d44f-4066-b53b-931391982b05.png">


I wanted a game that would have a score at the end of it rather than a pass/fail so that the player could continue to try and beat their last score - giving the game a longer lifetime and making the game more addictive.

### 2. Functionality

The first component created was the grid. This was created using a for loop. This was done so that each cell had a different ‘index’ number (i.e. from 0 to 199). This helped with structuring the hot water pipes later on as these would come out of cells 0, 10, 20 and so on. This can be seen in the snippet below: 

<img width="498" alt="Screenshot 2022-05-17 at 11 57 38" src="https://user-images.githubusercontent.com/98101603/168798083-42329fc8-2a86-4350-afbd-34789c1bd40f.png">


I then made the Szechuan Sauce and coded this so that it randomly would appear at different points on the grid - see snippet below:

<img width="515" alt="Screenshot 2022-05-17 at 12 16 54" src="https://user-images.githubusercontent.com/98101603/168799132-a4417338-d113-4802-b5c3-ce2c1945a054.png">

I also wrote code so that when Pickle Rick was occupying the same cell that was also occupied by the Szechuan Sauce it would register this as a point for the player and when Pickle Rick was occupying the same cell as the hot water it would register this as minus 10 points and would also display the 'YOU GOT HIT' text. See the snippet below for this: 

<img width="372" alt="Screenshot 2022-05-17 at 12 14 23" src="https://user-images.githubusercontent.com/98101603/168799690-de1b0f62-e530-49ea-8737-6e30f10395ff.png">

I then tackled the hot water pipes.
Set intervals, if/else statements, forEach, splicing etc were used to achieve this as can be seen in the below snippet: 

<img width="482" alt="Screenshot 2022-05-17 at 13 25 15" src="https://user-images.githubusercontent.com/98101603/168810456-972c1895-e7b4-47a8-8b17-0945e9b061e4.png">

I initially planned on creating hot water pipes on every side of the grid to create a real sense of claustrophobia but I found that having them coming horizontally from the left hand side of the grid was sufficiently confining.

As a finishing touch I included different difficulty settings by adjusting the speed that the Szechuan Sauce spawned with 'Easy' mode being 2500 milliseconds, 'Normal' mode being 2100 milliseconds and 'Hard' mode being 1600 milliseconds which can be seen in the code below: 

<img width="246" alt="Screenshot 2022-05-11 at 16 01 17" src="https://user-images.githubusercontent.com/98101603/168811456-e160131a-f888-43f5-a002-28421cd7d34d.png">


<img width="341" alt="Screenshot 2022-05-17 at 11 52 47" src="https://user-images.githubusercontent.com/98101603/168811415-87258a80-ef22-4bb1-9f47-580a89653b1d.png">



The last component to the game was including audio which I did with two separate wav files and event listeners - see the below code snippet: 

<img width="403" alt="Screenshot 2022-05-17 at 13 22 59" src="https://user-images.githubusercontent.com/98101603/168811879-7887576a-5b68-4fce-ad88-0c3520edb5ec.png">


### 3. Convenient/inconsequential Bugs:

-The Szechuan Sauce doesn't disappear on contact - this allows players to rack up multiple points by rapidly pressing left/right up/down when they come into contact with the Szechuan Sauce. I decided not to do anything about this as it rewards the player if they get to the sauce quickly and they can capitalise on this opportunity and is actually a really fun aspect of the game to master. In the gif below you can see that the sauce spawns twice but the player racks up 8 points - going from 26 to 34.

![ezgif-1-fa3afac37d](https://user-images.githubusercontent.com/98101603/168793903-bc9eea04-555d-4710-853a-14d040fa9029.gif)

-The Szechuan sauce sometimes takes a few seconds longer to spawn than it should. The gif above shows this happening as there is a slight delay between the first and second spawn. 
I believe this is due to the sauce spawning randomly inside the cells on the grid that have already been occupied by the hot water. This makes scoring points during this time impossible but this period of time is very brief and doesn't happen often. When it does happen it's a chance for the player to breathe and reposition themselves on the board.

-Much like the 'boiling frog' apologue (which is false according to modern biologists) the hot water doesn't affect Rick if he waits and lets it hit him - it will affect him if he suddenly runs into it though. This is actually not such a bad thing as if the player is distracted and looks away for a second they won't be docked 10 points by the water hitting them. 

### 4. Inconvenient Bugs and Issues:

-The player is able to move Pickle Rick after the game is over - this means they can direct him into hot water which will bring up the 'YOU GOT HIT' message. This makes it so you can't see what score was achieved. 

-I had many styling issues due to the fact that I called the grid on two separate occasions in my JavaScript code.
Due to this, I essentially had two grids.
This caused particular problems with backgrounds as half the grid would be one colour and the other half would be another colour and also caused issues with styling the buttons to the left. I realised my mistake and tried deleting one of the repeated bits of code but this made matters worse so I reverted and spent time going through the styling and eventually made it look exactly the way I wanted it to.

### 5. Future Improvements

- Allowing the player to control movement by both button presses and by also holding the direction buttons down may improve user experience.
- It would be fairly easy to add other objects the player has to collect and this may make the game more engaging but may run the risk of making it too frantic.
- Responsive design so that the game can be played on smaller screens and phones would be the main thing I'd want to implement.

### 6. Key Takeaways

I learnt a great deal from this project and gained a deeper understanding of HTML, CSS and JavaScript.
In particular, I have a much better understanding of coding audio files, collision detection, event listeners and set intervals.
