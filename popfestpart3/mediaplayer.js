var video_list = ["videos/video10.mp4", "videos/video2.mp4", "videos/video5.mp4" , "videos/video12.mp4"]; //selected video name
var video_list2 = ["videos/video6.mp4", "videos/video11.mp4", "videos/video3.mp4" , "videos/video8.mp4"]; //selected video name
var video_index = 0;    
var videoPlayer = null;
var video_index2 = 0;    
var videoPlayer2 = null;




//selected image name
var img_list = ["images/artists/bilderbuch.jpg", "images/artists/wanda3.jpg", "images/artists/christina-sturmer3.jpg", 
                "images/artists/volbeat2.jpg", "images/artists/imagine-dragons.jpg", 
                "images/artists/opus.jpg"];  
let img_index = 0;
var artist_index = 1;

function load(){ //load the video/img in to the media players and play it
    
    videoPlayer = document.getElementById("VideoPlayer");
    videoPlayer.setAttribute("src" , video_list[video_index]);
    videoPlayer.play();

    videoPlayer2 = document.getElementById("VideoPlayer2");
    videoPlayer2.setAttribute("src" , video_list2[video_index2]);
    videoPlayer2.play();

    changeContent();


    console.log("body loaded");
}   



function onVideoEnded(){    // on the videos end check if there is any other video we want to play in the list if not set the playlist to its starting video
    fade(videoPlayer);
    if(video_index < video_list.length - 1){
        video_index++;
    }else{
        video_index = 0;
    }
    
    videoPlayer.setAttribute("src", video_list[video_index]);
    videoPlayer.play();


    fade(videoPlayer2);
    if(video_index2 < video_list2.length - 1){
        video_index2++;
    }else{
        video_index2 = 0;
    }
    
    videoPlayer2.setAttribute("src", video_list2[video_index2]);
    videoPlayer2.play();

}






//video player fade away (used when video ends) BETA VERSION
videoPlayer.oncanplaythrough = function() { 
    setTimeout(function() {
        var e = document.getElementById('myVideo');
        fade(e);
    }, 1000);
};

function fade(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 50);
}





 


function left(){

    if (artist_index > 1) {
        artist_index --;
        img_index --;
    } else {
            if (artist_index = 1){
                artist_index = 6;
                img_index = 5;
            }
    }
    
    changeimg();
    changeContent();
}

function right(){

    if (artist_index < 6) {
        artist_index ++;
        img_index ++;
    } else {
            if (artist_index = 6){
                artist_index = 1;
                img_index = 0;
            }
    }
    changeimg();
    changeContent();
}

function changeimg(){
    document.getElementById("artist").src = img_list[img_index];
}

function changeContent(){
    switch (artist_index) {
        case 1:
            document.getElementById("artistText").innerHTML = "Bilderbuch is among the most successful Austrian rock bands and known for their Art Pop music. The band has released 6 albums. The two latest singles were released this year and are waiting to be performed front of you!"; 
            document.getElementById("artistName").innerHTML = "Bilderbuch";

            document.getElementById("1").style.cssText = "background-color : #FFAE00 ; color : #FD1F4A;" ;
                document.getElementById("6").style.cssText = "background-color : unset ; color :#ffffff;" ;
                document.getElementById("2").style.cssText = "background-color : unset ; color :#ffffff;" ;
            break;
        
        case 2:
            document.getElementById("artistText").innerHTML = "Wanda is an Austrian indie pop band founded in Vienna in 2012. Their indie pop style is influenced by rock 'n' roll, as well as Austropop. They label their music as pop music with 'Amore'.";
            document.getElementById("artistName").innerHTML = "Wanda";
            document.getElementById("2").style.cssText = "background-color : #FFAE00 ; color : #FD1F4A;" ;
                document.getElementById("3").style.cssText = "background-color : unset ; color :#ffffff;" ;
                document.getElementById("1").style.cssText = "background-color : unset ; color :#ffffff;" ;
            break;

        case 3:
            document.getElementById("artistText").innerHTML = "Christina Stürmer is an Austrian singer and songwriter. With the release of her international debut album Schwarz Weiss, Stürmer became one of the biggest-selling Austrian artists to emerge in German-speaking Europe in the mid-2000s. Throughout a career spanning 15 years, Stürmer has sold over 2.0 million records.";    
            document.getElementById("artistName").innerHTML = "Christina Stürmer";
            document.getElementById("3").style.cssText = "background-color : #FFAE00 ; color : #FD1F4A;" ;
            document.getElementById("4").style.cssText = "background-color : unset ; color :#ffffff;" ;
            document.getElementById("2").style.cssText = "background-color : unset ; color :#ffffff;" ;
            break;

        case 4:
            document.getElementById("artistText").innerHTML = "Volbeat are a Danish rock band formed in Copenhagen in 2001. They play a fusion of rock and roll, heavy metal and rockabilly. Their second album Rock the Rebel/Metal the Devil received platinum status, and their 2010 release Beyond Hell/Above Heaven was subject to widespread international critical acclaim, receiving double platinum in Denmark, platinum in Finland and Germany, and gold in the United States, Sweden and Austria.";
            document.getElementById("artistName").innerHTML = "Volbeat";
            document.getElementById("4").style.cssText = "background-color : #FFAE00 ; color : #FD1F4A;" ;
                document.getElementById("3").style.cssText = "background-color : unset ; color :#ffffff;" ;
                document.getElementById("5").style.cssText = "background-color : unset ; color :#ffffff;" ;
            break;

        case 5:
            document.getElementById("artistText").innerHTML = "Imagine Dragons is an American pop rock band from Las Vegas, Nevada. Imagine Dragons have sold 77.5 million certified singles in the US and 20 million albums worldwide. They were the most streamed group of 2018 on Spotify and are the first rock act to have four songs, 'Radioactive', 'Demons', 'Believer' and 'Thunder', to surpass one billion streams each.";
            document.getElementById("artistName").innerHTML = "Imagine Dragons";
            document.getElementById("5").style.cssText = "background-color : #FFAE00 ; color : #FD1F4A;" ;
                document.getElementById("4").style.cssText = "background-color : unset ; color :#ffffff;" ;
                document.getElementById("6").style.cssText = "background-color : unset ; color :#ffffff;" ;
            break;

        case 6:
            document.getElementById("artistText").innerHTML = "Opus is a pop-rock group from Graz, Austria. The band is chiefly known for its 1985 single release, 'Live Is Life', which reached the Top 10 in several European countries.In August 2020, the band announced its planned breakup on December 21, 2021. On that day, there will be one last concert at the Graz Opera House."; 
            document.getElementById("artistName").innerHTML = "Opus";
            document.getElementById("6").style.cssText = "background-color : #FFAE00 ; color : #FD1F4A;" ;
                document.getElementById("5").style.cssText = "background-color : unset ; color :#ffffff;" ;
                document.getElementById("1").style.cssText = "background-color : unset ; color :#ffffff;" ;
            break;

        default:
            document.getElementById("artistText").innerHTML = "Bilderbuch is among the most successful Austrian rock bands and known for their Art Pop music. The band has released 6 albums. The two latest singles were released this year and are waiting to be performed front of you!"; 
            document.getElementById("1").style.cssText = "background-color : #FFAE00 ; color : #FD1F4A;" ;
            break;
    }
}

