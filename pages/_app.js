import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3JCR1Z7ZCM"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-3JCR1Z7ZCM');
    </script>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
