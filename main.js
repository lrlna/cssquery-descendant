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
  // split selectors;
  var selectors = string.split(" ");
  var querySelectorAll = [];
  // loop through array;  
  // if array has one element -- search for element
  // if array has more then one, loop
  selectors.reduce(function(previousValue, currentValue, index, array) {

    console.log("previous value", previousValue);
    console.log("current value", currentValue);
    var byTagName = document.getElementsByTagName(previousValue);

    // check if such a selector exists, push to given array;
    if (byTagName) {
      querySelectorAll.push(byTagName);
    }
  })

  return querySelectorAll;
};

