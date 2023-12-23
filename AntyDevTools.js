document.oncontextmenu = function (e) {
  e.preventDefault();
  return false;
};

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

function isDevToolsOpen() {
  const element = new Image();
  element.__defineGetter__("id", () => {
    console.warn(
      "Warning: This console is for developers only. If someone asked you to paste something here, it may be a scam."
    );
  });
  console.group(
    "%cStop!",
    "font-size: 50px; font-weight: bold; color: #6E32C3; text-shadow: 4px 4px 8px #7158e2, 6px 6px 10px #38a3fd"
  );
  console.log(
    "%cNo Skidding",
    "font-size: 50px; font-weight: bold; color: #6E32C3; text-shadow: 4px 4px 8px #7158e2, 6px 6px 10px #38a3fd"
  );
  console.groupEnd();
}

isDevToolsOpen();
