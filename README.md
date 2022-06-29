# rock-paper-scissors
A simple rock-paper-scissors game as a js learning tool (via TOP).

# Newest Edition RPS, new UI :
Player plays best of five (Bo5) RPS game against computer.
Running scores are displayed along with a final Win/Lose message.
No longer utilizes window prompt for num rounds to play.
Player RPS choices made via click events, replacing type-in of 
previous version (Original RPS).

# Original RPS:
main.js includes a function to play a single round versus the computer,
a function that randomizes the computer's rock/paper/scissors choice,
and a function that plays any number of rounds (passed as an integer
argument, collected via prompt) with player's choice collected via dialog 
prompt and computer's choice randomized by calling the playRound() 
function the required number of times.

main.js now includes a keepScore function to calculate if player has won
the majority of matches played in a game and display the final win/lose result.

Contents: index.html, styles.css, main.js