export const cameraTakePicture = ()=> {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
  });

  function onSuccess(imageData) {
    const image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
  }

  function onFail(message) {
    alert('失败原因：' + message);
  }
}
