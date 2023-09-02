module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://unsplash.com",
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      'http://localhost:3000',
      'https://unsplash.com',
      'images.unsplash.com',
      'plus.unsplash.com'
    ],
  },
}