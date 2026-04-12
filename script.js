function sendToWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let text = `Новая заявка:%0AИмя: ${name}%0AТелефон: ${phone}%0AУслуга: ${message}`;

  let url = `https://wa.me/79624944722?text=${text}`;

  window.open(url, "_blank");
}