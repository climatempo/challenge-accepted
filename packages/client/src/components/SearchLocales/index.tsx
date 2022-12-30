import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";
import { Wrapper } from "./styles";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { listLocales } from "../../providers/api";
import { Typography } from "@mui/material";

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
      setLoading(true);
      const { list } = await listLocales(
        value.length ? { params: { name: value } } : {}
      );

      setLocales(list.map((it) => concatCityState(it)));
      setLoading(false);
    }, 800)
  );

  useEffect(() => {
    filterMatchingOptionsRef.current(search);
  }, [search]);

  return (
    <Wrapper rootPage={rootPage} transitionMs={routeTransitionMs}>
      {rootPage && <Typography variant="h1">Bom dia!</Typography>}
      <Autocomplete
        loading={loading}
        options={locales}
        sx={{
          width: "100%",
        }}
        inputValue={search}
        onChange={(_, value) => {
          if (value) router.push(value.split(" - ").shift() || "");
          else router.push("/");
        }}
        onInputChange={(_, value) => setSearch(value)}
        renderInput={(params) => <TextField {...params} label={"Cidade"} />}
      />
    </Wrapper>
  );
}
