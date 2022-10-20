import puppeteer from 'puppeteer';
import * as  dotenv from 'dotenv'

dotenv.config()

export const login = async () => {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://linkedin.com/login');

    // login
    await page.waitForSelector('#username');
    await page.type('#username', process.env.email);
    await page.waitForSelector('#password')
    await page.type('#password', process.env.password)

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


// starting the process
(async()=>{
    const browser = await puppeteer.launch({headless:false,defaultViewport:null, args: ['--window-size=1920,1080'],})
    const page =  await browser.newPage()
    
    // Actions 
    await page.goto('https://www.linkedin.com/login',{ waitUntil: 'networkidle0' })
    await login(page)
    await page.waitForTimeout(4000)
    await followCategory(page,'Hr')
   
  
  })

//   login 
  
  async function login(page){
    
    Promise.all([
    // username
    await page.type('#username',process.env.Email),
  
    // password 
    await page.type('#password',process.env.password),
  
    // submit 
    await page.click('[type="submit"]'),
    //
    await page.waitForNavigation()
    
    ])
     
  
  }

//   connect 
  async function connect(page){
    await page.evaluate(()=>{
      console.log("connect runs ")
      let buttons = document.getElementsByClassName("artdeco-button__text")
      let onlyConnectButtons = Array.from(buttons)
        .filter((button)=>button.innerText == "Connect")
      onlyConnectButtons.map(button => button.click())
      console.log(onlyConnectButtons)
  
        // Array.from(document.getElementsByClassName("artdeco-button__text").map((button)=>{button.innerText == "Send" ? button.click() : null}))
    })
  
  
  }


// follow Hr page searches Hr and  
async function followCategory(page,category){
    await page.waitForTimeout('[placeholder="Search"]')
    await page.type('[placeholder="Search"]',category);
    await page.keyboard.press('Enter');
    // finding nore results 
    await page.waitForNavigation()
    await page.evaluate(()=>{
        Array.from(document.getElementsByClassName("app-aware-link")).map(btn => btn.innerText == "See all people results" ? btn.click() : null) 
    })
  await page.waitForNavigation()

  
}

  