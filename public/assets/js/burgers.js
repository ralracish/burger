$(function() {
    $(".change-eaten").on("click", function(event) {
        const id = $(this).data("id");
        const newEaten = $(this).data("newEaten");

        const newEatenState = {
            devoured: newEaten
        };

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(() => {
            console.log("changed eaten state to", newEaten);
            location.reload();
        });
    });

    $(".add-burger").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: $("[burger_name = devoured]:checked").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger")
            location.reload();
        });
    })
})

