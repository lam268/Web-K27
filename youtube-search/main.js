window.onload = () => {
    let isLoading;
    let timeOut = null;
    document.querySelector('#search').addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector('#keyword');
        var flag = true;
        if (input) {
            input.addEventListener('input', function(event) {
                window.setTimeout(() => {
                    const searchKeyword = document.querySelector('.form-control').value;
                    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchKeyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`, {
                            method: 'GET'
                        })
                        .then((res) => {
                            return res.json();
                        })
                        .then((data) => {
                            console.log(data)
                            var resultElement = document.querySelector('#result-list');
                            resultElement.innerHTML = '';
                            for (const item of data.items) {
                                resultElement.insertAdjacentHTML("beforeend", `<a class='result col-md-12' href='https://www.youtube.com/watch?v=${item.id.videoId}' target='_blank'>
                                <div class='row'>
                                    <div class='col-4'>
                                        <img class="thumnails" src='${item.snippet.thumbnails.medium.url}' />
                                    </div>
                                    <div class='col-8'>
                                        <div class='video-info'>
                                            <h2 class='title'>${item.snippet.title}</h2>
                                            <p class='description'>${item.snippet.description}</p>
                                            <span>View >></span>
                                        </div>
                                    </div>
                                </div>
                            </a>`)
                            }
                            console.log(data.nextPageToken)
                            if (data.nextPageToken) {
                                let flag = true;
                                window.onscroll = function() {
                                    if (document.documentElement.offsetHeight - window.innerHeight - window.scrollY <= 200) {
                                        // ajax call get data from server and append to the div
                                        flag = false;
                                        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chipu&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${data.nextPageToken}`, {
                                                method: 'GET'
                                            })
                                            .then((res) => {
                                                return res.json();
                                            })
                                            .then((data) => {
                                                for (const item of data.items) {
                                                    resultElement.insertAdjacentHTML("beforeend", `<a class='result col-md-12' href='https://www.youtube.com/watch?v=${item.id.videoId}' target='_blank'>
                                        <div class='row'>
                                            <div class='col-4'>
                                                <img class="thumnails" src='${item.snippet.thumbnails.medium.url}' />
                                            </div>
                                            <div class='col-8'>
                                                <div class='video-info'>
                                                    <h2 class='title'>${item.snippet.title}</h2>
                                                    <p class='description'>${item.snippet.description}</p>
                                                    <span>View >></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>`)
                                                }
                                            })
                                            .then(() => {
                                                flag = true;
                                            })
                                            .catch((error) => {
                                                console.log(error);
                                                window.alert(error.message);
                                            });
                                    }

                                }
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            window.alert(error.message);
                        });
                    flag = true;
                }, 1000);
            })
        }
    })
}