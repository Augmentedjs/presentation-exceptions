import { ErrorDialogView } from "presentation-dialogs";

/**
 * Handler for fallback exception handling in the application
 * @param {Error} e Exception
 * @param {Logger} logger Logger class to use (will default to console)
 */
const ErrorHandler = async (e, logger) => {
  const Logger = (logger) ? logger : console;
  Logger.error(e);
  const m = new ErrorDialogView({ "body": e });
  if (m && m.render) {
    await m.render();
  } else {
    alert(`Error ${e}`);
  }
  if (e.name === "RenderError") {
    try {
      const body = await document.querySelector("body");
      const a = await document.createElement("a");
      a.setAttribute("href", "/");
      const text = await document.createTextNode("Reset Application");
      await a.appendChild(text);
      await a.classList.add("reset");
      await body.appendChild(a);
    } catch (e) {
      Logger.error(e);
    }
  }
};

export default ErrorHandler;
