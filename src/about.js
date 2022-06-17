export function about() {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const leadCont = document.createElement("div");
    leadCont.classList.add("lead-container")
    const leadImg = document.createElement("img");
    leadImg.classList.add("lead-img");
    leadImg.src = '../src/assets/pexels-oleksandr-pidvalnyi-332090.jpg';
    leadImg.alt = 'Lead Img';
    leadCont.append(leadImg);
    contentDiv.appendChild(leadCont);

    const firstSection = document.createElement("div");
    firstSection.classList.add("first-section-paragraph");
    firstSection.textContent = "Cassual Restaurant, combined with the prominent page, gives the brand a modern, forward-thinking feel, and this is a great investment for a business aiming at future rapid growth. However, this website probably cost a fair chunk to build - so this route certainly isnt for everyone.";
    contentDiv.appendChild(firstSection);
}