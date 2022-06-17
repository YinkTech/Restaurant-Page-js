export function dishes() {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const dishesContainer = document.createElement("div");
    dishesContainer.classList.add("dishescont");

    const firstDish = document.createElement("div");
    firstDish.classList.add("firstDish");
    const firstImg = document.createElement("img");
    firstImg.classList.add("first-dish-imag");
    firstImg.src = "../src/assets/pexels-dhyamis-kleber-3584317.jpg";
    firstDish.textContent = "Black Tea as low as \n $2";
    firstImg.alt = "first dish Image";
    
    firstDish.append(firstImg);
    dishesContainer.append(firstDish);

    const secondDish = document.createElement("div");
    secondDish.classList.add("firstDish");
    const secondImg = document.createElement("img");
    secondImg.classList.add("first-dish-imag");
    secondImg.src = "../src/assets/pexels-fadime-erbass-11572734.jpg";
    secondDish.textContent = "Creamed Tea as low as \n $2";
    secondImg.alt = "second dish Image";
    
    secondDish.append(secondImg);
    dishesContainer.append(secondDish);

    const thirdDish = document.createElement("div");
    thirdDish.classList.add("firstDish");
    const thirdImg = document.createElement("img");
    thirdImg.classList.add("first-dish-imag");
    thirdImg.src = "../src/assets/pexels-chevanon-photography-312418.jpg";
    thirdDish.textContent = "Sun creamed Tea as low as \n $3";
    thirdImg.alt = "third dish Image";
    
    thirdDish.append(thirdImg);
    dishesContainer.append(thirdDish);

    const forthDish = document.createElement("div");
    forthDish.classList.add("firstDish");
    const forthImg = document.createElement("img");
    forthImg.classList.add("first-dish-imag");
    forthImg.src = "../src/assets/pexels-brett-jordan-825661.jpg";
    forthDish.textContent = "Jordan Pizza as low as \n $5";
    forthImg.alt = "forth dish Image";
    
    forthDish.append(forthImg);
    dishesContainer.append(forthDish);

    const fifthDish = document.createElement("div");
    fifthDish.classList.add("firstDish");
    const fifthImg = document.createElement("img");
    fifthImg.classList.add("first-dish-imag");
    fifthImg.src = "../src/assets/pexels-tookapic-7782.jpg";
    fifthDish.textContent = "Stake with Chips as low as \n $7";
    fifthImg.alt = "fifth dish Image";
    
    fifthDish.append(fifthImg);
    dishesContainer.append(fifthDish);

    const sixDish = document.createElement("div");
    sixDish.classList.add("firstDish");
    const sixImg = document.createElement("img");
    sixImg.classList.add("first-dish-imag");
    sixImg.src = "../src/assets/pexels-tookapic-9708.jpg";
    sixDish.textContent = "Pizza Fruits low as \n $10";
    sixImg.alt = "six dish Image";
    
    sixDish.append(sixImg);
    dishesContainer.append(sixDish);

    contentDiv.appendChild(dishesContainer);

    
}