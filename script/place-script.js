$(document).ready(function () {
  let k = 0,
    i = 1,
    j = 2;
  let arrayStars = new Array();
  let array = new Array();
  let startImage = $("#start");
  let mainImage = $("#main");
  let mainText = $(".amount-days");
  let mainPrice = $(".price-text");
  let placeName = $(".place-name");
  let endImage = $("#end");
  let arrayPriceObj = [
    {
      namePlace: "Kathmandu, Nepal",
      amountStars: 4,
      amountDays: 6,
      adressImg: "url(img/gallery-photo01.png)",
      price: 64340,
    },
    {
      namePlace: "Kathmandu, Nepal",
      amountStars: 5,
      amountDays: 4,
      adressImg: "url(img/gallery-photo02.png)",
      price: 640,
    },
    {
      namePlace: "Kathmandu, Nepal",
      amountStars: 3,
      amountDays: 1,
      adressImg: "url(img/gallery-photo03.png)",
      price: 640,
    },
    {
      namePlace: "Kathmandu, Nepal",
      amountStars: 2,
      amountDays: 9,
      adressImg: "url(img/gallery-photo04.png)",
      price: 1233,
    },
  ];

  for (let i = 0; i < $(".img-star").length; i++) {
    arrayStars[i] = $(".img-star").eq(i);
  }

  for (let i = 0; i < $(".img-star").length; i++) {
    array[i] = $(".img-star").eq(i);
  }

  startImage.css("background-image", arrayPriceObj[k].adressImg);
  startImage.css("background-repeat", "no-repeat");
  startImage.css("background-size", "cover");

  mainImage.css("background-image", arrayPriceObj[i].adressImg);
  mainImage.css("background-repeat", "no-repeat");
  mainImage.css("background-size", "cover");
  mainPrice.text(`${arrayPriceObj[i].price}$`);
  placeName.text(`${arrayPriceObj[i].namePlace}`);

  if (arrayPriceObj[i].amountDays == 1) {
    mainText.text(`${arrayPriceObj[i].amountDays} day tour`);
  } else mainText.text(`${arrayPriceObj[i].amountDays} days tour`);

  for (let j = 0; j < 5; j++) {
    if (j < arrayPriceObj[i].amountStars) {
      arrayStars[j].attr("src", "img/star-on.png");
    } else arrayStars[j].css("src", "img/star-off.png");
  }

  endImage.css("background-image", arrayPriceObj[j].adressImg);
  endImage.css("background-repeat", "no-repeat");
  endImage.css("background-size", "cover");

  console.log(arrayPriceObj.length);
  $(".arrow-left").click(function () {
    k++;
    i++;
    j++;
    if (i >= arrayPriceObj.length) {
      i = 0;
    }
    if (k >= arrayPriceObj.length) {
      k = 0;
    }
    if (j >= arrayPriceObj.length) {
      j = 0;
    }

    startImage.css("background-image", arrayPriceObj[k].adressImg);
    startImage.css("background-repeat", "no-repeat");
    startImage.css("background-size", "cover");

    mainImage.css("background-image", arrayPriceObj[i].adressImg);
    mainImage.css("background-repeat", "no-repeat");
    mainImage.css("background-size", "cover");
    mainPrice.text(`${arrayPriceObj[i].price}$`);
    placeName.text(`${arrayPriceObj[i].namePlace}`);

    if (arrayPriceObj[i].amountDays == 1) {
      mainText.text(`${arrayPriceObj[i].amountDays} day tour`);
    } else mainText.text(`${arrayPriceObj[i].amountDays} days tour`);

    for (let j = 0; j < 5; j++) {
      if (j < arrayPriceObj[i].amountStars) {
        arrayStars[j].css("background-image", "url(img/star-on.png)");
      } else arrayStars[j].css("background-image", "url(img/star-off.png)");
    }

    endImage.css("background-image", arrayPriceObj[j].adressImg);
    endImage.css("background-repeat", "no-repeat");
    endImage.css("background-size", "cover");
  });

  $(".arrow-right").click(function () {
    k--;
    i--;
    j--;
    if (i < 0) {
      i = arrayPriceObj.length - 1;
    }
    if (k < 0) {
      k = arrayPriceObj.length - 1;
    }
    if (j < 0) {
      j = arrayPriceObj.length - 1;
    }

    startImage.css("background-image", arrayPriceObj[k].adressImg);
    startImage.css("background-repeat", "no-repeat");
    startImage.css("background-size", "cover");

    mainImage.css("background-image", arrayPriceObj[i].adressImg);
    mainImage.css("background-repeat", "no-repeat");
    mainImage.css("background-size", "cover");
    mainPrice.text(`${arrayPriceObj[i].price}$`);
    placeName.text(`${arrayPriceObj[i].namePlace}`);

    if (arrayPriceObj[i].amountDays == 1) {
      mainText.text(`${arrayPriceObj[i].amountDays} day tour`);
    } else mainText.text(`${arrayPriceObj[i].amountDays} days tour`);

    for (let j = 0; j < 5; j++) {
      if (j < arrayPriceObj[i].amountStars) {
        arrayStars[j].css("background-image", "url(img/star-on.png)");
      } else arrayStars[j].css("background-image", "url(img/star-off.png)");
    }

    endImage.css("background-image", arrayPriceObj[j].adressImg);
    endImage.css("background-repeat", "no-repeat");
    endImage.css("background-size", "cover");
  });
});
