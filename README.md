# Pickle Rick- SEI Project 1

## Overview:

Pickle Rick is a Rick and Morty themed arcade style game.
The aim of the game is to help Rick (who's in pickle form) to collect enough Szechuan dipping sauces for him to be able to recreate the recipe.

The player must guide Pickle Rick through the sewer system of pipes using the direction keys and collect as much Szechuan dipping sauce as they can before the timer runs out. The player must also avoid the hot pipes of water that appear as making contact with these will cause the player's score to drop by 10 points every time.
The game consists of 3 levels of increasing difficulty with the length of time that the Szechuan sauce is in one spot decresing as difficulty increases.  

<img width="1326" alt="Screenshot 2022-05-10 at 15 11 24" src="https://user-images.githubusercontent.com/98101603/168683360-9d7d6e08-30e1-40ee-ad64-60d86e2b97de.png">


### Technologies Used:

JavaScript
HTML
CSS
Git and GitHub

### 1. Planning

I spent the first day of my project thinking of the game I wanted to create and using Excalidraw to sketch it out (see the sketch titled 'sketch' in assets).

<img width="388" alt="sketch" src="https://user-images.githubusercontent.com/98101603/167865430-740a324d-d44f-4066-b53b-931391982b05.png">


I wanted a game that would have a score at the end of it rather than a pass/fail so that the player could continue to try and beat their last score - giving the game a longer lifetime and making the game more addictive.

### 2. Functionality

The first component created was the grid. This was created using a for loop. This was done so that each cell had a different ‘index’ number (i.e. from 0 to 199). This helped with structuring the hot water pipes later on as these would come out of cells 0, 10, 20 and so on.
I then made the Szechuan Sauce and coded this so that it randomly would appear at different points on the grid.
I then made the character - Pickle Rick and coded this so that on contact with the Szechuan Sauce a point would be scored.
Lastly, I tackled the hot water pipes.
Set intervals, if/else statements, forEach, splicing etc were used to achieve this.
I initially planned on creating hot water pipes on every side of the grid to create a real sense of claustrophobia but I found that having them coming horizontally from the left hand side of the grid was sufficiently confining.

### 3. Convenient/inconsequential Bugs:

-The Szechuan Suauce doesn't disappear on contact - this allows players to rack up multiple points by rapidly pressing left/right up/down when they come into contact with the Szechuan Sauce. I decided not to do anything about this as it rewards the player if they get to the sauce quickly and they can capitalise on this opportunity and is actually a really fun aspect of the game to master.

-Much like the 'boiling frog' apologue(which is false according to modern biologists) the hot water doesn't affect Rick if he waits and lets it hit him - it will affect him if he suddenly runs into it though. This is actually not such a bad thing as if the player is distracted and looks away for a second they won't be docked 10 points by the water hitting them. 

-The Szechuan sauce sometimes takes a few seconds longer to spawn than it should.
I believe this is due to the sauce spawning randomly inside the cells on the grid that have already been occupied by the hot water. This makes scoring points during this time impossible but this period of time is very brief and doesn't happen often. When it does happen it's a chance for the player to breathe.

### 4. Inconvenient Bugs and Issues:

-The player is able to move Pickle Rick after the game is over - this means they can direct him into hot water which will bring up the 'YOU GOT HIT' message. This makes it so you can't see what score was achieved. 

-I had many styling issues due to the fact that I called the grid on two separate occasions in my JavaScript code.
Due to this, I essentially had two grids.
This caused particular problems with backgrounds as half the grid would be one colour and the other half would be another colour and also caused issues with styling the buttons to the left. I realised my mistake and tried deleting one of the repeated bits of code but this made matters worse so I reverted and spent time going through the styling and eventually made it look exactly the way I wanted it to.

### 5. Future Improvements

-Allowing the player to control movement by both button presses and by also holding the direction buttons down may improve user experience.
-It would be fairly easy to add other objects the player has to collect and this may make the game more engaging but may run the risk of making it too frantic.

### 6. Key Takeaways

I learned a great deal from this project and gained a deeper understanding of HTML, CSS and JavaScript.
In particular, I have a much better understanding of coding audio files, collision detection, event listeners and set intervals.
