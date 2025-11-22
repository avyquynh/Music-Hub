const popup = document.getElementById("genre-popup");
const genreTitle = document.getElementById("genre-title");
const genreBody = document.getElementById("genre-body");
const closeButton = document.getElementsByClassName("close-button")[0];

const genreLinks = document.querySelectorAll('.open-popup');

function openPopup(genre, description) {
    genreTitle.textContent = genre;
    genreBody.textContent = description;
    
    popup.style.display = "block";
    document.body.style.overflow = 'hidden'; 
}
genreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const genreName = this.getAttribute('data-genre');
        const genreDesc = this.getAttribute('data-description');
        
        openPopup(genreName, genreDesc);
    });
});


closeButton.onclick = function() {
    popup.style.display = "none";
    document.body.style.overflow = 'auto'; 
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        document.body.style.overflow = 'auto'; 
    }
}