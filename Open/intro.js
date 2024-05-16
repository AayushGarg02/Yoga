const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://ephemeral-dodol-320707.netlify.app/");

    // Wait for the "About" button to be available
    await page.waitForSelector('button#about-btn', { visible: true });

    // Intercept the click event on the "About" button and redirect it to your custom page
    await page.evaluate(() => {
      const aboutButton = document.querySelector('button#about-btn');
      aboutButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior (redirecting to the original URL)
        window.location.href = 'file:///C:/Users/Nikhil Computer/Documents/yogi_uda/Urban-Yogi/open App/About.html'; // Redirect to your custom page
      });
    });
    console.log("Successfully set up the click event on the About button.");
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
