const puppeteer = require('puppeteer');

const email = 'roti@fidelium10.com';
const pass = 'axios1234!';


async function getComments() {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
  });

  const page = await browser.newPage();

  // login
  /*
  await page.goto('https://www.facebook.com/login.php');

  await page.click('#email');
  await page.keyboard.type(email);

  await page.click('#pass');
  await page.keyboard.type(pass);

  await page.click('#loginbutton');
  await page.waitForNavigation(); // on attends que la page ait chargé
  */
  // end login

  await page.goto('https://www.facebook.com/pg/Orange.France/posts/');




  /* si on est pas connecté il faut fermer la popup */
  // on scroll de 800 pixels vers le bas
  await page.evaluate(() => {
    window.scrollTo(0, 800);
  });

  // on attends que le bouton pour fermer la popup apparaisse et on clique dessus
  await page.waitFor(400);
  await page.click('#expanding_cta_close_button');

}

getComments();
