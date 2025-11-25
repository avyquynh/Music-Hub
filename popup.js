const popup = document.getElementById("genre-popup");
const genreTitle = document.getElementById("genre-title");
const genreBody = document.getElementById("genre-body");
const genreSubgenre = document.getElementById("genre-subgenre");
const genreExamples = document.getElementById("genre-examples");
const genreEmbedLink = document.getElementById("genre-embed-link");
const closeButton = document.getElementsByClassName("close-button")[0];

const genreLinks = document.querySelectorAll('.open-popup');
function createIframeHTML(embedID) {
    const iframeSrc = `https://www.youtube.com/embed/${embedID}`;
    return `<iframe width="325" height="250" src="${iframeSrc}" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>`;
}
function openPopup(genre, description, subgenre, examples, embedCodes) {
    genreTitle.textContent = genre;
    genreBody.textContent = description;
    genreSubgenre.innerHTML = subgenre;
    genreExamples.innerHTML = examples;
    
    let allIframesHTML = '';
    embedCodes.forEach(embedID => {
        if (embedID) {
            allIframesHTML += createIframeHTML(embedID);
        }
    });
    
    genreEmbedLink.innerHTML = allIframesHTML;
    
    popup.style.display = "block";
    document.body.style.overflow = 'hidden'; 
}

genreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const genreName = this.getAttribute('data-genre');
        const genreDesc = this.getAttribute('data-description');
        const genreSub = this.getAttribute('data-subgenre');
        const genreExample = this.getAttribute('data-example');
        
        const embedIDs = [];
        let i = 1;
        let embedID = this.getAttribute(`data-embed${i}`);
        while (embedID) {
            embedIDs.push(embedID);
            i++;
            embedID = this.getAttribute(`data-embed${i}`);
        }

        openPopup(genreName, genreDesc, genreSub, genreExample, embedIDs);
    });
});

closeButton.onclick = function() {
    popup.style.display = "none";
    document.body.style.overflow = 'auto'; 
    genreEmbedLink.innerHTML = '';
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        document.body.style.overflow = 'auto'; 
        genreEmbedLink.innerHTML = '';
    }
}