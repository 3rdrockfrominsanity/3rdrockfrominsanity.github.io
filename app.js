 // Toggle description visibility
 function toggleDescription(button) {

    const description = button.nextElementSibling;

    if (description.classList.contains('description')) {
        description.classList.toggle('active');
    }

    var container = document.querySelector('.plants-container');{
    container.classList.toggle('show-description');
    }
}