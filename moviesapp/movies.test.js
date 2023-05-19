const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
  driver.get("file:///C:/Users/Owner/Desktop/School/automation/moviesapp/public/index.html");
});


afterEach(async () => {
  await driver.quit();
});

test("Cross off a movie", async() => {
    const movieElement = await driver.wait(until.elementLocated(By.css("#movie-list li:first-child")), 5000);
   
    await movieElement.click();
    const isCrossedOff = await movieElement.getAttribute("class").includes("crossed-off");
    expect(isCrossedOff).toBe(true);
});

test("Delete a movie", async() => {
    const deleteButton = await driver.findElement(By.id("delete-button"))
    const isPresent = await movieElement.isDisplayed();
    expect(isPresent).toBe(false);

})

test("Display notifications", async() => {
    const inputElement = await driver.findElement(By.css("#movie-input"));
    await inputElement.sendKeys("New Movie", Key.RETURN);
    await driver.wait(until.elementLocated(By.css(".notification")), 5000);
    const notificationElement = await driver.findElement(By.css(".notification"));
    const isDisplayed = await notificationElement.isDisplayed();
    expect(isDisplayed).toBe(true);
})


