function Popup(title,text) {
  this.title = title;
	this.text = text;
}

Popup.prototype.showPopup = function() {
  var pop = $('<div class="modal" tabindex="-1" role="dialog"' +
    'data-backdrop="static" data-keyboard="false">' +
      '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<h3 class="modal-title">' + this.title + '</h3>' +
          '</div>' +
          '<div class="modal-body">' + this.text +
          '</div>' +
          '<div class="modal-footer">' +
            '<button type="button" class="clos btn btn-default" data-dismiss="modal">Close</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>');

  $('.modal').remove();
  $('body').append(pop);
  pop.modal('show');
};