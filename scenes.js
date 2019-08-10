const scenes = [
{
    id: 1,
    text: "Click clack. Consciousness comes back to you suddenly, smoothly, like it never left. You don't even open your eyes. They were already open. But a wave of confusion strikes you before you even acknowledge your surroundings. You're standing on both feet. In fact, you're walking. There's noise and color and a glaring sun. Your body functions like it always does but something feels off. You don't remember where you were a second ago, an hour ago, a year ago. You don't remember anything. The dominant thought is that you should remember. There are things you should know, like your name, your identity, your history. But it's all blank. You're in a market place. The man to your right is calling out, 'Come in here for the ripest apples in town. Buy 10 a coin. The ripest apples you've ever seen.' You decide to check your pockets. Instinctively you know, this is where you kept your coins, and other things. You know you used to carry something that would identify you to others. But there's nothing there but 5 metal coins. They look strange and heavy.",
    audio: "",
    visual: "",
    options: [
        {
           text: "Speak to the merchant.",
           clue: false,
           nextScene: 2
        },
        {  text: "Keep walking",
           clue: false,
           nextScene: 3
            
        }
    ]
},
{
    id: 2,
    text: "You hesitantly move towards the merchant, a 20-something healthy young man in a long shirt and loose pants. Something about the way he's dressed triggers a memory or an association in your head. He turns to you abruptly and with a wild smile says, 'Hello, traveler! The road has taken a toll on you! Have an apple on the house!'",
    audio: "",
    visual: "",
    options: [
        {
           text: "Take the apple.",
           clue: false,
           nextScene: 4
        },
        {  text: "Ask where am I.",
           clue: true,
           nextScene: 5 
            
        }
    ]
},
{
    id: 3,
    text: "You continue walking through the marketplace. You have no idea where you are but there's a sense of purpose that keeps you going. You're aware of the body you're in, but you have no recollection of your face. Maybe finding a mirror would be a good idea. You walk a little faster eyes darting from left to right looking for any reflective surface. Most merchants are selling food and cloth. You think of asking a passerby but then you catch the sight of a small shop in the far corner. There's a man outside working with metal. You pace yourself there and the heat accelerates the closer you get. You keep a small distance and open your mouth to ask, but then you hear a scream and watch as the attention of the people around you shifts to the source of the sound. You hear someone say, 'it's judgment day!' as he runs in the direction. You turn to find that the blacksmith is also running among the mob leaving his shop unattended. You",
    audio: "",
    visual: "",
    options: [
        {
           text: "Follow the scream.",
           clue: false,
           nextScene: 6
        },
        {
            text: "check out the blacksmith' shop for a mirror.",
            clue: false,
            nextScene: 7
         }

    ]
},
{
    id: 4,
    text: "He stretches out his hand with a big red apple and you take it from him cautiously. Apple is smooth and clean, almost reflecting the sunlight. You feel no hunger but you take a bite anyway. It doesn't taste like anything. You're not sure if it's bland or if you have no taste buds whatsoever. He doesn't watch you eat it, doesn't attempt at selling you any. His attention completely diverts back to his trade. You politely try to grab his attention but he ignores you. He calls out for more customers.",
    audio: "",
    visual: "",
    options: [
        {
           text: "Keep walking.",
           clue: false,
           nextScene: 3
        }
        
    ]
},
{
    id: 5,
    text: "The friendly demeanor of the merchant encourages you to speak. You cough once, a little anxious, and you hear yourself ask, 'Uh, thank you. I... I am a little lost. I'm not sure how I got here. Where are we exactly?' The merchant stares at you for a second, then with a wide smile says, 'Hello traveler, The road has taken a toll on you! Have an apple on the house!' Confused, you",
    audio: "",
    visual: "",
    options: [
        {
           text: "Take the apple.",
           clue: false,
           nextScene: 4
        },
        {  text: "Keep walking.",
           clue: false,
           nextScene: 3
            
        }
    ]
},
{
    id: 6,
    text: "",
    audio: "",
    visual: "",
    options: [
        {
           text: "",
           clue: true,
           nextScene: 9
        },
        {  text: "",
           clue: false,
           nextScene: 5 
            
        },
        {  text: "",
           clue: false,
           nextScene: 4
            
        }
    ]
}





]