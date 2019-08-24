window.onload = () => {
    // fetch API get question

    // innerHTML, innerText
    const pathname = window.location.pathname;
    const pathNameParts = pathname.split('/');
    const gameId = pathNameParts[pathNameParts.length - 1];
    fetch(`/game/${gameId}`, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);


            // display
            document.querySelector('.player1-name').innerHTML = data.player1.name;
            document.querySelector('.player2-name').innerHTML = data.player2.name;
            document.querySelector('.player3-name').innerHTML = data.player3.name;
            document.querySelector('.player4-name').innerHTML = data.player4.name;

            // listen button click
            document.querySelector('.btn btn-primary btn-lg').addEventListener('click', () => {
                const submitButton = document.querySelector('.btn btn-primary btn-lg');
                var n = 1;
                submitButton.insertAdjacentElement('beforeend', ` <div class="col">Round ${n++}</div>
                <div class="col player1-score"></div>
                <div class="col player2-score"></div>
                <div class="col player3-score"></div>
                <div class="col player4-score"></div>`);
            });
        })
        .catch((error) => {
            console.log(error);
            window.alert(error.message);
        });
}