"use strict"

function Frame() {
  this.roll = 0;
  this.score = [];
  this.strike = false;
  this.spare = false;
  this.totalScore = 0;
  this.firstRollPoints = 0;
};

Frame.prototype.nextRoll = function() {
  this.roll ++;
};

Frame.prototype.addPoints = function(points) {
  this.score.push(points);
  this.addFirstRollPoints(points);
  this.checkSpare();
  this.checkStrike();
  this.nextRoll();
  this.sumPoints();
};

Frame.prototype.checkStrike = function() {
  if (this.roll === 0 && this.score[0] === 10) {
    this.nextRoll();
    return this.strike = true;
  };
};

Frame.prototype.checkSpare = function() {
  if (this.roll === 1 && (this.score[0] + this.score[1] === 10)) {
    return this.spare = true;
  };
};

Frame.prototype.addFirstRollPoints = function(points) {
  if (this.roll === 0) {
    return this.firstRollPoints = points;
  };
};

Frame.prototype.sumPoints = function() {
  this.totalScore = this.score.reduce(function(a,b) {
    return a + b;
  })
};
