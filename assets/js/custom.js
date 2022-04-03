(function ($) {
  "use strict";
})(jQuery);

var sheet = document.createElement("style"),
  $rangeInput = $(".range input"),
  prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
    val = (curVal - 1) * 16.666666667,
    style = "";

  // Set active label
  $(".range-labels li").removeClass("active selected");

  var curLabel = $(".range-labels").find("li:nth-child(" + curVal + ")");

  curLabel.addClass("active selected");
  curLabel.prevAll().addClass("selected");

  return style;
};

$rangeInput.on("input", function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$(".range-labels li").on("click", function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger("input");
});

// ================================ Pich level script ======================

var sheet = document.createElement("style"),
  $rangeInput = $(".range input"),
  prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
    val = (curVal - 1) * 16.666666667,
    style = "";

  // Set active label
  $(".range-labels-pich li").removeClass("active selected");

  var curLabel = $(".range-labels-pich").find("li:nth-child(" + curVal + ")");

  curLabel.addClass("active selected");
  curLabel.prevAll().addClass("selected");

  return style;
};

$rangeInput.on("input", function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$(".range-labels-pich li").on("click", function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger("input");
});

// ================================button tab movement script ================================

// Add active class to the current button (highlight it)

/**
 * Simulate a click event.
 * @public
 * @param {Element} elem  the element to simulate a click on
 */
function simulateClick(elem) {
  // Create our event (with options)
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  // If cancelled, don't dispatch our event
  var canceled = !elem.dispatchEvent(evt);
}

function prepareTabs(triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", function (event) {
    event.preventDefault();
    //alert('test-'+this.parentNode.tagName);
    tabTrigger.show();

    //console.log('>>>' + this.parentNode.tagName);
    //console.log('>>>>' + this.parentNode.parentNode.tagName);
    var sibling = this.parentNode.parentNode.firstChild;
    // Loop through each sibling and push to the array
    while (sibling) {
      if (sibling.tagName !== undefined) {
        //console.log('>>>' + sibling.tagName);
        //console.log('--->' + sibling.classList);
        //console.log('>>' + sibling.firstChild.href);
        sibling.classList.remove("active");
      }
      sibling = sibling.nextSibling;
    }
    this.parentNode.classList.add("active");
    console.log("href = " + this.href);
    simulateClick(document.querySelector(this.href));
  });
}

var triggerTabListTest = [].slice.call(document.querySelectorAll("#myTab a"));
triggerTabListTest.forEach(function (triggerEl) {
  prepareTabs(triggerEl);
});
