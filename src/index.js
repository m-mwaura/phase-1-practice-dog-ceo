//console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById("dog-image-container");
        data.message.forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Dog Name";
            img.style.width = "300px";
            img.style.margin = "10px";
            imageContainer.appendChild(img);
        });
    });

/////////////////////////////////////////////////////////////

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
    .then(response => response.json())
    .then (data => {
        const breedList = document.getElementById("dog-breeds");
        for (const breed in data.message){
            const li = document.createElement("li");
            li.textContent = breed;
            li.style.cursor = "pointer";
            breedList.appendChild(li);
        }

///////////////////////////////////////////////////////

    breedList.addEventListener("click", event => {
        if (event.target.tagName === "Li"){
            event.target.style.color = "blue";
        
        }
    });

///////////////////////////////////////////////////

    const breedDropDown = document.getElementById("breed-dropdown");
    breedDropDown.addEventListener("change", event => {
        const selectedLetter = event.target.value;
        const breedItems = Array.from(breedList.children);

        breedItems.forEach(li => {
            if (li.textContent.startsWith(selectedLetter)) {
                li.style.display = "list-item";

            } else {
                    li.style.display = "none";
                
                }
            });
        });
    });

});

