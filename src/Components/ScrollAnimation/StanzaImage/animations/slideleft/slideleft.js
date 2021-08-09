/**
 * @function slideleft
 * @description Returns a string for a keyframes slide left animation with the
 * appropriate timing based on the image's placement in the story.
 * @author Alexander Burdiss
 * @since 7/10/21
 * @version 1.0.0
 * @param {number} index
 * @param {number} imageIndex
 * @param {number} stanzaDuration
 * @param {number} oneIndexPercent
 * @returns {string} A Keyframes animation that needs to be placed inside a
 * <style> tag
 */
export function slideleft(index, imageIndex, stanzaDuration, oneIndexPercent) {
  return `@keyframes stanza${index}slideleft${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-125px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(-200px);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }`;
}