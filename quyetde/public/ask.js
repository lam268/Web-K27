window.onload = () => {
    const submitButton = document.querySelector('.Button');
    console.log(submitButton);
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const textAreavalue = document.querySelector('.submit-button').value;
            fetch('/create-question', {
                method: 'POST', //POST,PUT
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    questionContent: textAreavalue
                })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    window.location.href = `/questions/${data.data.id}`;
                })
                .catch((error) => {
                    console.log(error);
                    window.alert(error.message);
                });
        })
    }
}