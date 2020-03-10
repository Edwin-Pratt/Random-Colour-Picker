// Call this function as soon as the site has loaded
window.onload = changeColour;

$("#generate-new-colour").on("click", changeColour);

function changeColour(event) {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  
  $("body").bgColour(rgb);
  
  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(
    ((r * 299) + (g * 587) + (b * 114)) / 1000
  );
  const textColour = (brightness > 125) ? 'black' : 'white';

  $("#output-colour").text(rgb).colour(textColour);

  $("#heading").colour(textColour);
  $("#view-profile").colour(textColour);
  $("#view-source").colour(textColour);
  $("#copyright").colour(textColour);
}
 
