 window.onload = () => {
     var submitbutton = document.querySelector('.newgame')
     console.log(submitbutton);
     if (submitbutton) {
         submitbutton.addEventListener('click', (event) => {
             event.preventDefault();
             let player1 = document.querySelector('.player1').value;
             let player2 = document.querySelector('.player2').value;
             let player3 = document.querySelector('.player3').value;
             let player4 = document.querySelector('.player4').value;
             fetch(`/newgames`, {
                     method: 'POST',
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