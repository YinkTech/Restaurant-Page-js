import firstImge from './assets/pexels-dhyamis-kleber-3584317.jpg';
import secondImage from './assets/pexels-fadime-erbass-11572734.jpg';
import thirdImage from './assets/pexels-chevanon-photography-312418.jpg';
import forthImage from './assets/pexels-brett-jordan-825661.jpg';
import fifthImage from './assets/pexels-tookapic-7782.jpg';
import sixImage from './assets/pexels-tookapic-9708.jpg';


export const dishes = () => {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const dishesContainer = document.createElement("div");
    dishesContainer.classList.add("dishescont");

    const firstDish = document.createElement("div");
    firstDish.classList.add("firstDish");
    const firstImg = document.createElement("img");
    firstImg.classList.add("first-dish-imag");
    firstImg.src = firstImge;
    firstDish.textContent = "Black Tea as low as \n $2";
    firstImg.alt = "first dish Image";
    
    firstDish.append(firstImg);
    dishesContainer.append(firstDish);

    const secondDish = document.createElement("div");
    secondDish.classList.add("firstDish");
    const secondImg = document.createElement("img");
    secondImg.classList.add("first-dish-imag");
    secondImg.src = secondImage;
    secondDish.textContent = "Creamed Tea as low as \n $2";
    secondImg.alt = "second dish Image";
    
    secondDish.append(secondImg);
    dishesContainer.append(secondDish);

    const thirdDish = document.createElement("div");
    thirdDish.classList.add("firstDish");
    const thirdImg = document.createElement("img");
    thirdImg.classList.add("first-dish-imag");
    thirdImg.src = thirdImage;
    thirdDish.textContent = "Sun creamed Tea as low as \n $3";
    thirdImg.alt = "third dish Image";
    
    thirdDish.append(thirdImg);
    dishesContainer.append(thirdDish);

    const forthDish = document.createElement("div");
    forthDish.classList.add("firstDish");
    const forthImg = document.createElement("img");
    forthImg.classList.add("first-dish-imag");
    forthImg.src = forthImage;
    forthDish.textContent = "Jordan Pizza as low as \n $5";
    forthImg.alt = "forth dish Image";
    
    forthDish.append(forthImg);
    dishesContainer.append(forthDish);

    const fifthDish = document.createElement("div");
    fifthDish.classList.add("firstDish");
    const fifthImg = document.createElement("img");
    fifthImg.classList.add("first-dish-imag");
    fifthImg.src = fifthImage;
    fifthDish.textContent = "Stake with Chips as low as \n $7";
    fifthImg.alt = "fifth dish Image";
    
    fifthDish.append(fifthImg);
    dishesContainer.append(fifthDish);

    const sixDish = document.createElement("div");
    sixDish.classList.add("firstDish");
    const sixImg = document.createElement("img");
    sixImg.classList.add("first-dish-imag");
    sixImg.src = sixImage;
    sixDish.textContent = "Pizza Fruits low as \n $10";
    sixImg.alt = "six dish Image";
    
    sixDish.append(sixImg);
    dishesContainer.append(sixDish);

    contentDiv.appendChild(dishesContainer);

}