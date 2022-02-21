"use strict";
const body = document.querySelector("body");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createNewElement = function (value) {
  let newElement;
  const attributeName = this.selector.slice(1);
  switch (this.selector[0]) {
    case ".":
      newElement = document.createElement("div");
      newElement.classList.add(attributeName);
      break;
    case "#":
      newElement = document.createElement("p");
      newElement.setAttribute("id", attributeName);
      break;
    default:
      return;
  }
  newElement.textContent = value;
  newElement.style.cssText =
    "height: " +
    this.height +
    "px; width: " +
    this.width +
    "px; background-color: " +
    this.bg +
    "; font-size: " +
    this.fontSize +
    "px;";
  return newElement;
};

const div = new DomElement("#header", 100, 200, "green", 15);
const p = new DomElement(".footer", 400, 100, "red", 11);
body.append(div.createNewElement("inside text"));
body.append(p.createNewElement("kukusiki"));
