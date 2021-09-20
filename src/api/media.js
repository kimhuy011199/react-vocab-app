const getStrapiMedia = (url) => {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${
    process.env.MY_HEROKU_URL || "https://strapi-be-app.herokuapp.com"
  }${url}`;
};

export default getStrapiMedia;
