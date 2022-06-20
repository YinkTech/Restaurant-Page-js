import aboutImage from './assets/pexels-oleksandr-pidvalnyi-332090.jpg';

export let about = () => {
    const contentDiv = document.querySelector('#content');

    contentDiv.replaceChildren();

    const leadCont = document.createElement("div");
    leadCont.classList.add("lead-container")
    const leadImg = document.createElement("img");
    leadImg.classList.add("about-img");
    leadImg.src = aboutImage;
    leadImg.alt = 'about Lead Img';
    leadCont.append(leadImg);
    contentDiv.appendChild(leadCont);

    const firstSection = document.createElement("div");
    firstSection.classList.add("about-sec-paragraph");
    firstSection.textContent = `
                            Cassual Restuarant has developed to incorporate four superb takeout
                            areas in Toronto with additional to come sooner rather than later.
                            Our group takes pride in the way that we can furnish our new and faithful
                             clients with extraordinary tasting Indian-roused nourishment that is not normal for that at 
                            some other Indian eatery you visit
                                `;
    contentDiv.appendChild(firstSection);

    const para2 = document.createElement("div");
    para2.classList.add("about-paragraph");
    para2.textContent = "TEL: +2349069632934";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("div");
    para3.classList.add("about-paragraph");
    para3.textContent = "EMAIL: layinka4dat@gmail.com";
    contentDiv.appendChild(para3);

    const para4 = document.createElement("div");
    para4.classList.add("about-paragraph");
    para4.textContent = "Book appointment with us or visit our Cassual store anytime";
    contentDiv.appendChild(para4);
}
