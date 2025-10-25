//displays message showing which image was clicked
function showMessage(imageName) {
    const message = document.getElementById("message");
    message.textContent = `You clicked on the ${imageName} image!`;
}