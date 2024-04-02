const contentful = require('contentful');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const client = contentful.createClient({
    space: 'z86d6gblfwx0',
    accessToken: ACCESS_TOKEN,
});

export const getBlogPage = (slug) => {
    return client
        .getEntries({ 'fields.slug': slug, content_type: 'blogPage', include: 3 })
        .then((entry) => entry.items[0])
        .catch((err) => console.log(err))
}

export const getBlogPages = () => {
    return client
        .getEntries({ content_type: 'blogPage', include: 3 })
        .then((entry) => entry.items)
        .catch((err) => console.log(err))
}

export const searchBlogPages = (query = '') => {
    return client
        .getEntries({ content_type: 'blogPage', include: 3, query })
        .then((entry) => entry.items)
        .catch((err) => console.log(err))
}
