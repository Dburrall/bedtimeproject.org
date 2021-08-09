/**
 * @function fade
 * @description Returns a string for a keyframes fade animation with the
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
export function fade(index, imageIndex, stanzaDuration, oneIndexPercent) {
  return `@keyframes stanza${index}fade${imageIndex} {
    0% {
      opacity: 0;
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }`;
}