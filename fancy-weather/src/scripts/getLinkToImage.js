export const getLinkToImage = (keywords) => {
    keywords = keywords ? `${keywords}` : `weather`;
    const url = `https://api.unsplash.com/photos/random?query=${keywords}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
    let backgroundImageS = document.body;

    fetch(url)
      .then(res => res.json())
      .then(data => {
         let newImageSource = data.urls.regular;
          // backgroundImageS.style.backgroundImage = `url("${newImageSource}")`;
          backgroundImageS.setAttribute("style", `background-image: linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%), url("${newImageSource}")`);
        });
    }

    