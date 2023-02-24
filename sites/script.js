const filterItem =
    Document.querySelector(".items");

const filterItems =
    Document.querySelectorAll(".gallery.image");

window.onload = () => {
    filterItem.onClick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {

            filterItem.querySelector(".active").classList.remove("active")
            selectedItem.target.classList.add("active")

        }

    }
}