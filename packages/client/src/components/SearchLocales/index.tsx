import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";
import { Image, Wrapper } from "./styles";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { listLocales } from "../../providers/api";
import { CircularProgress, Typography } from "@mui/material";

type Props = {
  rootPage: boolean;
  routeTransitionMs?: number;
};

export default function SearchLocales({ rootPage, routeTransitionMs }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [locales, setLocales] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    listLocales({}).then(({ list }) =>
      setLocales(list.map((it) => `${it.name} - ${it.state}`))
    );
  }, []);

  const concatCityState = ({ name, state }: { name: string; state: string }) =>
    `${name} - ${state}`;

  const filterMatchingOptionsRef = useRef(
    debounce(async (value: string) => {
      const { list } = await listLocales(
        value.length ? { params: { name: value } } : {}
      );

      setLocales(list.map((it) => concatCityState(it)));
      setLoading(false);
    }, 800)
  );

  useEffect(() => {
    setLoading(true);
    filterMatchingOptionsRef.current(search);
  }, [search]);

  return (
    <Wrapper rootPage={rootPage} transitionMs={routeTransitionMs}>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      {rootPage && <Image src="logo.png" alt="Climatempo" />}
      <Autocomplete
        loading={loading}
        options={locales}
        loadingText="Buscando cidades..."
        noOptionsText="Nenhuma cidade encontrada"
        inputValue={search}
        onInputChange={(_, value) => setSearch(value)}
        sx={{
          width: "100%",
        }}
        onChange={(_, value) => {
          if (value) router.push(value.split(" - ").shift() || "");
          else router.push("/");
        }}
        renderInput={(params) => <TextField {...params} label={"Cidade"} />}
      />
    </Wrapper>
  );
}
