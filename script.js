// DOM ELEMENTS
const startButton = document.getElementById('start-button')
const textbox = document.getElementById('text-container');
const imagebox = document.getElementById('image-container')
const storyContainer = document.getElementById('story-container')
const choiceButtons = document.getElementById('choices-container')

// SOUNDS
const gameOverSound = new Audio("assets/sounds/gameOver.wav")
const fireSound = new Audio("assets/sounds/burning.wav")
const cackleSound = new Audio("assets/sounds/cackle.wav")
const distantScreamShortSound = new Audio("assets/sounds/distantscreamshort.wav")
const distantScreamLongSound = new Audio("assets/sounds/distantscreamlong.wav")
const doorCreakSound = new Audio("assets/sounds/doorcreak.wav")
const windSound = new Audio("assets/sounds/wind.wav")

// FUNCTIONS
function startGame() {
    startButton.style.display = "none"
    showSlide(1)
}

function showSlide(slideId) {
    const slide = slides.find(slide => slide.id === slideId)
    textbox.innerHTML = slide.text
    while(choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild)
    }

    slide.choices.forEach(choice => {
        const button = document.createElement('button')
        button.innerText = choice.text

        if (choice.sound) {
            sound = choice.sound
            button.setAttribute('onmousedown', 'sound.play()')
        }

        button.addEventListener('click', () => selectChoice(choice))
        choiceButtons.appendChild(button)
    })

    changeImage(slide)
}

function selectChoice(choice) {
    const nextSlideId = choice.nextSlide
    if (nextSlideId <= 0) {
        return startGame()
    }
    setTimeout(() => {
        showSlide(nextSlideId);
    }, "150");
}

function changeImage(slide) {
    while(imagebox.firstChild) {
        imagebox.removeChild(imagebox.firstChild)
    }
    if (slide.imageURL) {
        const currentImage = document.createElement('img')
        currentImage.src = slide.imageURL;
        currentImage.classList.add('slide-image')
        imagebox.appendChild(currentImage)
    }
}


