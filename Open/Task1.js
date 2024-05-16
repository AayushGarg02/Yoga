const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://ephemeral-dodol-320707.netlify.app/");

    // Wait for the "About" button to be available for 30 seconds
    await Promise.race([
      page.waitForSelector('button#about-btn', { visible: true }),
      new Promise(resolve => setTimeout(resolve, 30000)) // Timeout after 30 seconds
    ]);

    // Add a click event listener to the "About" button to prevent default action
    await page.evaluate(() => {
      document.querySelector('button#about-btn').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action (navigation to original URL)
      });
    });

    // Now, you have 30 seconds to manually interact with the page
    // If you click the "About" button manually, Puppeteer will proceed accordingly

    // Once interaction is done, check the URL to see if it's the About page
    if (page.url() === "https://ephemeral-dodol-320707.netlify.app/about") {
      // If we are on the correct page, navigate to your custom page
      await page.goto('file:///C:/Users/Nikhil Computer/Documents/yogi_uda/Urban-Yogi/open App/About.html');
      console.log("Successfully redirected to the custom About page.");
    } else {
      console.log("The page is not the About page.");
    }
    
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
