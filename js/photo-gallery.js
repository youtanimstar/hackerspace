const latestSongsRightScrolls = document.querySelector(
    "#photo-gallery-right-scrolls"
  );
  const latestSongsLeftScrolls = document.querySelector(
    "#photo-gallery-left-scrolls"
  );
  const latestSongsItem = document.querySelector(".photo-gallery-item");
  const totalWidth = latestSongsItem.clientWidth*5;
  console.log(totalWidth);
  
  let buttonClick = false;
  latestSongsRightScrolls.addEventListener("click", () => {
      latestSongsItem.scrollLeft -= latestSongsItem.clientWidth/2;
  });
  latestSongsLeftScrolls.addEventListener("click", () => {

      latestSongsItem.scrollLeft += latestSongsItem.clientWidth/2;
  });