"use strict";
const body = document.querySelector("body");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createNewElement = function (value, position) {
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
    "px; position: " +
    position +
    ";";
  return newElement;
};

const div = new DomElement("#square", 100, 100, "green");
const square = div.createNewElement("", "absolute");
document.addEventListener("DOMContentLoaded", function (event) {
  body.append(square);
});
body.addEventListener("keydown", function (event) {
  if (
    event.code != "ArrowRight" &&
    event.code != "ArrowLeft" &&
    event.code != "ArrowUp" &&
    event.code != "ArrowDown"
  )
    return;
  let x = parseInt(square.style.top),
    y = parseInt(square.style.left);
  if (isNaN(x)) x = 0;
  if (isNaN(y)) y = 0;
  if (event.code === "ArrowRight") square.style.left = `${y + 10}px`;
  if (event.code === "ArrowLeft") square.style.left = `${y - 10}px`;
  if (event.code === "ArrowUp") square.style.top = `${x - 10}px`;
  if (event.code === "ArrowDown") square.style.top = `${x + 10}px`;
});
