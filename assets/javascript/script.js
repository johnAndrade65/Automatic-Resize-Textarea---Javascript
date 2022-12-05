/*--==VARIABLE==--*/
const textarea = document.querySelector('textarea');

/*--==ARROW FUNCTION "keyup" THAT MODIFIES THE STYLIZATION OF THE
 "TEXTAREA" AND MODIFIES THE SIZE OF THE "TEXTAREA" ACCORDING 
 TO THE VALUE OF THE VARIABLE "scHeight"==--*/
textarea.addEventListener('keyup', e => {
    textarea.style.height = '59px'
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`
})