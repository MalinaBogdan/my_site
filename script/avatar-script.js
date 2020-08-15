$(document).ready(function () {
  let counter = 0;
  let arrayWorker = [
    {
      imgAvatar: "img/avatar01.png",
      name: "Leonid Yakubobich",
      position: "traveller",
    },
    {
      imgAvatar: "img/avatar01.png",
      name: "Zina Pavlovna",
      position: "killer",
    },
    {
      imgAvatar: "img/avatar01.png",
      name: "Viktor Yanukovich",
      position: "king",
    },
  ];

  $(".avatar").attr("src", arrayWorker[counter].imgAvatar);
  $(".name").text(`${arrayWorker[counter].name}`);
  $(".position").text(`${arrayWorker[counter].position}`);

  for (let i = 0; i < arrayWorker.length; i++) {
    $(".blue-lines-wrap").append(
      `<div class = "line" id = "line-num${i}"> </div>`
    );
    if (i == counter) {
      $(`#line-num${i}`).css("width", "75px");
      $(`#line-num${i}`).css("background-color", "#3984f3");
    }
  }
  $(".travellers-button-right").click(function () {
    counter++;
    if (counter == arrayWorker.length) {
      counter = 0;
    }
    $(".avatar").attr("src", arrayWorker[counter].imgAvatar);
    $(".name").text(`${arrayWorker[counter].name}`);
    $(".position").text(`${arrayWorker[counter].position}`);

    for (let i = 0; i < arrayWorker.length; i++) {
      if (i == counter) {
        $(`#line-num${i}`).css("width", "75px");
        $(`#line-num${i}`).css("background-color", "#3984f3");
      } else {
        $(`#line-num${i}`).css("width", "50px");
        $(`#line-num${i}`).css("background-color", "#d4daf5");
      }
    }
  });
  $(".travellers-button-left").click(function () {
    counter--;
    if (counter < 0) {
      counter = arrayWorker.length - 1;
    }
    $(".avatar").attr("src", arrayWorker[counter].imgAvatar);
    $(".name").text(`${arrayWorker[counter].name}`);
    $(".position").text(`${arrayWorker[counter].position}`);

    for (let i = 0; i < arrayWorker.length; i++) {
      if (i == counter) {
        $(`#line-num${i}`).css("width", "75px");
        $(`#line-num${i}`).css("background-color", "#3984f3");
      } else {
        $(`#line-num${i}`).css("width", "50px");
        $(`#line-num${i}`).css("background-color", "#d4daf5");
      }
    }
  });
});