// SLIDE DATA
const slides = [
    {
        id: 1,
        text: `"Halt!"`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 2
            }
        ]
    },
    {
        id: 2,
        text: `"Whom is this stranger that cometh to our village gate?"`,
        imageURL: "", 
        choices: [
            {
                text: 'Next',
                nextSlide: 3
            }
        ]
    },
    {
        id: 3,
        text: `"Shout out thine password."`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 4
            }
        ]
    },
    {
        id: 4,
        text: "",
        imageURL: "",
        choices: [
            {
                text: `"May God deliver us from witchcraft!"`,
                nextSlide: 7
            },
            {
                text: `"I don't know."`,
                nextSlide: 5
            }
        ]
    },
    {
        id: 5,
        text: `"Better leave, then."`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 6,
                sound: gameOverSound
            }
        ]
    },
    {
        id: 6,
        text: `You turn around and walk away. Moments later, you are crushed by a falling meteor and you die.`,
        imageURL: "",
        choices: [
            {
                text: 'Play again?',
                nextSlide: -1
            }
        ]
    },
    {
        id: 7,
        text: `"...correct.`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 8
            }
        ]
    },
    {
        id: 8,
        text: `...ye may enter."`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 9
            }
        ]
    },
    {
        id: 9,
        text: `"But ye'd better not be the devil."`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 10,
                sound: doorCreakSound
            }
            
        ]
    },
    {
        id: 10,
        text: `<span style="font-style: italic">(The wooden gate swings open.)</span>`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 11
            }
        ]
    },
    {
        id: 11,
        text: `<h3 style="text-align: center">CHOOSE YOUR OWN ADVENTURE: WITCHING HOUR</h3>`,
        imageURL: "assets/images/image1.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 12,
                sound: cackleSound
            }
            
        ]
    },
    {
        id: 12,
        text: `You're not the devil, of course. You're a witch hunter. The year is 1683. <br> There is a chill in the autumn air.`,
        imageURL: "assets/images/image2.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 13
            }
        ]
    },
    {
        id: 13,
        text: `For months, you have chased the path of evil. <br> It led you here. A town unfamiliar. It is called “Boston, Massachusetts.”`,
        imageURL: "assets/images/image2.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 14
            }
        ]
    },
    {
        id: 14,
        text: `The moment you set foot through the town gate, a mob of Bostonians rushes to meet you. They tug at your traveling cloak and tell you about their misfortunes…`,
        imageURL: "assets/images/image3.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 15
            }
        ]
    },
    {
        id: 15,
        text: `“Just two nights ago, I was making butter.<br>But today, the butter curdled early!”`,
        imageURL: "assets/images/image4.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 16
            }
        ]
    },
    {
        id: 16,
        text: `“That was two nights ago. But we all know a cow's milk lasts four days. <br> It must be the Devil's magic!”`,
        imageURL: "assets/images/image4.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 17
            }
        ]
    },
    {
        id: 17,
        text: `“You know the second town tree?<br>Not the main town tree. The second town tree?<br>It cast a sideways shadow!"`,
        imageURL: "assets/images/image5.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 18
            }
        ]
    },
    {
        id: 18,
        text: `“I ran to get help.<br> But by the time I came back, the shadow was normal!"`,
        imageURL: "assets/images/image5.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 19
            }
        ]
    },
    {
        id: 19,
        text: `"My wife is no longer interested in laying with me!<br> She believes a demon has made me stink!” `,
        imageURL: "assets/images/image6.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 20
            }
        ]
    },
    {
        id: 20,
        text: `They are looking at you expectantly.<br>What do you say to them?`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 21
            }
        ]
    },
    {
        id: 21,
        text: "",
        imageURL: "",
        choices: [
            {
                text: `"That was a witch"`,
                nextSlide: 23
            }, 
            {
                text: `"You're being hysterical"`,
                nextSlide: 22,
                sound: fireSound
            }
        ]
    },
    {
        id: 22,
        text: `The townsfolk are shocked. One of them points at you and shouts, “That's exactly what a witch would say! Get 'em!”<br>Then they burn you alive.<br><br>Maybe you'll get reincarnated as someone who can read the room.`,
        imageURL: "assets/images/image7.png",
        choices: [
            {
                text: 'Play again?',
                nextSlide: -1
            }
        ]
    },
    {
        id: 23,
        text: `“...and I know how to stop it.”<br><br>You continue. “In my traveling bag I have a pamphlet on finding and interrogating witches.”`,
        imageURL: "assets/images/image8.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 24
            }
        ]
    },
    {
        id: 24,
        text: `“Let me just grab it…”`,
        imageURL: "assets/images/image8.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 25
            }
        ]
    },
    {
        id: 25,
        text: `“...Oh no.”`,
        imageURL: "assets/images/image8.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 26
            }
        ]
    },
    {
        id: 26,
        text: `Your travelling bag is gone!<br>Someone gasps.<br> “Misplacing one's bag is a sign of the devil!”`,
        imageURL: "assets/images/image9.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 27
            }
        ]
    },
    {
        id: 27,
        text: `Shit! You have to find that bag or they'll think <i>you</i> are the witch.<br>Where do you look?`,
        imageURL: "assets/images/image9.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 28
            }
        ]
    },
    {
        id: 28,
        text: ``,
        imageURL: "assets/images/image10.png",
        choices: [
            {
                text: 'Covered bridge',
                nextSlide: 32
            },
            {
                text: 'Meeting house',
                nextSlide: 29
            }
        ]
    },
    {
        id: 29,
        text: `You search near the meetinghouse for what feels like hours.<br>It's not there. You scream in frustration.`,
        imageURL: "assets/images/image11.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 30,
                sound: distantScreamLongSound
            }
        ]
    },
    {
        id: 30,
        text: `A goat screams back.`,
        imageURL: "assets/images/image11.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 31
            }
        ]
    },
    {
        id: 31,
        text: `Surely the devil is in this town.`,
        imageURL: "assets/images/image11.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 35
            }
        ]
    },
    {
        id: 32,
        text: `You search near the covered bridge for what feels like hours.<br>It's not there.`,
        imageURL: "assets/images/image12.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 33
            }
        ]
    },
    {
        id: 33,
        text: `You scream in frustration. A goat screams back.`,
        imageURL: "assets/images/image12.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 34,
                sound: distantScreamLongSound
            }
        ]
    },
    {
        id: 34,
        text: `Surely the devil is in this town.`,
        imageURL: "assets/images/image12.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 35
            }
        ]
    },
    {
        id: 35,
        text: `To give yourself  a moment to think, you walk into a nearby cornfield. `,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 36
            }
        ]
    },
    {
        id: 36,
        text: `It is then that you notice the town idiot, bumbling his way stupidly through the field.`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 37
            }
        ]
    },
    {
        id: 37,
        text: `Man, just look at the guy. How dumb can you get? A round-topped hat?? What is it, 1608 again?`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 38
            }
        ]
    },
    {
        id: 38,
        text: `Anyways, you greet him.<br>He gazes at you for a moment with vacant eyes, then says:`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 39
            }
        ]
    },
    {
        id: 39,
        text: `"Good sir, has it occured to you that the whole town may hath fallen victim to a bout of isolation-driven mass hysteria, and the signs and portents detailed herein may be caused not by paranormal influence but may be instead attributed to a peculiarity in the collective human subconscious that causes us to over-interpret external stimuli, drawing patterns and connections that aren’t there, and ultimately completing our own fears?"`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 40
            }
        ]
    },
    {
        id: 40,
        text: ``,
        imageURL: "assets/images/image14.png",
        choices: [
            {
                text: '...',
                nextSlide: 41
            },
            {
                text: '...what?',
                nextSlide: 41
            }
        ]
    },
    {
        id: 41,
        text: `“Sorry. I was kicked in the head by a horse.”`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 42
            }
        ]
    },
    {
        id: 42,
        text: `(Poor imbecile. His brain's turned to porridge.)`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 43
            }
        ]
    },
    {
        id: 43,
        text: ``,
        imageURL: "assets/images/image15.png",
        choices: [
            {
                text: 'Have you seen my bag?',
                nextSlide: 44
            },
            {
                text: 'You are not well.',
                nextSlide: 44
            }
        ]
    },
    {
        id: 44,
        text: `“Looking for your bag? It's by the first town tree.”`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 45
            }
        ]
    },
    {
        id: 45,
        text: `“Mind you, not the second town tree. The first town tree.”`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Go to the first town tree',
                nextSlide: 46
            }
        ]
    },
    {
        id: 46,
        text: `“…also if you're alive in the year 2024, invest in solar panels.”`,
        imageURL: "assets/images/image13.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 47
            }
        ]
    },
    {
        id: 47,
        text: `You walk along, praising the heavens that God hath not made you a complete imbecile as well.`,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 48,
                sound: windSound
            }
        ]
    },
    {
        id: 48,
        text: `You arrive at the first town tree. A chill blows through the air.`,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 49
            }
        ]
    },
    {
        id: 49,
        text: `You search all over for your bag... but it's not there! `,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 50
            }
        ]
    },
    {
        id: 50,
        text: `You scream in frustration.<br> Somewhere in the distance, a chicken screams back.`,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 51,
                sound: distantScreamShortSound
            }
        ]
    },
    {
        id: 51,
        text: `Disappointed, you kick the base of the tree, and hear a thump.<br>Could it be…?`,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 52
            }
        ]
    },
    {
        id: 52,
        text: ``,
        imageURL: "assets/images/image17.png",
        choices: [
            {
                text: 'Inspect the tree',
                nextSlide: 54
            },
            {
                text: 'Sit down',
                nextSlide: 55
            },
            {
                text: 'Smell the tree',
                nextSlide: 53
            }
        ]
    },
    {
        id: 53,
        text: `It smells like a tree.<br>You're not sure what you expected.`,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Inspect the tree',
                nextSlide: 54
            }
        ]
    },
    {
        id: 54,
        text: `It's your bag! And your witch hunting books are inside!<br>Now you can find the witch!`,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 56
            }
        ]
    },
    {
        id: 55,
        text: `(You're gonna want to look in the tree. Trust me.)`,
        imageURL: "assets/images/image16.png",
        choices: [
            {
                text: 'Inspect the tree',
                nextSlide: 54
            }
        ]
    },
    {
        id: 56,
        text: `Triumphant, you open your bag and pull out a pamphlet.`,
        imageURL: "assets/images/image18.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 57
            }
        ]
    },
    {
        id: 57,
        text: `“A Complicated and Ineffective Guide forre Remouving Wytchcraft and Devilrey Fromme Your Smalle Puritan Villaige”`,
        imageURL: "assets/images/image18.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 58
            }
        ]
    },
    {
        id: 58,
        text: `<i>“There are but a few ways that a smalle Puritain villaige may find itsself susceptible to witchery. The Devil will surely prey upon a populace wherein its citizenrry follows certain habits:<br>
        i. Everyone wakes up early<br>
        ii. Constantly in church</i><br><br>
        This gives you an idea...`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 59
            }
        ]
    },
    {
        id: 59,
        text: `You make your way to the meetinghouse, where the townsfolk have gathered.<br> 
        “I have a plan for catching the witch! We shall set a trap!”`,
        imageURL: "assets/images/image8.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 60
            }
        ]
    },
    {
        id: 60,
        text: `“We can find the witch... by going to sleep tonight, and waking up one hour later than normal.”`,
        imageURL: "assets/images/image19.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 61
            }
        ]
    },
    {
        id: 61,
        text: `“The witch won't realize we've done this and will wake up earlier than everyone else!”`,
        imageURL: "assets/images/image19.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 62
            }
        ]
    },
    {
        id: 62,
        text: `You hear the townsfolk mumbling, “Will it work?” “We have not tried that before.” “Oh, but we are desperate!”`,
        imageURL: "assets/images/image19.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 63
            }
        ]
    },
    {
        id: 63,
        text: `That night the Bostonians make you a bed from the softest hay.<br> 
        You go to sleep, wondering if the plan will work...`,
        imageURL: "assets/images/image19.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 64
            }
        ]
    },
    {
        id: 64,
        text: `Next morning, a frumpy looking child shakes you awake.`,
        imageURL: "assets/images/image19.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 65
            }
        ]
    },
    {
        id: 65,
        text: `“We found the witch, sir!”<br>“At least we think we did.”`,
        imageURL: "assets/images/image19.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 66
            }
        ]
    },
    {
        id: 66,
        text: `Near the first town tree (not the second town tree), a crowd has gathered around two cages.`,
        imageURL: "assets/images/image20.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 67
            }
        ]
    },
    {
        id: 67,
        text: `One contains the town idiot. Another contains a chicken.<br>“Which one's the real witch?”`,
        imageURL: "assets/images/image20.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 68
            }
        ]
    },
    {
        id: 68,
        text: `They are all looking at you`,
        imageURL: "assets/images/image10.png",
        choices: [
            {
                text: 'The town idiot',
                nextSlide: 69
            },
            {
                text: 'The chicken',
                nextSlide: 69
            }
        ]
    },
    {
        id: 69,
        text: `“Please, I'm innocent!” The town idiot says. “I just didn't realize everyone woke up an hour later today!”`,
        imageURL: "assets/images/image21.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 70
            }
        ]
    },
    {
        id: 70,
        text: `“Well <i>I'm</i> not the witch,” said the chicken.`,
        imageURL: "assets/images/image22.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 71
            }
        ]
    },
    {
        id: 71,
        text: ``,
        imageURL: "assets/images/image8.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 72
            }
        ]
    },
    {
        id: 72,
        text: ``,
        imageURL: "assets/images/image22.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 73
            }
        ]
    },
    {
        id: 73,
        text: ``,
        imageURL: "assets/images/image8A.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 74
            }
        ]
    },
    {
        id: 74,
        text: ``,
        imageURL: "assets/images/image22.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 75
            }
        ]
    },
    {
        id: 75,
        text: ``,
        imageURL: "assets/images/image8B.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 76
            }
        ]
    },
    {
        id: 76,
        text: ``,
        imageURL: "assets/images/image22A.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 77
            }
        ]
    },
    {
        id: 77,
        text: ``,
        imageURL: "assets/images/image8C.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 78
            }
        ]
    },
    {
        id: 78,
        text: ``,
        imageURL: "assets/images/image22A.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 79
            }
        ]
    },
    {
        id: 79,
        text: `I mean, "cluck cluck."`,
        imageURL: "assets/images/image22.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 80
            }
        ]
    },
    {
        id: 80,
        text: ``,
        imageURL: "assets/images/image8C.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 81
            }
        ]
    },
    {
        id: 81,
        text: ``,
        imageURL: "assets/images/image8C.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 82
            }
        ]
    },
    {
        id: 82,
        text: ``,
        imageURL: "assets/images/image8C.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 83
            }
        ]
    },
    {
        id: 83,
        text: `"Shit."`,
        imageURL: "assets/images/image22A.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 84
            }
        ]
    },
    {
        id: 84,
        text: `You did it! You've captured the witch!<br>The townsfolk are overjoyed.`,
        imageURL: "assets/images/image27.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 85
            }
        ]
    },
    {
        id: 85,
        text: `“Our crops will be safe! We may lay with our wives again! We must thank you, our friend... er, what is your name?”`,
        imageURL: "assets/images/image27.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 86
            }
        ]
    },
    {
        id: 86,
        text: `Tell them your name?`,
        imageURL: "assets/images/image23.png",
        choices: [
            {
                text: 'Yes',
                nextSlide: 87
            },
            {
                text: 'No',
                nextSlide: 87
            }
        ]
    },
    {
        id: 87,
        text: `“Well, I shouldn't…,” you start.<br>“Oh, what the heck.”`,
        imageURL: "assets/images/image24.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 88
            }
        ]
    },
    {
        id: 88,
        text: `“It's Savingstime. Josiah Savingstime.” `,
        imageURL: "assets/images/image24.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 89
            }
        ]
    },
    {
        id: 89,
        text: `“Thank you, Mr. Savingstime! We are so grateful! We shall turn our clocks back one hour every year in your memory!”`,
        imageURL: "assets/images/image8.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 90
            }
        ]
    },
    {
        id: 90,
        text: `Triumphant, you leave the village. The town is free from the clutches of witchery thanks to you, Josiah Savingstime.`,
        imageURL: "assets/images/image25.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 91
            }
        ]
    },
    {
        id: 91,
        text: `And so every year, it became an American tradition to turn your clocks back by one hour in the middle of the night to avoid getting cursed by a witch.`,
        imageURL: "assets/images/image25.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 92
            }
        ]
    },
    {
        id: 92,
        text: `THE END`,
        imageURL: "",
        choices: [
            {
                text: 'Next',
                nextSlide: 93,
                sound: distantScreamShortSound
            }
        ]
    },
    {
        id: 93,
        text: ``,
        imageURL: "assets/images/image26.png",
        choices: [
            {
                text: 'Next',
                nextSlide: 94,
            }
        ]
    },
    {
        id: 94,
        text: `Witching Hour<br> 
        Written by “Murderin' Mike" Bock<br> 
        Coded by "Grim Reapin' Rob" Bock`,
        imageURL: "",
        choices: [
            {
                text: 'Play again?',
                nextSlide: -1
            }
        ]
    }
]