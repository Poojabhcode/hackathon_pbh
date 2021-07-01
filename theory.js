const puppeteer = require("puppeteer");

(async function () {
    let totalTopics = 0;
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        defaultViewport: null,
        args: ["--start-Maximized"],
    
    });
    const page = await browser.newPage();
    await page.goto("https://www.google.com");

    await page.type("input.gLFyf.gsfi", "java studytonight");
    await page.keyboard.press("Enter");

    await page.waitForSelector("h3.LC20lb.DKV0Md",{visible: true});
    await page.click("h3.LC20lb.DKV0Md");
    
 
    await page.waitForSelector(".counter-list li a");

    await page.evaluate(function (tt){
      let  a = document.querySelectorAll(
        ".counter-list li a"
      ); 
  
      setInterval(function(){
          if(a.length != tt){
              a[a.length-1].scrollIntoView();
              a = document.querySelectorAll(
                ".counter-list li a"
              ); 
          }
      }, 500);
  }, totalTopics);
  
      await page.waitForSelector(".counter-list li a");
    
    let link2 = await page.evaluate(function () {
        
        let allAnchors2 = document.querySelectorAll(".counter-list li a");
       
    
        let links2 = [];
        for (let i = 0; i < allAnchors2.length; i++) {
            links2.push("https://www.studytonight.com" + allAnchors2[i].getAttribute("href"));
        }
    
        return links2;
      });

         
        totalTopics = await page.evaluate(function(){
        let a = document.querySelectorAll(".counter-list li a");
        
        let nameArray2=[];
        for(let i=0;i<a.length;i++){
        let s = a[i].innerText;
        nameArray2.push(s);
        }
        return nameArray2;
    });


    for(let i=0;i<totalTopics.length;i++){
        console.log(totalTopics[i]);
        console.log(link2[i],"\n");
        }

      
       await browser.close();


})();