import ReactDOM from "react-dom";

const containerStyle = "display: inline-block; position: absolute"


const measureElement = (element) => {

const container = document.createElement('div')
container.id = 'measureLayer'
container.style = containerStyle  
document.getElementById("root").appendChild(container)
ReactDOM.render(element, container)

const height = document.getElementById('measureLayer').clientHeight
const width = document.getElementById('measureLayer').clientWidth

ReactDOM.unmountComponentAtNode(container);
container.parentNode.removeChild(container);

return { height, width }
}

export default measureElement