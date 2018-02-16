var LOW = 0x0;
var HIGH = 0x1;
var ANALOG_MAX = 1023;

var INPUT = 0x0;
var OUTPUT = 0x1;
var INPUT_PULLUP = 0x2;

function Frame(previousFrame) {
  if (typeof(previousFrame) === "undefined") {
    this.ledModes = {};
    this.ledStates = {};
    this.postDelay = 0;
  } else {
    this.ledModes = {};
    this.ledStates = {};
    for (var prop in previousFrame.ledModes) {
      this.ledModes[prop] = previousFrame.ledModes[prop];
    }
    for (var prop in previousFrame.ledStates) {
      this.ledStates[prop] = previousFrame.ledStates[prop];
    }
    this.postDelay = 0;
  }
  this.outputText = [];
}

Frame.prototype.getPinMode = function (pinNumber) {
  if (typeof(this.ledModes[pinNumber]) === "undefined") {
    return INPUT;
  } else {
    return this.ledModes[pinNumber];
  }
};

Frame.prototype.setPinMode = function (pinNumber, mode) {
  this.ledModes[pinNumber] = mode;
};

Frame.prototype.getPinState = function (pinNumber) {
  if (typeof(this.ledStates[pinNumber]) === "undefined") {
    return LOW;
  } else {
    return this.ledStates[pinNumber];
  }
};

Frame.prototype.setPinState = function (pinNumber, state) {
  this.ledStates[pinNumber] = state;
};

Frame.prototype.addOutputText = function(text) {
  this.outputText.push(text);
};

Frame.prototype.getOutputText = function() {
  return this.outputText;
};

function FrameManager() {
  this.frames = [];
  this.frames[0] = new Frame();
  this.currentFrame = 0;
}

FrameManager.prototype.getPinMode = function (pinNumber, frame) {
  if (typeof(frame) === "undefined") {
    return this.frames[this.currentFrame].getPinMode(pinNumber);
  } else {
    return this.frames[frame].getPinMode(pinNumber);
  }
};

FrameManager.prototype.setPinMode = function (pinNumber, mode) {
  this.frames[this.currentFrame].setPinMode(pinNumber, mode);
};

FrameManager.prototype.getPinState = function (pinNumber, frame) {
  if (typeof(frame) === "undefined") {
    return this.frames[this.currentFrame].getPinState(pinNumber);
  } else {
    return this.frames[frame].getPinState(pinNumber);
  }
};

FrameManager.prototype.setPinState = function (pinNumber, state) {
  this.frames[this.currentFrame].setPinState(pinNumber, state);
};

FrameManager.prototype.nextFrame = function (delay) {
  this.frames[this.currentFrame].postDelay = delay;
  this.frames.push(new Frame(this.frames[this.currentFrame]));
  this.currentFrame++;
};

FrameManager.prototype.getOutputText = function (frame) {
  return this.frames[frame].getOutputText();
};

FrameManager.prototype.addOutputText = function (text) {
  this.frames[this.currentFrame].addOutputText(text);
};
