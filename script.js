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
  let newElement,
    cssString = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; margin: 0;`;
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
  if (position === "absolute") {
    cssString += `position: absolute; top: 0; left: 0;`;
  }
  newElement.style.cssText = cssString;
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
  if (event.code === "ArrowRight") y += 10; //square.style.left = `${y + 10}px`;
  if (event.code === "ArrowLeft") y -= 10; //square.style.left = `${y - 10}px`;
  if (event.code === "ArrowUp") x -= 10; //square.style.top = `${x - 10}px`;
  if (event.code === "ArrowDown") x += 10; //square.style.top = `${x + 10}px`;
  console.log(window.innerWidth);
  y =
    y > window.innerWidth - parseInt(square.style.width)
      ? 0
      : y < parseInt(square.style.width) * -1
      ? window.innerWidth - parseInt(square.style.width)
      : y;
  x =
    x > window.innerHeight - parseInt(square.style.height)
      ? 0
      : x < parseInt(square.style.height) * -1
      ? window.innerHeight - parseInt(square.style.height)
      : x;
  square.style.left = `${y}px`;
  square.style.top = `${x}px`;
});
