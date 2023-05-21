import { createTheme, style } from '@vanilla-extract/css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';

export const [themeClass, vars] = createTheme({
    color: {
        brand: /*tw*/ ' text-cyan-300',
    },
    font: {
        body: /*tw*/ 'font-sans'
    }
});

export const exampleStyle = style({
    backgroundColor: vars.color.brand,
    fontFamily: vars.font.body,
    color: 'red',
    padding: 10
});

export const button = recipe({
    base: [
        /*tw*/ 'h-10 rounded-lg px-6 font-semibold',
        {
            boxShadow:   /*tw*/ 'rgb(0 0 0 / 12%) 0px 6px 16px !important'
        }
    ],
    variants: {
        intent: {
            primary: [  /*tw*/ 'bg-black text-white'],
            danger: [  /*tw*/ 'bg-red text-white'],
        },
        size: {
            regular: [  /*tw*/ 'text-base'],
            large: [  /*tw*/ 'text-2xl'],
        },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'regular'
    }
});

export type ButtonVariants = RecipeVariants<typeof button>;

export const mainStyle = style([
  /*tw*/ 'flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'
]);

export const containerStyle = style([
    /*tw*/  'container  flex flex-col items-center justify-center gap-12 px-4 py-16'
]);

export const textPurpleStyle = style([
   /*tw*/   'text-[hsl(280,100%,70%)]'
]);

export const headingOneStyles = style([
     /*tw*/ 'text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'
]);

export const textLargeStyle = style([
    /*tw*/ 'text-lg'
]);


export const navStyle = style([
    /*tw*/ 'bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'
]);
