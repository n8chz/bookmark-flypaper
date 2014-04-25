self.port.on("getText", function () {
  self.port.emit("gotText", JSON.stringify({
    url: document.location.href,
    title: document.title,
    text: document.body.textContent
  }));
});

