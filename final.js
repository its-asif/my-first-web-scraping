const puppeteer = require('puppeteer');
require('dotenv').config();


// store all data in an object
const data = {};

const codeforcesUsername = process.env.CODEFORCES_USERNAME;
const VjudgeUsername = process.env.VJUDGE_USERNAME;
const LeetCodeUsername = process.env.LEETCODE_USERNAME;
const csesUsername = process.env.CSES_USERNAME;
const csesPHPSESSID = process.env.CSES_PHPSESSID; // cses cookie : can be found in the application tab in the browser

console.log("All My Problem Solved from Different Platforms");

//! Codeforces Problem Solved
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

  await page.goto(`https://codeforces.com/profile/${codeforcesUsername}`);

  // await page.waitForSelector('#pageContent > div:nth-child(3) > div > div.info > ul > li:nth-child(1) > span.smaller > span:nth-child(2)');

  const rating = await page.$eval('#pageContent > div:nth-child(3) > div > div.info > ul > li:nth-child(1) > span.smaller > span:nth-child(2)', element => element.textContent.trim());
  const solved = await page.$eval('#pageContent > div._UserActivityFrame_frame > div > div._UserActivityFrame_footer > div:nth-child(1) > div:nth-child(1) > div._UserActivityFrame_counterValue', element => element.textContent.trim());
  
  console.log("Codeforces");
  console.log("Rating:", rating);
  console.log("Solved:", solved);
  data.codeforcesRating = rating;
  data.codeforcesProblemsSolved = solved;

  await browser.close();
})();


//! LeetCode Problem Solved
// https://alfa-leetcode-api.onrender.com/userProfile/asifhossain
// fetch the data from the api
(async () => {
    fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${LeetCodeUsername}`)
    .then(response => response.json())
    .then(data => {
        console.log("Leetcode");
        console.log("Problems Solved:", data.totalSolved);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})();


//! Vjudge Problem Solved
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

    await page.goto(`https://vjudge.net/user/${VjudgeUsername}`);

    // await page.waitForSelector('body > div.container > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(4) > td > a');

    const elementText = await page.$eval('body > div.container > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(4) > td > a', element => element.textContent.trim());
    
    console.log("Vjudge");
    console.log("Problem:", elementText);
    data.vjudgeProblemsSolved = elementText;

    await browser.close();
})();


//! CSES
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

    
    await page.setCookie({
        name: 'PHPSESSID',
        value: `${csesPHPSESSID}`,
        domain: 'cses.fi',
    });
    
    await page.goto('https://cses.fi/problemset/stats/friends/');

    // await page.waitForSelector('body > div.skeleton > div.content-wrapper > div > table:nth-child(7) > tbody > tr:nth-child(1) > td:nth-child(3)');
    
    const element = await page.$('body > div.skeleton > div.content-wrapper > div > table:nth-child(7) > tbody');
    const rows = await element.$$('tr');
    let solved = 0;
    for (const row of rows) {
        const username = await row.$eval('td:nth-child(2) > a', element => element.textContent.trim());
        if (username === csesUsername) {
            solved = await row.$eval('td:nth-child(3)', element => element.textContent.trim());
            break;
        }
    }

    const elementText = solved;
    
    
    console.log("CSES ");
    console.log("Problem:", elementText);
    data.csesProblemsSolved = elementText;

    await browser.close();
})();