let isOnCooldown = false
let siteStartUp = true;
setTimeout(function() {
    siteStartUp = false;
}, 3800);

//preparation stuff
document.getElementById('buttonToSpeak').style.cursor = 'default'
const audio = new Audio('./sounds/DESTROYMAN_III_CURSED_SPEECH.mp3.mpeg')
    audio.load()
    setInterval(function () {
        audio.load()
    }, 10000)

function speak() {
    const dialogue = [
        'ACHOO! Ah, sorry. Coral Fever? No no, just my spring allergies acting up.',
'AD BREAK: Corporations have no soul.',
'AD BREAK: I am brought to you by [WEBZONE]! Buy [PRODUCT] now using code "DESTROYMAN45" to get 45% off your next purchase of [ITEM]!',
'AD BREAK: Stream Naktigonis. Please. You know you want to.',
'AD BREAK: selling cbow 2k',
'Cheh tahh sehh kee gah... Pess kahh tahh... Hm? Oh, sorry, I was just singing the menu theme.',
'Condiments are calories... never forget that.',
"Did you know I'm actually your twin brother? I know it sounds cliche but I have a 500 page lore document in the works to explain how.",
'Did you know the Q button makes you dodge?',
"Do the developers even read community suggestions? I told them to make the game better ten times already, and they still haven't.",
'Does this game upset you? Me too.',
"Don't you get tired of being nice?",
"Ever worked a night shift? You don't want to. Actually, have you ever worked at all?",
"Every good thing that happens to you in this game is preplanned like a show. There's an audience waiting for your downfall.",
"Fish names can be so silly. Did you know there's a seabream species calls 'Boops Boops'? There's a 'Dumb Gulper Shark' too. How mean!",
"Flamecharm? Daring today, aren't we?",
"HINT: Chanting 'Raguza Haruza Kanuza Atruza Confuza Emduza Paluza Raguza' at the white tree in Etris unlocks a secret eighth attunement.",
"HINT: Don't tell the Internal Revenue Sharkos that I'm here. Why? No particular reason.",
"HINT: Getting mugged in Erisia? Just say 'no'! Legally, bandits can't rob you if you refuse.",
"HINT: I should be rising in the sky...",
"HINT: I write down all of your balance complaints to engineer them to be even worse.",
"HINT: If you can't solve a puzzle and have to use the wiki, you are foolish and I will laugh at you. As a friend. Like, in a friendly way.",
"HINT: If you die in Deepwoken, you go to hell.",
"HINT: If you shower, there's a higher chance of you finding happiness. Try it out sometime.",
"HINT: The sorcerer has harmed me once more.",
"HINT: The strength of the Megurger comes from the concept, not the physical object.",
"HINT: This game is awful. The developers really suck.",
"Hey, do you mind if I dig around in your inventory a bit? I'm hungry.",
"I can tell you've never churned butter before. Look at you. Churnless, pathetic.",
"I could end you in one hit if I really wanted to. Watch your back.",
"I had a pet fish once. His name was Rodrigo. I was real hungry though, so...",
"...I should buy a boat.",
"I'm hungry. Like, I really could go for some rigatoni right now.",
"I'm kind of like the Sun Tzu of Deepwoken, if you really think about it.",
"I'm the Mario of this duo. You're the Luigi. You're the secondary. I'm the main star.",
"If you don't feed me, I will die. Can you live with that guilt?",
"If you thought the rumbling was bad, wait until you hear about taxes.",
"If you were hoping you could uninstall me, I have bad news. Probably. Don't go looking.",
"I've been thinking of starting a band recently. Might call it [adjective] [noun]. What do you think?",
"Just wait until I'm freed from the coil of your monitor.",
"Let's play Hide and Seek! I'll hide, and you seek professional medical assistance. This fever's getting nasty.",
"MISSION: Determine if it's possible to prompt the sun to explode.",
"Moe...",
"Mudwoken? What are you talking about? That's so 91 years ago. Get with the times.",
"Never go to afterparties. Just go home.",
"Please join my fireteam. We're running a raid and need one more.",
"Seriously? You're wearing those boots with that hat? Yikes.",
"So... come here often?",
"Sometimes I like to stare at the ocean and imagine terrifying eyes rising from the deep beyond. It gives me the best nightmares.",
"Talking so much is getting me really tired. Maybe you should close the game so I can take a break?",
"TIP: And then BOOM! I get the bell. New Layer 2 bell! New Layer 2 bell.",
"TIP: Are you staying hydrated and fed? Fevers spread through healthy hosts. I'm just looking out for both of us.",
"TIP: A felinor can have a little bit of salami. As a treat.",
"TIP: Be kind to food workers. You've heard of how many kings got poisoned, right?",
"TIP: Birds aren't real.",
"TIP: Do not let the radio decide your taste in music. Be your own person and seek what you personally enjoy.",
"TIP: Even when I leave this place, I will continue to live in your memory. I'm not paying rent.",
"TIP: Every copy of Deepwoken is personalized.",
"TIP: Greathive Aratel makes the best softshell tacos in the entire Eastern Luminant.",
"TIP: Gaming is fun - but don't forget to move around and stretch every now and then! Maybe get some fresh air while you're at it. Ever try it?",
"TIP: I am currently banned from Lance Leshi's restauraunt. I have started a petition.",
"TIP: I hate you with all my hate.",
"TIP: If you're ever getting bored of the game, play something else. Games aren't made to be played forever.",
"TIP: I'm smart, you're dumb. I'm big, you're little. I'm right, you're wrong and there's nothing you can do about it.",
"TIP: Overconfidence is a slow and insidious killer.",
"TIP: Press 'Spacebar' to jump! How many times have you jumped in real life recently? Something to think about.",
"TIP: Salt your vegetables. An unsalted tomato is strong enough to make a grown man cry.",
"TIP: Sesame oil is great in stir fries. Remember that.",
"TIP: Soy sauce contains over 900mg of sodium in only one serving. I'm not the food police, though.",
"TIP: Support your favorite artists, buy their albums. Streaming services pay .4 cents a play. A cup of coffee costs around 1,000 streams.",
"TIP: We're only a few years away from the Meatlord having his perception of meat blurred to the point where we're all in mortal peril. Food for thought.",
"TIP: When was the last time you picked up a book? No, weapon manuals don't count.",
"TIP: Why are you still playing this game? Go outside.",
"TIP: Yamaketzal's favorite drink is grape juice.",
"The path to becoming a firstrater is long and difficult. You are still just a third rater.",
"There is more to life than video games. Developing hobbies can bring happiness.",
"They should add Freddy Fazbear to this game.",
"This is what sucks about video games nowadays. It takes way too long to get to the fun part.",
"I heard that Ethiron theme's finally out. We should do a listening party together.",
"When you really think about it, having 'Happy Birthday' sung to you is like an unskippable cutscene in real life.",
"Why are you looking at me like that? Cut it out. You're creeping me out.",
"Y'know, I'm real good friends with The Guy. Bet you're real jealous.",
"Yaaawn... Can you like, do something interesting?",
"You don't have to do anything anymore. Ever. Never Ever.",
"You wouldn't ever eat poison, right? So why would you eat at a restaurant chain?",
"You, uh.. you doin' good? I'm not asking because I care, I'm asking because I was coded to."
    ]
    if (isOnCooldown == false && siteStartUp === false) {
        document.querySelector('.speechBubble').style.display = 'flex';
        let randomIndex = Math.floor(Math.random() * dialogue.length);
        let randomItem = dialogue[randomIndex];
        document.querySelector(".speechBubbleText").textContent = randomItem;
        document.getElementById('buttonToSpeak').style.backgroundColor = 'rgb(119, 112, 100)'
        document.getElementById('buttonToSpeak').style.cursor = 'default'
        setTimeout(function(){
            document.querySelector('.speechBubble').style.display = 'none';
            document.getElementById('buttonToSpeak').style.backgroundColor = 'papayawhip'
            document.getElementById('buttonToSpeak').style.cursor = 'pointer'
        }, 5000)
    }
}

