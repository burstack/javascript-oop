function Enclosure(props) {
  for (var key in props) {
    this[key] = props[key];
  }
}

Enclosure.prototype.showItem = function() {
  var listItem = $(
	'<div class="col-xs-12 col-sm-6 col-md-6">' +
		'<div class="panel panel-default">' +
			'<div class="panel-body '+this.name+' "></div>' +
		'</div>' +
	'</div>');

  $('.row').append(listItem);
};