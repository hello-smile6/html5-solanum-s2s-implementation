export const _logContainer=document.getElementById("logContainer");
/**
 * 
 * @param {String} str 
 */
export function userLog(str) {
    _logContainer.innerText += str;
};
export default {
    _logContainer: _logContainer,
    userLog
};