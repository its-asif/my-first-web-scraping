const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const puppeteer = require('puppeteer');

const url = 'https://codeforces.com/profile/pinik';

const cpRatings = {};

async function fetchHTML(url) {
  const { data : html } = await axios.get(url);
  return html;
}


// fetching codeforces profile
fetchHTML('https://codeforces.com/profile/pinik') 
.then((res) => {
    const $ = cheerio.load(res);

    
    $('body').each((i, el) => {
        
        const maxRating = $(el).find('#pageContent > div:nth-child(3) > div > div.info > ul > li:nth-child(1) > span.smaller > span:nth-child(2)').text();
        
        const ProblemsSolved = $(el).find('#pageContent > div._UserActivityFrame_frame > div > div._UserActivityFrame_footer > div:nth-child(1) > div:nth-child(1) > div._UserActivityFrame_counterValue').text();
        
        console.log("Codeforces Profile :");
        console.log("Max Rating:", maxRating);
        console.log("Problems Solved:", ProblemsSolved);
    });
})



// fetching Vjudge profile
fetchHTML('https://vjudge.net/user/asif_cs') 
.then((res) => {
    const $ = cheerio.load(res);

    
    $('body').each((i, el) => {
        
        const ProblemsSolved = $(el).find('body > div.container > div:nth-child(2) > div:nth-child(3) > table > tbody > tr:nth-child(4) > td > a').text();
        
        console.log("Vjudge Profile :");
        console.log("Problems Solved:", ProblemsSolved);
    });
})



// fetching LeetCode profile
// fetchHTML('https://leetcode.com/asifhossain/') 
// .then((res) => {
//     const $ = cheerio.load(res);

//     $('body').each((i, el) => {
        
//         // const ProblemsSolved = $(el).find('#__next > div.flex.min-h-screen.min-w-\[360px\].flex-col.text-label-1.dark\:text-dark-label-1.bg-layer-bg.dark\:bg-dark-layer-bg > div.mx-auto.w-full.grow.p-4.md\:max-w-\[888px\].md\:p-6.lg\:max-w-screen-xl > div > div.lc-lg\:max-w-\[calc\(100\%_-_316px\)\].w-full > div.lc-xl\:flex-row.lc-xl\:space-y-0.flex.w-full.flex-col.space-x-0.space-y-4.lc-xl\:space-x-4.lc-lg\:mt-0.mt-4 > div.min-w-max.max-w-full.w-full.flex-1 > div > div.lc-xl\:mx-8.mx-3.flex.items-center > div.mr-8.mt-6.flex.min-w-\[100px\].justify-center > div > div > div > div.text-\[24px\].font-medium.text-label-1.dark\:text-dark-label-1').text();
//         // const ProblemsSolved = $(el).find('  > div.lc-xl\:flex-row.lc-xl\:space-y-0.flex.w-full.flex-col.space-x-0.space-y-4.lc-xl\:space-x-4.lc-lg\:mt-0.mt-4 > div.min-w-max.max-w-full.w-full.flex-1 > div > div.lc-xl\:mx-8.mx-3.flex.items-center > div.mr-8.mt-6.flex.min-w-\[100px\].justify-center > div > div > div > div.text-\[24px\].font-medium.text-label-1.dark\:text-dark-label-1').text();
        
//         // format css selector in proper way
//         const ProblemsSolved = $(el).find('#__next div:nth-child(2) div:nth-child(7)').html();

//         // save in file
//         fs.writeFile('leetcode.html', ProblemsSolved, (err) => {
//             if (err) throw err;
//             console.log('Data has been written to file');
            
//         });

//         console.log("Leetcode Profile :");
//         // console.log("Problems Solved:", ProblemsSolved);
//     });
// })



// fetching LeetCode profile
// (async () => {
//     // Launch the browser and open a new blank page
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
  
//     // Navigate the page to a URL
//     await page.goto('https://leetcode.com/asifhossain/');
  
//     // Set screen size
//     await page.setViewport({width: 1080, height: 1024});
  
//     // Type into search box
//     // await page.type('.devsite-search-field', 'automate beyond recorder');
  
//     // // Wait and click on first result
//     // const searchResultSelector = '.devsite-result-item-link';
//     // await page.waitForSelector(searchResultSelector);
//     // await page.click(searchResultSelector);
  
//     // // Locate the full title with a unique string
//     // const textSelector = await page.waitForSelector(
//     //   'text/Customize and automate'
//     // );
//     // const fullTitle = await textSelector?.evaluate(el => el.textContent);
  
//     // // Print the full title
//     // console.log('The title of this blog post is "%s".', fullTitle);
  
//     await browser.close();
//   })();
