
$.getJSON('data/animals.json', function(animals) {
     $.getJSON('data/enclosures.json', function(enclosures) {
        $(function() {

          $.each(enclosures, function (index, enclosures) {
             enclosures[index] = new Enclosure(enclosures);
             enclosures[index].showItem();
          });

          $.each(animals, function (index, animal) {
             animals[index] = new Animal(animal);
             animals[index].showItem();
          });
        });
    });
});

$('html').on('click', '.talk', function() {

    var animal = $(this).parents('div.animal').data('animal');
    animal.talk();
});

$('html').on('click', '.feed', function() {

    var animal = $(this).parents('div.animal').data('animal');
    animal.feed();
});