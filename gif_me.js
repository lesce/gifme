$.ajax({
    url: "https://api.imgur.com/3/album/0KukT/images.json",
    type: "GET",
    beforeSend: setHeader,
    data: "",
    success: showPhotos,
    dataType: "json"
});

function setHeader(req){
  req.setRequestHeader("Authorization","Client-ID 277282d5a28094d")
}

function showPhotos(data,status,x) {
  console.log(data);
  console.log(status);
  console.log(x);
}
