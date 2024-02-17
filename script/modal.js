function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopups() {
const modals = document.getElementsByClassName("modal");
    for (var i=0; i < modals.length; i++) {
        modals[i].style.display = "none";
};
}

var closeModalButtons = document.getElementsByClassName("close");
    for (var i=0; i < closeModalButtons.length; i++) {
    closeModalButtons[i].addEventListener("click", closePopups);
};

window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (var i=0; i < modals.length; i++) {
        const modal = modals[i];
        if (event.target == modal) {
        modal.style.display = "none";
        return;
        };
    }
}