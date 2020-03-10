// Copyright (c) 2020 Edwin Pratt
//
// This is a little framework I made to help me create this little app

function $(selector) {
  const self = {};
  
  // Set the selector and select the element.
  self.selector = selector;
  self.element = document.querySelector(self.selector);
  
  // Get or set the HTML contents in the element.
  self.html = function(value) {
    if (!value) {
      return self.element.innerHTML;
    }
    
    self.element.innerHTML = value;
    
    return self;
  };

  // Get or set the text contents in the element.
  self.text = function(value) {
    if (!value) {
      return self.element.innerText;
    }

    self.element.innerText = value;

    return self;
  };

  // Add event listeners
  self.on = function(name, callback) {
    self.element["on" + name] = callback;

    return self;
  };
  
  // Get or set the element's attributes
  self.attr = function(name, value) {
    if (!value) {
      return self.element.getAttribute(name);
    }

    self.element.setAttribute(name, value);

    return self;
  };

  // Get or set the element's text colour
  self.colour = function(value) {
    if (!value) {
      return self.element.style.color;
    }

    self.element.style.color = value;

    return self;
  }
  
  // Get or set the element's background colour
  self.bgColour = function(value) {
    if (!value) {
      return self.element.style.backgroundColor;
    }

    self.element.style.backgroundColor = value;

    return self;
  }
  
  // Allows us to call functions on self.
  //
  // $("#div1").html("<h1>Hello there!</h1>").color("red");
  //
  return self;
}

