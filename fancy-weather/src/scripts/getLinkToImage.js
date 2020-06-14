export const getLinkToImage = () => {
    const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
    let backgroundImageS = document.body;

    fetch(url)
      .then(res => res.json())
      .then(data => {
         let newImageSource = data.urls.regular;
          backgroundImageS.style.backgroundImage = `url("${newImageSource}")`;
        });
    }

    