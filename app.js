// axiom Request Promise is only resolved till everything is finished

// const searchRequest = axios.get('http://api.tvmaze.com/singlesearch/shows?q=girls')

// Promise Object auf auf Data zurgreiffen mit res (ist die Response Promise Object)

//     .then(res => {
//         console.log(res.data.image.medium)
//     })

//     .catch(err => {
//         console.log("ERROR!", err)
//     });

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const images = document.querySelectorAll('img')
    if (images) {
        removeImages(images);
    }
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get('http://api.tvmaze.com/search/shows', config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

const removeImages = (images) => {
    for (image of images) {
        image.remove();
    }
}



