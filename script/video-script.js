$(document).ready(function () {
  let arrayVideoObj = [
    {
      nameVideo: "Maldives - Tropical Paradise at Club Med",
      durationVidoeMin: 1,
      durationVidoeSec: 25,
      posterVideo: "img/poster-video01.png",
      srcVideo: "https://www.youtube.com/embed/n9orHWu8zQA",
    },
    {
      nameVideo: "BALI - Doyoutravel X Gypsea Lust",
      durationVidoeMin: 3,
      durationVidoeSec: 34,
      posterVideo: "img/poster-video02.png",
      srcVideo: "https://www.youtube.com/embed/8PNTZEv-e54",
    },
    {
      nameVideo: "Top 10 Underrated Cities in Europe for Your Next Visit ",
      durationVidoeMin: 11,
      durationVidoeSec: 12,
      posterVideo: "img/poster-video03.png",
      srcVideo: "https://www.youtube.com/embed/CC0ywOEAsIE",
    },
    {
      nameVideo: "Japan - A short travel film",
      durationVidoeMin: 4,
      durationVidoeSec: 29,
      posterVideo: "img/poster-video04.png",
      srcVideo: "https://www.youtube.com/embed/MGhjvist4gk",
    },
    {
      nameVideo: "Traveling the World for 2 Years! Chris Rogers",
      durationVidoeMin: 4,
      durationVidoeSec: 38,
      posterVideo: "img/poster-video05.png",
      srcVideo: "https://www.youtube.com/embed/yMPJRe2qTlI",
    },
    {
      nameVideo: "How To Make a TRAVEL VIDEO",
      durationVidoeMin: 18,
      durationVidoeSec: 54,
      posterVideo: "img/poster-video06.png",
      srcVideo: "https://www.youtube.com/embed/JNpo6kDPpxM",
    },
  ];

  for (let i = 0; i < arrayVideoObj.length; i++) {
    $(".videos-block").append(
      `<div class = "video-string" id = "num${i}"> </div>`
    );
    $(`#num${i}`).append(
      `<img class="poster-video" src="${arrayVideoObj[i].posterVideo}" alt="" />`
    );

    $(`#num${i}`).append(
      ` <h6 class="name-video" >${arrayVideoObj[i].nameVideo}</h6>`
    );
    $(`#num${i}`).append(
      ` <p class="duration-video">${arrayVideoObj[i].durationVidoeMin}:${arrayVideoObj[i].durationVidoeSec}</p>`
    );
  }
  $(".video-string").click(function () {
    for (let i = 0; i < arrayVideoObj.length; i++) {
      if (this.id == `num${i}`) {
        $(".main-video").attr("src", arrayVideoObj[i].srcVideo);
      }
    }
  });
});
