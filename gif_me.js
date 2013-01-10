var req = new XMLHttpRequest();
req.open(
    "GET",
    "https://api.imgur.com/3/album/0KukT/images.json",
    true);
req.setRequestHeader("Authorization","Client-ID 277282d5a28094d")
req.setRequestHeader("Content-Type","application/json")
req.send(null);
showPhotos(req);

function showPhotos(req) {
  console.log(req.response);
  console.log(req);
}
