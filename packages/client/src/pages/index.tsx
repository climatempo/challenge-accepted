import { Card } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";
import { listLocales } from "../providers/api";
import { Wrapper } from "./styles";
import { debounce, round } from "lodash";
import produce from "immer";
import { useRouter } from "next/router";

export default function Home() {
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
        search.length ? { params: { name: value } } : {}
      );

      setLocales(list.map((it) => concatCityState(it)));
      setLoading(false);
    }, 800)
  );

  useEffect(() => {
    filterMatchingOptionsRef.current(search);
  }, [search]);

  return (
    <Wrapper>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Autocomplete
            loading={loading}
            options={locales}
            style={{ width: "100%" }}
            inputValue={search}
            onChange={(_, value) => {
              if (value) router.push(value.split(" - ").shift() || "");
            }}
            onInputChange={(_, value) => setSearch(value)}
            renderInput={(params) => <TextField {...params} label={"Cidade"} />}
          />
        </CardContent>
      </Card>
    </Wrapper>
  );
}
