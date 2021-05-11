const imgSizePicker = (img) => {
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    if ( windowWidth > 1000  || windowHeight > 1000 ) {
        return img.url
    } else if ( windowWidth > 750  || windowHeight > 750 ) {
        return img.urlLarge
    } else if ( windowWidth > 500  || windowHeight > 500 ) {
        return img.urlMedium
    } else if ( windowWidth > 156  || windowHeight > 156 ) {
        return img.urlSmall
    } 
    return  img.urlThumbnail
} 

export default imgSizePicker