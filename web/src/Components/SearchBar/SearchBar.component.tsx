import React, { FormEvent, useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector, useServerAddress } from '../../hooks';
import { DetailedLocale, setLocale } from '../../Reducers/Locale.reducer';
import { useSnackbar } from 'notistack';

function SearchBar() {
    const [options, setOptions] = useState<DetailedLocale[]>([]);
    const pageLocale = useAppSelector(state => state.locale.value);
    const { enqueueSnackbar: notify } = useSnackbar();
    const dispatch = useAppDispatch();
    const { search } = useServerAddress();
    let fetchBlock = false;

    function fetchSearch(event: FormEvent) {
        if(fetchBlock)
            return;

        const input = (event.target as HTMLInputElement).value.trim();
        if(input.length < 3 || input.length > 100)
            return;

        fetch(search(input))
            .then(response => response.json())
            .then(setOptions)
            .catch(err => {
                fetchBlock = true;
                console.error(err);
                notify('Alguma coisa deu errado.', { variant: 'error'});

                setTimeout(() => fetchBlock = false, 1000);
            });
    }

    function setPageLocale(event: FormEvent) {
        if(fetchBlock)
            return;

        const selected = (event.target as HTMLDListElement).getAttribute('data-locale');
        if(!selected)
            return;
        const locale = JSON.parse(selected) as DetailedLocale;
        if(pageLocale && pageLocale.idlocale === locale.idlocale)
            return;

        dispatch(setLocale(locale));
    }

    function onKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
        if(event.key !== 'Enter')
            return;
        setTimeout(() => {
            const selected = (event.target as HTMLInputElement).value;
            console.log(selected);
            const locale = options.filter(
                locale => locale.city + ', ' + locale.uf.toUpperCase() === selected
            )[0];
            if(!locale)
                return;
            if(pageLocale && pageLocale.idlocale === locale.idlocale)
                return;
            dispatch(setLocale(locale));
        }, 50);
    }

    return <Autocomplete
        options={options}
        onInput={fetchSearch}
        onChange={setPageLocale}
        onKeyDown={onKeyPress}
        fullWidth
        inputMode="text"
        getOptionLabel={locale => locale ? locale.city + ', ' + locale.uf.toUpperCase() : ''}
        isOptionEqualToValue={(option, value) => option.idlocale === value.idlocale}
        renderOption={(props, locale) => (
            <Box component="li"
                 {...props}
                 data-locale={JSON.stringify(locale)}
                 key={locale.idlocale}>
                { locale.city + ', ' + locale.uf.toUpperCase() }
            </Box>
        )}
        renderInput={(params) => (
            <TextField
                {...params}
                hiddenLabel
                variant="outlined"
                label="Buscar cidade"
                fullWidth
                type="search"
                InputProps={{
                    ...params.InputProps,
                    type: 'search',
                }}
            />
        )}
    />;

}

export default SearchBar;