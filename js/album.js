document.addEventListener('DOMContentLoaded', function() {
    var animalButton = document.getElementById("animalButton");
    var natureButton = document.getElementById("natureButton");
    var photoAlbums = document.getElementById("phtoAlbum");

     // Set up an array for the photo album using the var
    var naturePhotos = ["./images/mountain1.jpg", "./images/nightsky.jpg", "./images/trees.jpg", "./images/smalltree.jpg", "./images/mountain.jpg", "./images/fallcolors.jpg", "./images/aurora1.jpg"];
    // Set up the array for the animals album
    var animalPhotos = ["./images/animals1.jpg", "./images/animals2.jpg", "./images/animals3.jpg", "./images/animals4.jpg", "./images/animals5.jpg", "./images/animals6.jpg", "./images/animals7.jpg", "./images/animals8.jpg"];
    

    // This part was learned for this project through geeks for geeks and w3 schools.
    // This is how it pretty much works so it is a function to display the album
    // It sets the source of the image, then last but not least it adds photos to the container

    function showPhotos(photosArray) {
        photoAlbums.innerHTML = "";
        photosArray.forEach(function(photo){
            var img = document.createElement("img");
            img.src = photo;
            photoAlbums.appendChild(img);
        });
    }

    // Start the function to display our animal photos
    function displayAnimalPhotos() {
        showPhotos(animalPhotos);
    }

    // The function to display the nature photos
    function displayNaturePhotos() {
        showPhotos(naturePhotos);
    }

    // Added the click event listener to the buttons
    animalButton.addEventListener("click", displayAnimalPhotos);
    natureButton.addEventListener("click", displayNaturePhotos);

});
 