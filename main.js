const puppeteer = require("puppeteer");
const fs = require('fs');
const xlsx = require("xlsx");
let wb="";
var nodemailer = require('nodemailer');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
    readline.question('Enter subject name and youtube channel name!\n', tutorialname => {
    console.log(`please wait finding ${tutorialname}!\n`);
   
  
    readline.question('Which subject theory you want?\n', theoryname => {
    console.log(`please wait preparing file ${theoryname}!\n`);
    

    readline.question('subject?\n', subject => {
    console.log(`ready to send ${subject}!\n`);

    readline.question('enter email id of reciever!\n', email_id => {
      console.log(`please wait, sending file ${email_id}!\n`);
   
    readline.close();
    readline.close();
    readline.close();
    readline.close();

    let finalArr = [];
    async function A() {
    let totalVideos = [];

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        defaultViewport: null,
        args: ["--start-Maximized"],

    });

    const page = await browser.newPage();
    await page.goto("https://www.youtube.com");
    await page.type("ytd-searchbox#search", tutorialname+" playlist");
    await Promise.all[page.click(".style-scope ytd-searchbox #search-icon-legacy"), page.waitForNavigation()];
    await page.waitForSelector("#view-more", { visible: true });
    await page.click("#view-more");
    await page.waitForSelector(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");


    await page.evaluate(function (tv) {
    let a = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");

           setInterval(function () {
            if (a.length != tv) {
                a[a.length - 1].scrollIntoView();
                a = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
            }
        }, 1000);
    }, totalVideos);

  
    await page.waitForSelector(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
        let link = await page.evaluate(function () {

        let allAnchors = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
        let links = [];
        for (let i = 0; i < allAnchors.length; i++) {
            links.push("https://www.youtube.com" + allAnchors[i].getAttribute("href"));
        }
        return links;
    });
    await page.waitForSelector(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
    totalVideos = await page.evaluate(function () {
        let a = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
        let nameArray = [];
        for (let i = 0; i < a.length; i++) {
            let s = a[i].innerText;
            nameArray.push(s);
        }
        return nameArray;
    });

    let arr = [];
    for (let i = 0; i < totalVideos.length; i++) {
        let a = [];

        a.push(totalVideos[i])
        a.push(link[i]);
        arr.push(a);
    }
   
    finalArr.push(arr);
    await browser.close();
    console.log(finalArr);

    fs.writeFile('Studymaterial.json', JSON.stringify(finalArr), function (err) {
        if (err) throw err;
        console.log("complete");
    })
    
    const ws = xlsx.utils.aoa_to_sheet(arr);
    var wscols = [
        { wch: 95 },
        { wch: 95 }
    ];
    var wscols = [
        { wch: 95 },
        { wch: 95 }
    ];

    ws['!cols'] = wscols;
    xlsx.utils.book_append_sheet(wb, ws);
    xlsx.writeFile(wb, subject+".xlsx");
    xlsx.utils.book_append_sheet(wb, ws);

 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'oliviasmithcsschool@gmail.com',
          pass: '#olivia2099'
        }
      });
      
      var mailOptions = {
        from: 'oliviasmithcsschool@gmail.com',
        to: email_id,
        subject: 'Study material of  '+subject,
        text: 'Here is your file of '+subject+' links!',
        attachments: [
            {
                filename: subject+'.xlsx',
                path: __dirname + '/'+subject+'.xlsx'
            }
        ]
      };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent through Node.js : ' + info.response);
        }
      });
};


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
    await page.type("input.gLFyf.gsfi", theoryname+" studytonight");
    await page.keyboard.press("Enter");
    await page.waitForSelector("h3.LC20lb.DKV0Md", { visible: true });
    await page.click("h3.LC20lb.DKV0Md");
    await page.waitForSelector(".counter-list li a");

    await page.evaluate(function (totaltopics) {
        let a = document.querySelectorAll(".counter-list li a");

        setInterval(function () {
            if (a.length != totaltopics) {
                a[a.length - 1].scrollIntoView();
                a = document.querySelectorAll(".counter-list li a");
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
    await page.waitForSelector(".counter-list li a");

    totalTopics = await page.evaluate(function () {
        let a = document.querySelectorAll(".counter-list li a");
        let nameArray2 = [];
        for (let i = 0; i < a.length; i++) {
            let s = a[i].innerText;
            nameArray2.push(s);
        }
        return nameArray2;
    });

    let arr = [];
    for (let i = 0; i < totalTopics.length; i++) {
        let a = [];
        a.push(totalTopics[i])
        a.push(link2[i]);
        arr.push(a);
    }
     wb = xlsx.utils.book_new();
    const ws = xlsx.utils.aoa_to_sheet(arr);
    var wscols = [
        { wch: 50 },
        { wch: 65 }

    ];
    var wscols = [
        { wch: 50 },
        { wch: 65 }
    ];

    ws['!cols'] = wscols;
    xlsx.utils.book_append_sheet(wb, ws);
    finalArr.push(arr);
    await browser.close();
    A();

})();
});});});});
