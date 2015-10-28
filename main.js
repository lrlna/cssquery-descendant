/**
 * Define a function, `cssquery`, which takes a CSS descendant selector string
 * `s` and returns an array of elements found in the document that match it.
 *
 * Don't use `document.querySelectorAll` or jQuery. Build the algorithm yourself
 * using:
 * - `document.getElementsByTagName`
 * - `document.getElementsByClassName`
 * - `document.getElementById`
 *
 * This isn't a memory test. If you need to search the web to find a particular
 * property or method signature - go ahead.
 *
 * Good luck!
 *
 *        |
 *     \  +
 *    __G//*=.
 *   (af)(/.\|
 *    \/>' (_--.
 *  _=/ b  ,^\
 * ~~ \)-'   '
 *   / |
 *  '  '
 */
var cssquery = window.cssquery = function(string) {
  // split string + create array;
  var selectors = string.split(" ");
  var querySelectorAll;
  // loop through param; 
  [].forEach.call(selectors, function(selector) {
    var byTagName = document.getElementsByTagName(selector);
    var byClassName = document.getElementByClassName(selector);
    var byId = document.getElementById(selector)
    // 
    querySelectorAll = checkIfASelector(byTagName, byClassName, byId);
  });
  return querySelectorAll;
};

// check if such a selector exists, push to given array;
function checkIfASelector(querySelectorAll, byTagName, byClassName, byId) {
  if (byTagName) {
    querySelectorAll.push(byTagName);
  }
  if (byClassName) {
    querySelectorAll(byClassName);
  }
  if (byId) {
    querySelectorAll(byId)
  }
  return querySelectorAll;
}

