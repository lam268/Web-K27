 window.onload = () => {
     const submitButton = document.querySelector('.btn btn-primary btn-lg');
     console.log(submitButton);
     if (submitButton) {
         submitButton.addEventListener('click', (event) => {
             event.preventDefault();
             const textAreavalue1 = document.getElementsByClassName('.player1').value;
             const textAreavalue2 = document.getElementsByClassName('.player2').value;
             const textAreavalue3 = document.getElementsByClassName('.player3').value;
             const textAreavalue4 = document.getElementsByClassName('.player4').value;
             fetch('/create-player', {
                     method: 'POST', //POST,PUT
                     headers: {
                         'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                         player1: textAreavalue1,
                         player2: textAreavalue2,
                         player3: textAreavalue3,
                         player4: textAreavalue4
                     })
                 })
                 .then((response) => {
                     return response.json();
                 })
                 .then((data) => {
                     window.location.href = `/games/${data.data.id}`;
                 })
                 .catch((error) => {
                     console.log(error);
                     window.alert(error.message);
                 });
         })
     }
 }