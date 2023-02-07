export const getGifs = async(category) => {
    // const api_key = "B2EyFGzwVGtxSK6wwmGKhb6TOZNK01XO";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=B2EyFGzwVGtxSK6wwmGKhb6TOZNK01XO&limit=20&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    

    const gifs = data.map( (g) => ({
        id: g.id,
        title: g.title,
        url: g.images.downsized_medium.url
    } ))
    return gifs;
}