/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color:'#F40404',
        secondary_color:'#C4C4C4',
        yellow:'#FFB800',
        header:'#282828',
        white:'#fff',
        after:'red',
        p:'#6C6C6C',
        shadow_color:'#F0F0F0',
        footer_color:'#1F1F1F',
      },
      maxWidth:{
          container: '1320px',
      },
      fontFamily:{
        pops:['Poppins, sans-serif'],
      },
      backgroundImage:{
        banner:"url('./images/banner.png')",
        imgOne:"url('./images/img-one.jpg')",
        imgTwo:"url('./images/img-two.jpg')",
        imgThree:"url('./images/img-three.jpg')",
        companyImg:"url('./images/company-img.png')",
        blog_img_one:"url('./images/blog_img1.png')",
        blog_img_two:"url('./images/blog_img2.png')",
        blog_img_three:"url('./images/blog_img3.png')",
      }
    },
  },
  plugins: [],
}
