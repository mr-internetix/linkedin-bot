import puppeteer from 'puppeteer';
import * as  dotenv from 'dotenv'
dotenv.config()

 export default  async function start (credentials){
  try {
    const browser = await puppeteer.launch({headless:false,defaultViewport:null, args: ['--window-size=1920,1080'],})
    const page =  await browser.newPage()
    
    // Actions 
    await page.goto('https://www.linkedin.com/login',{ waitUntil: 'networkidle0' })
//    await login(page, credentials)
  //  await page.waitForTimeout(4000)
    //await followCategory(page,'Hr')
    
    return true
  } catch (error) {
    return { message : "error in Initializing The browser" , error : error }
  } 
  
  }

//   login 
  
export async function login(page, credentials){
    try{
  Promise.all([
    // username
       await page.type('#username',process.env.Email),
    //await page.type('#username',credentials.email),
   
    // password
        await page.type('#username',process.env.password),
    //await page.type('#password',credentials.password),
  
    // submit 
    await page.click('[type="submit"]'),
    //
    await page.waitForNavigation()
    
    ])
    
  }catch(error){
    return { message : "Error While Login  " , error}
  }
    
  
  }

//   connect 
export  async function connect(page){
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
export async function followCategory(page,category){
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

  
