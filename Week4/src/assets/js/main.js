document.addEventListener("DOMContentLoaded", function() { 
    const $submit = document.querySelector('button[type="submit"]');
    $submit &&
        $submit.addEventListener("click", e => {
            e.preventDefault();
            alert("Great!");
        });
});