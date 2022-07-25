import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';


const Questionnaire = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer1, setAnswer1] = useState(null)
    const [answer2, setAnswer2] = useState(null)
    const [answer3, setAnswer3] = useState(null)
    const [answer4, setAnswer4] = useState(null)
    const [answer5, setAnswer5] = useState(null)
    const [answer6, setAnswer6] = useState(null)
    const [answer7, setAnswer7] = useState(null)
    const [answer8, setAnswer8] = useState(null)
    const [answer9, setAnswer9] = useState(null)
    const [answer10, setAnswer10] = useState(null)
    const [answer11, setAnswer11] = useState(null)
    const [answer12, setAnswer12] = useState(null)
    const [answer13, setAnswer13] = useState(null)
    const [answer14, setAnswer14] = useState(null)
    const [answer15, setAnswer15] = useState(null)
    const [answer16, setAnswer16] = useState(null)
    const [answer17, setAnswer17] = useState(null)
    const [answer18, setAnswer18] = useState(null)
    const [answer19, setAnswer19] = useState(null)
    const [answer20, setAnswer20] = useState(null)

    const questionObj = {
        1: {Question: "What's the most important part of a Pokemon Battle?", Options: {1: "To have fun!", 2: "To win!", 3: "To Level Up!", 4: "To bond with my Pokémon!"}},
        2: {Question: "You encounter an injured wild Pokemon. What do you do?", Options: {1: "Give it a Potion and ask it to join my team.", 2: "Try to capture it. It can't fight back", 3: "Scan it with my Pokedex. I haven't seen that one yet!", 4: "Take it to the nearest PokeCenter to heal"}},
        3: {Question: "When setting out for the day, your main goal is to...", Options: {1: "Meet new trainers and explore.", 2: "Be the best trainer there is.", 3: "Create a dynamic and effective battling team.", 4: "To bond with my Pokemon!"}},
        4: {Question: "Is it important that your Pokemon is happy?", Options: {1: "It's not as important as becomming League Champion", 2: "My Pokemon's happiness is my highest priority!", 3: "I hope that my pokemon and I are having fun adventuring.", 4: "It's important because a happy pokemon is a better battler"}},
        5: {Question: "Oh no! Officer Jenny has stopped you on the road for speeding on your Bicycle. You...", Options: {1: "Challenge her to a battle to get out of a ticket.", 2: "Pay the fine. I was breaking the rules.", 3: "Apologize immediately. Did I put someone in danger?", 4: "Show her your Mr.Mime in an attempt to distract her. Maybe she'll forget why she even pulled you over"}},
        6: {Question: "Time to choose a starter. You pick...", Options: {1: "Squirtle. The first gym is rock and I will breeze by.", 2: "Charmander. It will be hard at first but he's the most powerful in the end", 3: "Bulbasaur. There's an overabundance of unchosen Bulba's that need homes.", 4: "Pickachu. Everyone loves him for a reason!"}},
        7: {Question: "Someone offers to trade a high level Lapras with your original starter companion.", Options: {1: "And abandon my friend? I think not.", 2: "Please. I'll be able to train my starter to far exceed that pokemon", 3: "An instant upgrade to my party? Of course!", 4: "Only if it knows surf. I still need to visit the islands!"}},
        8: {Question: "Your Pokemon knocks over your gaming system and breaks it... you", Options: {1: "Forgive your Pokemon and clean it up. Mistakes happen!", 2: "Clean it up, but you are going to have to go out and battle to make that money back! ", 3: "Reprimand them and no treats for a week!", 4: "Who hasn't thrown their Wiimote through the TV? Laugh it off."}},
        9: {Question: "You have a ditto, you make him transform into...", Options: {1: "Another ditto.", 2: "Whatever Pokemon is needed to face my current opponent.", 3: "Mr. Mime, he doesn't get enough representation.", 4: "Mewtwo, the most powerful Pokemon!"}},
        10: {Question: "What do you look for in Pokemon?", Options: {1: "The strongest ones.", 2: "The ones I feel like I connect with.", 3: "The ones that will balance out my team.", 4: "The ones that look the coolest, cutest, etc."}},
        11: {Question: "It's a lovely day in Kanto, you...", Options: {1: "Take a bike ride and enjoy the day!", 2: "Defeat more gym leaders!", 3: "Level up my Pokemon, stock up on items and prepare for my next adventure.", 4: "Spend time with family and friends!"}},
        12: {Question: "A legendary Pokemon appears, but your party is injured. You...", Options: {1: "Run Away! Can't risk my party getting defeated.", 2: "Tough it out. Who knows when I'll get another chance to catch it?", 3: "Use my Masterball. Perfect opportuinty!", 4: "Oh Please. My Magikarp knows flail."}},
        13: {Question: "You encounter a large tree blocking your path.", Options: {1: "Cut it ! Burn it! Nothing stops me!", 2: "Carefully dig it up and replant it on the side of the road.", 3: "Fly over it. My Pokemon literally have wings...", 4: "There must be a way around it. I'd start looking."}},
        14: {Question: "You team up with a trainer for a double Pokemon battle. You want a trainer who...", Options: {1: "Is here to have fun!", 2: "Will fight to the end and never give up!", 3: "Works together with me to defeat our opponents!", 4: "Let's us equally contribute to the battle."}},
        15: {Question: "You've just defeated a Gym Trainer. You...", Options: {1: "Get the badge and go. I've got a championship to win!", 2: "Shake their hand and congratulate them on a battle well fought. ", 3: "Taunt them. They used like 4 potions in the middle of the fight!", 4: "Ask them for a rematch. Gotta make sure my win wasn't a fluke."}},
        16: {Question: "You send a postcard to a friend. What exciting news do you have to share?", Options: {1: "I won a contest!", 2: "I visited a Museum!", 3: "I made a new friend!", 4: "I took a spa day!"}},
        17: {Question: "Is it important for you and your Pokemon to get quality sleep?", Options: {1: "No, we can't waste time! We have to get ahead!", 2: "If sleep will help us battle better, then I'm all for it.", 3: "Quality sleep? We sleep all day!", 4: "Whatever is best for my Pokemon and I!"}},
        18: {Question: "What is your real test? What is your cause?", Options: {1: "To become close with all my Pokemon! I love my Pokemon!", 2: "To have fun and go on adventures with my Pokemon! There's so much to explore with them!", 3: "To find the best possible ways to make my Pokemon the most powerful. Superior planning and intelligence will win our fights.", 4: "To catch them is my real test, to train them is my cause."}},
        19: {Question: "There is a festival going on in Cerulean City, but you're about to challenge the gym in Saffron City. You...", Options: {1: "Stop at the festival. The gym isn't going anywhere!", 2: "The festival might have important items to help me in my battle. Better check it out.", 3: "My Pokemon need a rest. I should take a nap at the PokeCenter.", 4: "The festival can wait! I've got a gym badge to earn!"}},
        20: {Question: "A stray cat appears in front of you. What do you do?", Options: {1: "Close enough to a Pokemon. Let's Battle!", 2: "Scan it with the Pokedex. What even is that?", 3: "Better leave it alone. Could be a dangerous legendary Pokemon.", 4: "Pet it, like I do with all new wild and possibly feral creatures."}},
    }

    const handleAnswer = () => {
		if () {
			setAnswer();
		}
    

        const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questionObj.length) setCurrentQuestion(nextQuestion);
        }

    const addAnswer1 = (e) => {
        setAnswer1(e.target.value);
    }

    const addAnswer2 = (e) => {
        setAnswer2(e.target.value);
    }

    const addAnswer3 = (e) => {
        setAnswer3(e.target.value);
    }

    const addAnswer4 = (e) => {
        setAnswer4(e.target.value);
    }

    const addAnswer5 = (e) => {
        setAnswer5(e.target.value);
    }

    const addAnswer6 = (e) => {
        setAnswer6(e.target.value);
    }

    const addAnswer7 = (e) => {
        setAnswer7(e.target.value);
    }

    const addAnswer8 = (e) => {
        setAnswer8(e.target.value);
    }

    const addAnswer9 = (e) => {
        setAnswer9(e.target.value);
    }

    const addAnswer10 = (e) => {
        setAnswer10(e.target.value);
    }

    const addAnswer11 = (e) => {
        setAnswer11(e.target.value);
    }

    const addAnswer12 = (e) => {
        setAnswer12(e.target.value);
    }

    const addAnswer13 = (e) => {
        setAnswer13(e.target.value);
    }

    const addAnswer14 = (e) => {
        setAnswer14(e.target.value);
    }

    const addAnswer15 = (e) => {
        setAnswer15(e.target.value);
    }

    const addAnswer16 = (e) => {
        setAnswer16(e.target.value);
    }

    const addAnswer17 = (e) => {
        setAnswer17(e.target.value);
    }

    const addAnswer18 = (e) => {
        setAnswer18(e.target.value);
    }

    const addAnswer19 = (e) => {
        setAnswer19(e.target.value);
    }

    const addAnswer20 = (e) => {
        setAnswer20(e.target.value);
    }

    return (
		<div className='questions-form'>
			<>
            { }
				<div className='question-section'>
					<div className='question-count'>
						<span>Question {currentQuestion+1}</span>/20
					</div>
					<div className='question-text'>{questionObj[currentQuestion].Question}</div>
				</div>
				<div className='answer-section'>
                    {questionObj[currentQuestion].Options.map((answerOptions) => (
						<button onClick={() => handleAnswer()}>{Options.answer text...}</button>
					))}
				</div>
			</>
		</div>
	);
}

export default Questionnaire


