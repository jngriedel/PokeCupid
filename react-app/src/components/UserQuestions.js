import React from "react";
import UserAnswers from "./UserAnswers";

const UsersAnswers = ({ user }) => {
  // const answersArr = useSelector(state => state.session.user.answers)

  const questionObj = {
    1: {
      Question: "What's the most important part of a Pokemon Battle?",
      Options: {
        0: "To have fun!",
        1: "To win!",
        2: "To Level Up!",
        3: "To bond with my Pokémon!",
      },
    },
    2: {
      Question: "You encounter an injured wild Pokemon. What do you do?",
      Options: {
        0: "Give it a Potion and ask it to join my team.",
        1: "Try to capture it. It can't fight back",
        2: "Scan it with my Pokedex. I haven't seen that one yet!",
        3: "Take it to the nearest PokeCenter to heal",
      },
    },
    3: {
      Question: "When setting out for the day, your main goal is to...",
      Options: {
        0: "Meet new trainers and explore.",
        1: "Be the best trainer there is.",
        2: "Create a dynamic and effective battling team.",
        3: "To bond with my Pokemon!",
      },
    },
    4: {
      Question: "Is it important that your Pokemon is happy?",
      Options: {
        0: "It's not as important as becomming League Champion",
        1: "My Pokemon's happiness is my highest priority!",
        2: "I hope that my pokemon and I are having fun adventuring.",
        3: "It's important because a happy pokemon is a better battler",
      },
    },
    5: {
      Question:
        "Oh no! Officer Jenny has stopped you on the road for speeding on your Bicycle. You...",
      Options: {
        0: "Challenge her to a battle to get out of a ticket.",
        1: "Pay the fine. I was breaking the rules.",
        2: "Apologize immediately. Did I put someone in danger?",
        3: "Show her your Mr.Mime in an attempt to distract her. Maybe she'll forget why she even pulled you over",
      },
    },
    6: {
      Question: "Time to choose a starter. You pick...",
      Options: {
        0: "Squirtle. The first gym is rock and I will breeze by.",
        1: "Charmander. It will be hard at first but he's the most powerful in the end",
        2: "Bulbasaur. There's an overabundance of unchosen Bulba's that need homes.",
        3: "Pikachu. Everyone loves him for a reason!",
      },
    },
    7: {
      Question:
        "Someone offers to trade a high level Lapras with your original starter companion.",
      Options: {
        0: "And abandon my friend? I think not.",
        1: "Please. I'll be able to train my starter to far exceed that pokemon",
        2: "An instant upgrade to my party? Of course!",
        3: "Only if it knows surf. I still need to visit the islands!",
      },
    },
    8: {
      Question:
        "Your Pokemon knocks over your gaming system and breaks it... you",
      Options: {
        0: "Forgive your Pokemon and clean it up. Mistakes happen!",
        1: "Clean it up, but you are going to have to go out and battle to make that money back! ",
        2: "Reprimand them and no treats for a week!",
        3: "Who hasn't thrown their Wiimote through the TV? Laugh it off.",
      },
    },
    9: {
      Question: "You have a ditto, you make him transform into...",
      Options: {
        0: "Another ditto.",
        1: "Whatever Pokemon is needed to face my current opponent.",
        2: "Mr. Mime, he doesn't get enough representation.",
        3: "Mewtwo, the most powerful Pokemon!",
      },
    },
    10: {
      Question: "What do you look for in Pokemon?",
      Options: {
        0: "The strongest ones.",
        1: "The ones I feel like I connect with.",
        2: "The ones that will balance out my team.",
        3: "The ones that look the coolest, cutest, etc.",
      },
    },
    11: {
      Question: "It's a lovely day in Kanto, you...",
      Options: {
        0: "Take a bike ride and enjoy the day!",
        1: "Defeat more gym leaders!",
        2: "Level up my Pokemon, stock up on items and prepare for my next adventure.",
        3: "Spend time with family and friends!",
      },
    },
    12: {
      Question:
        "A legendary Pokemon appears, but your party is injured. You...",
      Options: {
        0: "Run Away! Can't risk my party getting defeated.",
        1: "Tough it out. Who knows when I'll get another chance to catch it?",
        2: "Use my Masterball. Perfect opportuinty!",
        3: "Oh Please. My Magikarp knows flail.",
      },
    },
    13: {
      Question: "You encounter a large tree blocking your path.",
      Options: {
        0: "Cut it ! Burn it! Nothing stops me!",
        1: "Carefully dig it up and replant it on the side of the road.",
        2: "Fly over it. My Pokemon literally have wings...",
        3: "There must be a way around it. I'd start looking.",
      },
    },
    14: {
      Question:
        "You team up with a trainer for a double Pokemon battle. You want a trainer who...",
      Options: {
        0: "Is here to have fun!",
        1: "Will fight to the end and never give up!",
        2: "Works together with me to defeat our opponents!",
        3: "Lets us equally contribute to the battle.",
      },
    },
    15: {
      Question: "You've just defeated a Gym Trainer. You...",
      Options: {
        0: "Get the badge and go. I've got a championship to win!",
        1: "Shake their hand and congratulate them on a battle well fought. ",
        2: "Taunt them. They used like 4 potions in the middle of the fight!",
        3: "Ask them for a rematch. Gotta make sure my win wasn't a fluke.",
      },
    },
    16: {
      Question:
        "You send a postcard to a friend. What exciting news do you have to share?",
      Options: {
        0: "I won a contest!",
        1: "I visited a Museum!",
        2: "I made a new friend!",
        3: "I took a spa day!",
      },
    },
    17: {
      Question:
        "Is it important for you and your Pokemon to get quality sleep?",
      Options: {
        0: "No, we can't waste time! We have to get ahead!",
        1: "If sleep will help us battle better, then I'm all for it.",
        2: "Quality sleep? We sleep all day!",
        3: "Whatever is best for my Pokemon and I!",
      },
    },
    18: {
      Question: "What is your real test? What is your cause?",
      Options: {
        0: "To become close with all my Pokemon! I love my Pokemon!",
        1: "To have fun and go on adventures with my Pokemon! There's so much to explore with them!",
        2: "To find the best possible ways to make my Pokemon the most powerful. Superior planning and intelligence will win our fights.",
        3: "To catch them is my real test, to train them is my cause.",
      },
    },
    19: {
      Question:
        "There is a festival going on in Cerulean City, but you're about to challenge the gym in Saffron City. You...",
      Options: {
        0: "Stop at the festival. The gym isn't going anywhere!",
        1: "The festival might have important items to help me in my battle. Better check it out.",
        2: "My Pokemon need a rest. I should take a nap at the PokeCenter.",
        3: "The festival can wait! I've got a gym badge to earn!",
      },
    },
    20: {
      Question: "A stray cat appears in front of you. What do you do?",
      Options: {
        0: "Close enough to a Pokemon. Let's Battle!",
        1: "Scan it with the Pokedex. What even is that?",
        2: "Better leave it alone. Could be a dangerous legendary Pokemon.",
        3: "Pet it, like I do with all new wild and possibly feral creatures.",
      },
    },
  };

  return (
    <div className="answer-table">
      <>
        <div className="question">
          <table className="user-q-table">
            <thead>
              <tr>
                <th className="question-title">Question</th>
                <th className="answer-title">Answer</th>
              </tr>
            </thead>
            {Object.values(questionObj).map((question, i) => (
              <UserAnswers
                user={user}
                key={i}
                question={question}
                i={i}
                questionObj={questionObj}
              />
            ))}
          </table>
        </div>
      </>
    </div>
  );
};

export default UsersAnswers;
