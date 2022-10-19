import puppeteer from 'puppeteer';

export const login = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://linkedin.com/login');

    // login
    await page.waitForSelector('#username');
    await page.type('#username', "username");
    await page.waitForSelector('#password')
    await page.type('#password', "password")

    await page.waitForSelector("button[type='submit']")
    await page.click("button[type='submit']")


    // // Type into search box.
    // await page.type('.devsite-search-field', 'Headless Chrome');



    // // Wait for suggest overlay to appear and click "show all results".
    // const allResultsSelector = '.devsite-suggest-all-results';
    // await page.waitForSelector(allResultsSelector);
    // await page.click(allResultsSelector);

    // // Wait for the results page to load and display the results.
    // const resultsSelector = '.gsc-results .gs-title';
    // await page.waitForSelector(resultsSelector);

    // await browser.close();
}



login()