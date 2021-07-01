const puppeteer = require("puppeteer");

(async function () {
    let totalVideos = [];
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        defaultViewport: null,
        args: ["--start-Maximized"],
    
    });


    const page = await browser.newPage();
    await page.goto( "https://www.youtube.com");

    await page.type("ytd-searchbox#search","java saurabh shukla playlist");

    await Promise.all[page.click(".style-scope ytd-searchbox #search-icon-legacy"),page.waitForNavigation()];
    await page.waitForSelector(".yt-simple-endpoint style-scope.yt-formatted-string",{visible:true})
    let a =await page.$$(".yt-simple-endpoint style-scope.yt-formatted-string");
    await page.evaluate(function(){
      let x = document.querySelectorAll(".yt-simple-endpoint.style-scope.yt-formatted-string")
      x[1].click()

    })
   

   await page.waitForSelector("#view-more",{visible: true});
    await page.click("#view-more");
    
       await page.waitForSelector(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
       let link = await page.evaluate(function () {
        
        let allAnchors = document.querySelectorAll(
          ".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer"
        );
    
        let links = [];
        for (let i = 0; i < allAnchors.length; i++) {
          links.push("https://www.youtube.com" + allAnchors[i].getAttribute("href"));
        }
    
        return links;
      });

 
    await page.waitForSelector(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
    
    totalVideos = await page.evaluate(function(){
        let a = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
        let nameArray=[];
        for(let i=0;i<a.length;i++){
        let s = a[i].innerText;
        nameArray.push(s);
        }
        return nameArray;
    });
          
   let p = new Promise(function (resolve, reject) {
        let interval = setInterval(function () {
            a = document.querySelectorAll(
                ".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer"
              ); 
          if (a.length != tv) {
            let videoContainer = document.querySelector("#contents");
            window.scrollTo(0, videoContainer.scrollHeight);
            a = document.querySelectorAll(
                ".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer"
              ); 
           
          } else {
            clearInterval(interval);
            resolve();
          }
        }, 1000);
      });
  
      await p;


      await page.evaluate(function (tv){
          let  a = document.querySelectorAll(
            ".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer"
          ); 

          setInterval(function(){
              if(a.length != tv){
                  a[a.length-1].scrollIntoView();
                  a = document.querySelectorAll(
                    ".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer"
                  ); 
              }
          }, 500);
      }, totalVideos);

    for(let i=0;i<totalVideos.length;i++){
    console.log(totalVideos[i]);
    console.log(link[i],"\n");
    }


    await browser.close();

})();

