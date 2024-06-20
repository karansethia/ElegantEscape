import {test, expect} from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("Should allow user to sign in", async ({page}) => {
  await page.goto(UI_URL);
  // goto sign in page
  await page.getByRole("link", {name: "Sign In"}).click();
  //check whether you have reached the url after button click
  await expect(page.getByRole("heading", {name: "Sign In"})).toBeVisible();
  //locate form and fill in details
  await page.locator("[name=email]").fill("test@test.com");
  await page.locator("[name=password]").fill("123456");

  //click the sign in button
  await page.getByRole("button", {name: "Login"}).click();

  //assertions that users have successfully logged in
  await expect(page.getByText("Logged in successfully")).toBeVisible();
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
});

// test("get started link", async ({page}) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", {name: "Get started"}).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole("heading", {name: "Installation"})).toBeVisible();
// });
