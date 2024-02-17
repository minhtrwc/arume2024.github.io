document.getElementById("dbSearchButton").addEventListener("click", () => {
    const searchText = document.getElementById("dbSearchText").value;
    window.location.href = `./Result.html?search=${searchText}`;
});

document.getElementById("internetSearchButton").addEventListener("click", () => {
    const domain = document.getElementById("domain");
    if (!domain.value) {
        domain.classList.add("input-error");
        return;
    }

    let portValue = document.getElementById("port").value;
    portValue = portValue? portValue : 10001;
    window.location.href = `./Result.html?domain=${domain.value}&port=${portValue}`;
});