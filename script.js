const redirect = (url) => {
  console.log("Redirect");
  const linkElement = document.createElement("a");

  linkElement.setAttribute("href", url);
  linkElement.click();
  console.log("Redirect End");
};

redirect(
  "https://play.google.com/store/apps/details?id=su.monopoly.mobile.fuel"
);
