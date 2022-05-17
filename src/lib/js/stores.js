import {readable} from 'svelte/store'

export const config = readable({
    protocol: 'https://',
    domain: "localhost:3000",
    title: 'Robbert Lalisang', // SEO
    subtitle: 'Photography portfolio and blog',
    lang: 'en-US',
    descr: 'Personal website of Robbert Lalisang', // SEO
    author: {
      first_name: 'Robbert', // Used by Title component
      last_name: 'Lalisang', // Used by Title component
      intro: '🌸',
      bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      slug: '/about',
      picture: '/assets/maskable@512.png',
    },
    base64pixel: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89+frfwAJnwPgsflnnwAAAABJRU5ErkJggg==",
    svg_placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E",
  })

  // https://codepen.io/shshaw/post/responsive-placeholder-image