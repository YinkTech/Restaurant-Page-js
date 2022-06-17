export function pageload() {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const leadCont = document.createElement("div");
    leadCont.classList.add("lead-container")
    const leadImg = document.createElement("img");
    leadImg.classList.add("lead-img");
    leadImg.src = '../src/assets/pexels-cassiano-psomas-1045199.jpg';
    leadImg.alt = 'Lead Img';
    leadCont.append(leadImg);
    contentDiv.appendChild(leadCont);

    const firstSection = document.createElement("div");
    firstSection.classList.add("first-section-paragraph");
    firstSection.textContent = "Cassual Restaurant, combined with the prominent page, gives the brand a modern, forward-thinking feel, and this is a great investment for a business aiming at future rapid growth. However, this website probably cost a fair chunk to build - so this route certainly isnt for everyone.";
    contentDiv.appendChild(firstSection);

    const headinf = document.createElement("h1");
    headinf.classList.add("headdinf");
    headinf.textContent = "Dishes Available";
    contentDiv.appendChild(headinf);

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

    const fifthDish = document.createElement("div");
    fifthDish.classList.add("firstDish");
    const fifthImg = document.createElement("img");
    fifthImg.classList.add("first-dish-imag");
    fifthImg.src = "../src/assets/pexels-tookapic-7782.jpg";
    fifthDish.textContent = "Stake with Chips as low as \n $7";
    fifthImg.alt = "fifth dish Image";
    
    fifthDish.append(fifthImg);
    dishesContainer.append(fifthDish);

    const thirdDish = document.createElement("div");
    thirdDish.classList.add("firstDish");
    const thirdImg = document.createElement("img");
    thirdImg.classList.add("first-dish-imag");
    thirdImg.src = "../src/assets/pexels-chevanon-photography-312418.jpg";
    thirdDish.textContent = "Sun creamed Tea as low as \n $3";
    thirdImg.alt = "third dish Image";
    
    thirdDish.append(thirdImg);
    dishesContainer.append(thirdDish);

    contentDiv.appendChild(dishesContainer);

}