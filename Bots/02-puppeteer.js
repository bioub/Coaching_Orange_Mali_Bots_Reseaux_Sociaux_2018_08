// https://www.airbnb.fr/s/homes?query=Bamako
const puppeteer = require('puppeteer');

async function getSearchResultsFromAirbnb(recherche) {
  const browser = await puppeteer.launch({
    headless: false, // si false la fenêtre s'ouvre
  });
  const page = await browser.newPage();
  await page.goto('https://www.airbnb.fr/s/homes?query=' + recherche);

  /*
  console.log('Dans Node.js');
  await page.evaluate(() => {
    console.log(document.querySelectorAll('[itemprop=itemListElement]').length);
  });
  */

  // $$ permet d'exécuter document.querySelectorAll dans le navigateur
  // et de récupérer les résultats dans Node.js
  // const annonces = await page.$$('[itemprop=itemListElement]');

  // click sur le dernier lien de la pagination
  await page.click('[data-id="SearchResultsPagination"] > li:last-child a');

  await page.waitFor(1000);
  /*
  const titre = await page.evaluate(() => {
    return document.querySelector('._jnrahhr').textContent;
  });

  console.log(titre);
  */

  await page.click('[href^="/room"]');

  /*
  await page.screenshot({
    type: 'png',
    path: 'screenshot.png',
  });
  */

  await browser.close();
}

getSearchResultsFromAirbnb('Bamako').catch((err) => console.log(err));
