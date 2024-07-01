window.onload = () => {
    const message = document.getElementById("label");
    const form = document.querySelector('form');
    const itemlist = document.getElementById('items');
    const submitbtn = document.getElementById('submit');
    let edititem = null;

    form.addEventListener("click", additem);
    itemlist.addEventListener("click", handleitem);

    function additem(e) {
        e.preventDefault();

        const newitem = document.getElementById('item').value.trim();
        console.log("newitem:", newitem)
        if (!newitem) return;

        if (submitbtn.value !== "submit") {
            edititem.textContent = newitem;
            submitbtn.value = "submit";
            showmsg("text edited successfully");
            edititem = null;
            return;
        }

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(newitem));

        const deletebtn = createButton("delete", "delete btn-danger btn btn-sm float-right ");
        const editbtn = createButton("edit", "edit btn-success btn btn-sm float-right ");


        li.appendChild(deletebtn);
        li.appendChild(editbtn);
        itemlist.appendChild(li);

        document.getElementById('item').value = "";

    }

    function handleitem(e) {
        if (e.target.classList.contains("delete")) {
            if (confirm("are you sure?")) {
                itemlist.removeChild(e.target.parentNode);
                showmsg("text deleted succesfully");
            }
        } else if (e.target.classList.contains("edit")) {
            document.getElementById("item").value = e.target.parentNode.firstChild.data;
            submitbtn.value = "edit";
            edititem = e.target.parentNode;
        }
    }

    function createButton(text, className) {
        const button = document.createElement("button");
        button.className = `btn ${className}`;
        button.textContent = text;
        button.type = "button";
        return button;
    }

    function showmsg(message) {
        const label = document.getElementById("label");
        label.textContent = message;
        label.style.display = "block";
        setTimeout(() => {
            label.style.display = "none";
        }, 3000);
    }
}

