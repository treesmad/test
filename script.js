(function(){
	var animals = [
		{name: 'Mongoose', sound: 'baah'},
		{name: 'Walrus', sound: 'arf'},
		{name: 'Hippo', sound: 'moo'}
];

	function seeAndSay(){
		animals.forEach(function(animal){
			animals.gray = 'Yes.';

		    console.log("The " + animal.name + " says " + animal.sound + ". Is it gray? " + animals.gray);
		});

}
seeAndSay();
}());
