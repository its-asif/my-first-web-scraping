const puppeteer = require('puppeteer');

// store all data in an object
const data = {};

console.log("All My Problem Solved from Different Platforms");

// Codeforces Problem Solved
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

  await page.goto('https://codeforces.com/profile/pinik');

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


// LeetCode Problem Solved
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

    // Navigate to the LeetCode profile page
    await page.goto('https://leetcode.com/asifhossain/');

    // Wait for the selector containing the desired element
    await page.waitForSelector('#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl > div > div.lc-lg\\:max-w-\\[calc\\(100\\%_-_316px\\)\\].w-full > div.lc-xl\\:flex-row.lc-xl\\:space-y-0.flex.w-full.flex-col.space-x-0.space-y-4.lc-xl\\:space-x-4.lc-lg\\:mt-0.mt-4 > div.min-w-max.max-w-full.w-full.flex-1 > div > div.lc-xl\\:mx-8.mx-3.flex.items-center > div.mr-8.mt-6.flex.min-w-\\[100px\\].justify-center > div > div > div > div.text-\\[24px\\].font-medium.text-label-1.dark\\:text-dark-label-1');

    // Extract the text content of the desired element
    const elementText = await page.$eval('#__next > div.flex.min-h-screen.min-w-\\[360px\\].flex-col.text-label-1.dark\\:text-dark-label-1.bg-layer-bg.dark\\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\\:max-w-\\[888px\\].md\\:p-6.lg\\:max-w-screen-xl > div > div.lc-lg\\:max-w-\\[calc\\(100\\%_-_316px\\)\\].w-full > div.lc-xl\\:flex-row.lc-xl\\:space-y-0.flex.w-full.flex-col.space-x-0.space-y-4.lc-xl\\:space-x-4.lc-lg\\:mt-0.mt-4 > div.min-w-max.max-w-full.w-full.flex-1 > div > div.lc-xl\\:mx-8.mx-3.flex.items-center > div.mr-8.mt-6.flex.min-w-\\[100px\\].justify-center > div > div > div > div.text-\\[24px\\].font-medium.text-label-1.dark\\:text-dark-label-1', element => element.textContent.trim());
    
    console.log("Leetcode");
    console.log("Problem:", elementText);
    data.leetcodeProblemsSolved = elementText;

    await browser.close();
})();

// Vjudge Problem Solved
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

    await page.goto('https://vjudge.net/user/asif_cs');

    // await page.waitForSelector('body > div.container > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(4) > td > a');

    const elementText = await page.$eval('body > div.container > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(4) > td > a', element => element.textContent.trim());
    
    console.log("Vjudge");
    console.log("Problem:", elementText);
    data.vjudgeProblemsSolved = elementText;

    await browser.close();
})();

// CSES
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

    await page.goto('https://cses.fi/user/118648');

    // await page.waitForSelector('body > div.skeleton > div.content-wrapper > div > table:nth-child(5) > tbody > tr > td:nth-child(2) > a');

    const elementText = await page.$eval('body > div.skeleton > div.content-wrapper > div > table:nth-child(5) > tbody > tr > td:nth-child(2) > a', element => element.textContent.trim());
    
    console.log("CSES ");
    console.log("Problem:", elementText);
    data.csesProblemsSolved = elementText;

    await browser.close();
})();


// coding ninja
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1024, isMobile: false, isLandscape: true });

  await page.goto('https://www.codingninjas.com/studio/profile/asifhossain');

  // await page.waitForSelector('#app-content > codingninjas-user-dashboard > codingninjas-profile > div > div.profile-user-details-right-section.pt-40 > div.profile-user-submission-heatmap-stats.p-20 > codingninjas-profile-contribution-heatmap > div.profile-user-stats-graph-container.pl-16.mb-16 > div.total-problem-solved-container > div.total-problem-stat');

  const elementText = await page.$eval('#app-content > codingninjas-user-dashboard > codingninjas-profile > div > div.profile-user-details-right-section.pt-40 > div.profile-user-submission-heatmap-stats.p-20 > codingninjas-profile-contribution-heatmap > div.profile-user-stats-graph-container.pl-16.mb-16 > div.total-problem-solved-container > div.total-problem-stat', element => element.textContent.trim());
  
  console.log("Coding Ninja");
  console.log("Problem:", elementText);
  data.codingNinjaProblemsSolved = elementText;

  await browser.close();
})();
