import {test, expect} from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("Should allow user to sign in", async ({page}) => {
  await page.goto(UI_URL);
  // goto sign in page
  await page.getByRole("link", {name: "Sign In"}).click();
  //check whether you have reached the url after button click
  await expect(
    page.getByRole("heading", {name: "Welcome back..."})
  ).toBeVisible();
  //locate form and fill in details
  await page.locator("[name=email]").fill("test2@test.com");
  await page.locator("[name=password]").fill("123456");

  //click the sign in button
  await page.getByRole("button", {name: "Log In"}).click();

  //assertions that users have successfully logged in
  await expect(page.getByText("Logged in successfully")).toBeVisible();
  await expect(page.getByRole("link", {name: "My Bookings"})).toBeVisible();
  await expect(page.getByRole("link", {name: "My Hotels"})).toBeVisible();
});
test("Should not allow user to sign in", async ({page}) => {
  await page.goto(UI_URL);
  // goto sign in page
  await page.getByRole("link", {name: "Sign In"}).click();
  //check whether you have reached the url after button click
  await expect(
    page.getByRole("heading", {name: "Welcome back..."})
  ).toBeVisible();
  //locate form and fill in details
  await page.locator("[name=email]").fill("test@test.com");
  await page.locator("[name=password]").fill("123456");

  //click the sign in button
  await page.getByRole("button", {name: "Log In"}).click();

  //assertions that users have successfully logged in
  await expect(page.getByText("Could not login, Try again")).toBeVisible();
});

test("Should allow User to Register", async ({page}) => {
  const testEmail = `test${Math.floor(Math.random() * 90000) + 10000}@test.com`;
  await page.goto(UI_URL);

  //go to register page
  await page.getByRole("link", {name: "Sign In"}).click();
  await page.getByRole("link", {name: "Create account now"}).click();

  //fill the form
  await page.locator("[name=firstName]").fill("Test");
  await page.locator("[name=lastName]").fill("User");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("123456");
  await page.locator("[name=confirmPassword]").fill("123456");

  //click Create Account button
  await page.getByRole("button", {name: "Create Account"}).click();

  //Assertions that user has registered
  await expect(page.getByText("Registered successfully")).toBeVisible();
});
