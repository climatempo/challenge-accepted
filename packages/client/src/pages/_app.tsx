import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container, Wrapper } from "./styles";
import SearchLocales from "../components/SearchLocales";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const rootPage = router.pathname === "/";

  const routTransitionMs = 400;

  return (
    <Wrapper>
      <SearchLocales rootPage={rootPage} routeTransitionMs={routTransitionMs} />
      <Container rootPage={rootPage} transitionMs={routTransitionMs}>
        <Component {...pageProps} />
      </Container>
    </Wrapper>
  );
}
