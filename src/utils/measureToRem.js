const measureToRem = (measureToConvert) => {
    //look for the value in px (return statement as a string) of the body font-size
    var fontSizePx = window.getComputedStyle(document.querySelector('body')).getPropertyValue('font-size')
    //cut the 'px' at the end and make it a number
    fontSizePx = Number(fontSizePx.slice(0,fontSizePx.length-2))
    return (measureToConvert/fontSizePx)
}

export default measureToRem