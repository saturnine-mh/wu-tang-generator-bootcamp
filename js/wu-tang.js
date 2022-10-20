const aNamesFirst = ['Madman', 'Genius', 'Hunter', 'Killah',  'Professional',  'Artist','Dreamer', 'Observer','Bastard', 'Wizard','Swami','Wanderer',]
const aNamesLast = ['Bittah', 'Tha', 'Mad', 'Master', 'Dynamic','E-ratic','Wacko','Fearless',     'Misunderstood', 'Quiet', 'Pesty','Gentlemen','Profound','Respected']
const bNamesFirst = ['Assassin',  'Bandit',  'Leader',  'Ambassador', 'Warrior', 'Menace', 'Worlock', 'Conqueror', 'Lover', 'Magician', 'Desperado','Specialist', 'Mercenary','Ninja',]
const bNamesLast = ['Amateur', 'Shriekin’', 'Lucky', 'Phantom', 'Smilin’', 'Thunderous', 'Tuff', 'Scratchin’', 'Drunken', 'X-cessive', 'X-pert', 'Zexy', 'Ruff', 'Intellectual']
const cNamesFirst = ['Contender', 'Mastermind','Demon','Watcher','Destroyer', 'Beggar','Commander','Dominator','Overlord','Samurai','Knight', 'Pupil','Prophet','Criminal',]
const cNamesLast = ['Unlucky', 'Vizual', 'Foolish',  'Midnight', 'Mighty', 'Violent', 'Vulgar', 'Crazy','Annoyin’','Arrogant','B-loved','Sarkastik','Insane','Irate','Wicked','Lazy-assed','Amazing','Footer', ]
let answersArray = []
let aAnswers = []
let bAnswers = []
let cAnswers = []
document.querySelector('#submit').addEventListener('click', Submit)
function Submit(){
    console.log(document.querySelector('input[name="1"]:checked').value)
    for(let i = 1; i <= 5; i++){
    answersArray.push(document.querySelector(`input[name="${i}"]:checked`).value)
    
    }


   console.log(answersArray)

   for(let i = 0; i < answersArray.length; i++){
    if(answersArray[i] == 'a'){
        aAnswers.push(answersArray[i])
    }
    else if(answersArray[i] == 'b'){
        bAnswers.push(answersArray[i])
    }
    else{
        cAnswers.push(answersArray[i])
    }
   } // for the loop that pushes answers to respective array
   console.log(aAnswers, bAnswers, cAnswers)
   if (aAnswers.length > bAnswers || aAnswers > cAnswers){
     randomFirst = Math.floor(Math.random() * aNamesFirst.length)
     randomLast = Math.floor(Math.random() * aNamesLast.length)
    document.querySelector('#randomizedName').innerText = 'Your Wu-Tang name is: ' + aNamesFirst[randomFirst] + ' ' + aNamesLast[randomLast]
    console.log('a is majority', randomFirst, randomLast)
    answersArray = []
    aAnswers = []
    bAnswers = []
    cAnswers = []
   }
   else if (bAnswers.length > aAnswers.length || bAnswers.length > cAnswers.length){
    randomFirst = Math.floor(Math.random() * bNamesFirst.length)
     randomLast = Math.floor(Math.random() * bNamesLast.length)
    document.querySelector('#randomizedName').innerText = 'Your Wu-Tang name is: ' + bNamesFirst[randomFirst] + ' ' + bNamesLast[randomLast]
    console.log('b is majority', randomFirst, randomLast)
    answersArray = []
    aAnswers = []
    bAnswers = []
    cAnswers = []
   }
   else if(cAnswers.length > aAnswers.length || cAnswers.length > bAnswers.length){
    randomFirst = Math.floor(Math.random() * cNamesFirst.length)
     randomLast = Math.floor(Math.random() * cNamesLast.length)
    document.querySelector('#randomizedName').innerText = 'Your Wu-Tang name is: ' + cNamesFirst[randomFirst] + ' ' + cNamesLast[randomLast]
    console.log('c is majority', randomFirst, randomLast)
    answersArray = []
    aAnswers = []
    bAnswers = []
    cAnswers = []
   }
}