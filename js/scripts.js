// DO SOME STUFF I GUESS
function Pet(name) {
  this.name = name;
  this.isAdopted = false;
  this.owner = "";
}

Pet.prototype.Adopt = function(newOwner) {
  this.isAdopted = true;
  this.owner = newOwner;
}