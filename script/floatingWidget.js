
let profile = document.querySelectorAll('.profile_block > .profile')
let floatingWidget = document.querySelector('#floatingWidget')

function isPotrait() {
   if(document.documentElement.clientWidth > document.documentElement.clientHeight) {
    floatingWidget.style.width = "60vh"
    floatingWidget.style.height = "60vh"
    return false
   } else {
    floatingWidget.style.left = "0px"
    floatingWidget.style.width = "100%"
    floatingWidget.style.height = document.documentElement.clientHeight / 2 + "px"
    return true
   }
}   

for(let i of profile) {
    i.addEventListener('mouseover', e => {

        let floatingWidget = document.querySelector('#floatingWidget')
        floatingWidget.style.visibility = "visible"
        floatingWidget.style.opacity = "1"

        if(isPotrait()) {

            if(e.clientY > document.documentElement.clientHeight / 2) {
                floatingWidget.style.top = "0px"
            } else {
                floatingWidget.style.top = document.documentElement.clientHeight / 2 + "px"
            }

        } else {
            // to set top value 
            if(e.clientY > (document.documentElement.clientHeight / 3)*2)
                floatingWidget.style.top = e.clientY - e.offsetY + e.target.clientHeight  - floatingWidget.clientHeight + "px"
            else if (e.clientY < document.documentElement.clientHeight / 3)
                floatingWidget.style.top = Math.max(e.clientY - e.offsetY, 10) + "px"
            else
                floatingWidget.style.top = Math.max(e.clientY - e.offsetY - floatingWidget.clientHeight/2, 10) + "px"
            // to set left value 
            if(e.clientX > document.documentElement.clientWidth / 2) {
                floatingWidget.style.left = (e.clientX  - e.offsetX - floatingWidget.clientWidth) + "px" 
            } else {
                floatingWidget.style.left = (e.clientX  - e.offsetX + e.target.clientWidth) + "px" 
            }
        }
        
    })

    i.addEventListener('mouseout', e => {
        console.log(floatingWidget.clientWidth)
        hideFloatingWidget(e)
    })
}

function hideFloatingWidget(e) {
    let bool = e.relatedTarget.id == 'floatingWidget'
    if(!bool) {
            floatingWidget.style.opacity = "0"
            floatingWidget.style.visibility = "hidden"
        }
}
