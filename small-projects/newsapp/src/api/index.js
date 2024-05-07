const API_KEY = "4419be2aa3714f139d3bb7fc70e36c95"

export async function fetchNews(category = null) {
    let API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

    if (category && category !== "Top Headlines") {
        API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category.toLowerCase()}&apiKey=${API_KEY}`
    }

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Unable to fetch data:: ${response.statusText}`)
        }

        const data = await response.json();
        const articles = data.articles;
        return articles;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

