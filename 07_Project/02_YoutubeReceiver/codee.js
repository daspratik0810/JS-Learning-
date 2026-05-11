function showingYTVideo(ytid){

    let url;    //undefined
    
    let urlanalysis = ytid.split("");

    if(
        urlanalysis[0]=="h" ||
        urlanalysis[0]=="y" ||
        urlanalysis[0]=="w"
    ){

        let idOnly = ytid.split("=");          
        // idOnly = idOnly[1].split("&");

        url = "https://www.youtube.com/embed/" + idOnly[1];  // if input is complete url, which is then converted into embedded YT link

    } else {

        url = "https://www.youtube.com/embed/" + ytid;  // if input is YT video ID, which is then converted into embedded YT link
    }

    // Inject URL into iframe from HTML
    document.getElementById("ytframe").src = url;
   
}
