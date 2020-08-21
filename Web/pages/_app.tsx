import ThemeContainer from "@themes/ThemeContainer"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
