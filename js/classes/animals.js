function Animal(props) {
  for (var key in props) {
    this[key] = props[key];
  }
}

Animal.prototype.showItem = function() {
  var listItem = $('<div class="animal col-xs-6  col-md-6">' +
    '<div class="thumbnail">' +
      '<div class="caption">' +
        '<h4>' + this.name + '</h4>' +
        '<p>' + "Detta djur är en " + this.description + '</p>' +
        '<p><button ' +
        'type="button" class="btn btn-primary talk" data-toggle="modal" ' +
        'data-target=".bs-example-modal-sm">Talk</button>' + "\n" +
        '<button type="button" class="btn btn-primary feed" data-toggle="modal" ' +
        'data-target=".bs-example-modal-sm">Feed</button></p>' +
      '</div>' +
    '</div>' +
  '</div>');

  listItem.data('animal',this); // hur kan jag rebuild?

  $('.' + this.enclosure).append(listItem);
};

Animal.prototype.talk = function() {
  var popup = new Popup(this.name, "Så här låter jag: " + this.sound);
  popup.showPopup();
};

Animal.prototype.feed = function() {
  var popup = new Popup("&#x2661;<i>Tack för att du matar mig!!</i>&#x2661;", "Du har matat mig med: " + this.food);
  popup.showPopup();
};
