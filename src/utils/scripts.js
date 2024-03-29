export const resize = (e) =>
  (e.target.style.height = e.target.scrollHeight + "px");

export const setCursorToEnd = (e, text) =>
  e.target.setSelectionRange(text.length, text.length);

export const replaceText = (text) => {
  return text.replace(/\r?\n|\r/g, ' ')
}
