const {
  test,
  expect
} = require('@playwright/test');
const {
  email,
  password,
  wrongPassword
} = require('../user');


test('test1 successful authorization', async ({
  page
}) => {
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByRole('textbox', {
    name: 'Email'
  }).fill(email);
  await page.getByRole('textbox', {
    name: 'Пароль'
  }).fill(password);
  await page.getByTestId('login-submit-btn').click();

  await expect(page).toHaveURL('https://netology.ru/profile/9504999');

  const heading = page.getByRole('heading', {
    name: 'Моё обучение'
  });
  await expect(heading).toBeVisible({
    timeout: 10000
  });
  await expect(heading).toHaveText('Моё обучение');
});

test('test2 failed authorization', async ({
  page
}) => {
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByRole('textbox', {
    name: 'Email'
  }).fill(email);
  await page.getByRole('textbox', {
    name: 'Пароль'
  }).fill(wrongPassword);
  await page.getByTestId('login-submit-btn').click();

  await expect(page.locator('[data-testid="login-error-hint"]')).toContainText('Вы ввели неправильно логин или пароль.');
});