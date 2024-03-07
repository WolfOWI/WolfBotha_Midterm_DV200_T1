// Animal Cards (Types Page)

// Import Animal images
import catImg from "../../assets/img/cardImg/cat.png";
import dogImg from "../../assets/img/cardImg/dog.png";
import fishImg from "../../assets/img/cardImg/fish.png";
import hamsterImg from "../../assets/img/cardImg/hamster.png";
import hedgehogImg from "../../assets/img/cardImg/hedgehog.png";
import parrotImg from "../../assets/img/cardImg/parrot.png";
import rabbitImg from "../../assets/img/cardImg/rabbit.png";
import ratImg from "../../assets/img/cardImg/rat.png";
import turtleImg from "../../assets/img/cardImg/turtle.png";

// Description & Image Source
let descr = "";
let imgSrc = null;

function AnimalCard(props) {
  // Type property determines other subcomponents:
  switch (props.type) {
    case "Cat":
      descr =
        "Cats can make over 100 different sounds. While dogs can only make around 10, cats have a vast array of vocalizations, including meows, purrs, hisses, and growls.";
      imgSrc = catImg;
      break;
    case "Dog":
      descr =
        "Dogs have a sense of time. They can predict future events, like regular walk times, feeding times, and can sense how long their owner has been away.";
      imgSrc = dogImg;
      break;
    case "Fish":
      descr =
        "Some species of fish can recognize themselves in a mirror, an ability that indicates a certain level of self-awareness. This is known as the mirror test.";
      imgSrc = fishImg;
      break;
    case "Hamster":
      descr =
        "Hamsters have cheek pouches that extend to their shoulders, which they use to transport food and bedding materials to their nests.";
      imgSrc = hamsterImg;
      break;
    case "Hedgehog":
      descr =
        "When hedgehogs encounter new scents or tastes, they perform a ritual called 'anointing,' where they create a frothy saliva and spread it over their spines.";
      imgSrc = hedgehogImg;
      break;
    case "Parrot":
      descr =
        "Parrots have the cognitive ability of a 4-6 year-old child in many cases, with the ability to understand concepts like bigger vs. smaller, same vs. different, and even the concept of zero.";
      imgSrc = parrotImg;
      break;
    case "Rabbit":
      descr =
        "Rabbits can purr similar to cats when they are content and relaxed, though it's more of a teeth chattering sound than the throat vibration found in cats.";
      imgSrc = rabbitImg;
      break;
    case "Rat":
      descr =
        "Pet rats are incredibly intelligent and can learn to perform complex tasks. They are capable of learning their names, responding to verbal and visual commands, and can even be taught to navigate mazes or perform tricks, such as fetching items or rolling over.";
      imgSrc = ratImg;
      break;
    case "Turtle":
      descr =
        "Some species of turtles can breathe through their butts. Technically called cloacal respiration, it allows them to stay underwater for longer periods without coming up for air.";
      imgSrc = turtleImg;
      break;

    default:
      break;
  }

  return (
    <div
      class="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition"
      href="#"
    >
      <img class="w-full rounded-t-xl" src={imgSrc} alt={`${props.type} pic`} />
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">{props.type}</h3>
        <p class="mt-1 text-gray-500">{descr}</p>
      </div>
    </div>
  );
}

export default AnimalCard;
