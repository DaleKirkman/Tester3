var imgArr = ["pod1.png","pod2.png","pod3.png"];

function displayPodcast(){
    var podcasts = Math.floor(Math.random() * (imgArr.length));
    document.podcasts.src="images-podcasts/" + imgArr[podcasts];
}