function mouthAnim() {
    if (isOnCooldown === false && siteStartUp === false) {
        for (let i = 0; i < 10; i++) {
            setTimeout(function() {
                if (document.getElementById("destroymanIII").src.includes("destroymanIII.png")) {
                    document.getElementById("destroymanIII").src = "./images/destroymanIII_OpenMouth.png";
                }
                else {
                    document.getElementById("destroymanIII").src = "./images/destroymanIII.png";
                }
            }, i * 500);
        }
    }
}

setTimeout(function() {
    mouthAnim()
    document.querySelector('.speechBubble').style.display = 'flex'
    document.querySelector('.speechBubbleText').textContent = "Thank you for contracting [ CORAL FEVER ]! I'm your new personal assistant, Destroyman III. I'll be giving you helpful tips and tricks!"
    document.getElementById('buttonToSpeak').style.backgroundColor = 'rgb(119, 112, 100)'
    document.getElementById('buttonToSpeak').style.cursor = 'default'
    setTimeout(function() {
        isOnCooldown = false
        document.querySelector('.speechBubble').style.display = 'none'
        document.getElementById('buttonToSpeak').style.backgroundColor = 'papayawhip'
        document.getElementById('buttonToSpeak').style.cursor = 'pointer'
    }, 5000)
}, 3800)

function playSound(soundFile) {
    if (siteStartUp === false && isOnCooldown === false){
            let audio = new Audio(soundFile)
            audio.play()
            isOnCooldown = true;
        setTimeout(function() {
            isOnCooldown = false;
        }, 5000);
    }
}

let currentImg = 0
const galleryImages = {
    0: "./images/destroymanIIIChest.webp",
    1: "./images/destroymanIII.png",
    2: "./images/destroymanIIIPlush.webp",
    3: "./images/destroymanIIIPlushAd.webp",
}

function nextImg() {
    if (currentImg === 3) {
        currentImg = 0
    }
    else {
        currentImg++
    }
    document.getElementById("imgInGallery").src = galleryImages[currentImg]

}

function previousImg() {
    if (currentImg === 0) {
        currentImg = 3
    }
    else {
        currentImg--
    }
    document.getElementById("imgInGallery").src = galleryImages[currentImg]

}

window.addEventListener('scroll', function() {
    const el = document.getElementById('destroymanIIIChest');
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        el.classList.add('visible');
    }
});
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});
