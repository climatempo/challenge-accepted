import { extendTheme, theme as BaseTheme, ThemeComponents, withDefaultColorScheme } from "@chakra-ui/react";

const fonts = {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif"
}

const components: ThemeComponents = {
    ...BaseTheme.components,
    Badge: {
        baseStyle: {
            paddingX: 2,
            paddingY: 0.5
        }
    }
}

const sizes = {
    ...BaseTheme.sizes,
    container: {
        '2xl': '1440px'
    }

}

export const theme = extendTheme({
    ...BaseTheme,
    fonts: {
        ...fonts
    },
    sizes: {
        ...sizes
    },
    components: {
        ...components
    }
}, withDefaultColorScheme({
    colorScheme: "blue",
    components: ['Button']
}))
