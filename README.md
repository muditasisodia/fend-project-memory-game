# Memory Game Project
This project is a part of Udacity's Front End Nanodegree.

### How it works
This is based on the classic memory card game that consists of turning pairs of cards and attempting to match them.

From the Project Overview:

>Each turn:
> The player flips one card over to reveal its underlying symbol.
> The player then turns over a second card, trying to find the corresponding card with the same symbol.
> If the cards match, both cards stay flipped over.
> If the cards do not match, both cards are flipped face down.

- There is a star rating displayed to the player that reduces as the number of moves increase.
- The player is also displayed an incremental timer.
- There is an option of resetting the game as well.
- Once all the cards have been matched, the player is showed a dialog box that displays his/her rating and time taken. The player is asked whether they want to replay.
- On selecting replay, the cards will be shuffled and the game starts again.

### Code Description
1. The ```init()``` function is called. It resets all the dynamic variables (rating, timer, cards) to their default values and calls ```shuffle()``` to shuffle the cards and then displays them on the deck.
2. The ```timer``` is initialised here as well and updates the timer value at an interval of one second.
3. When a card is selected, ```moves``` is incremented, the rating is modified accoring to ```moves```, and the symbol is appended to the ```open``` array. If the array now consists of 2 items, the are compared for equality.
    - If they are equal, they are pushed to ```matched``` array. The ```isGameOver()``` function is called to check if all cards have been opened.
    - If not, they are both closed. In both cases, ```open``` array is reset to an empty array.
4. While checking if the game has ended, if ```matched``` has 14 elements, a congratulatory modal will pop up with the result and an option to replay.
5. On selecting replay, ```init()``` is called and the game begins again.
