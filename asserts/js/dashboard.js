function menuClick() {
    if(document.getElementById('overlayID').style.display == 'none' || document.getElementById('overlayID').style.display == '') {
        document.getElementById('overlayID').style.display = 'block'
        document.getElementById('sidebar').style.display = 'block'
    } else {
        document.getElementById('overlayID').style.display = 'none'
        document.getElementById('sidebar').style.display = 'none'
    }
}




