import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider, Theme, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeContextProps {
    children: ReactNode;
}

interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProviderWrapper: React.FC<ThemeContextProps> = ({ children }) => {

    const savedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState<boolean>(savedDarkMode ? JSON.parse(savedDarkMode) : false);



    const toggleDarkMode = (dark?: boolean) => {

        if (dark) {
            setDarkMode(true);
        } else {
            setDarkMode((prevMode) => !prevMode);
        }
    };

    const theme = darkMode ? createDarkTheme() : createLightTheme();
    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};


declare module '@mui/material/styles' {
    interface Palette {
        salmon: Palette['primary'];
        bw: Palette['primary'];
        vip: Palette['primary'];
        ghost: Palette['primary'];
        primaryicon: Palette['primary'];

    }

    interface PaletteOptions {
        salmon?: PaletteOptions['primary'];
        bw?: PaletteOptions['primary'];
        vip?: PaletteOptions['primary'];
        ghost?: PaletteOptions['primary'];
        primaryicon?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        salmon: true;
        bw: true;
        vip: true;
        ghost: true;
        primaryicon: true;
    }
}
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        salmon: true;
        bw: true;
        vip: true;
        ghost: true;
        primaryicon: true;
    }
}

const createLightTheme = (): Theme => {
    return createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#141F78',
                contrastText: '#ffffff'
            },
            ghost: {
                main: '#0065c42b',
                contrastText: '#1E75C4'
            },
            primaryicon: {
                main: '#000000',
            },
            background: {
                default: '#F6F8F9',
                paper: 'white',
            },
            salmon: {
                main: '#F3F3F3',
                contrastText: '#000000'
            },
            bw: {
                main: '#fff',
                contrastText: '#000'
            },
            vip: {
                main: '#fc7900',
                contrastText: '#ffffff'
            },

        },
        components: {
            MuiPaper: {
                styleOverrides: {

                    root: {
                        '&.MuiPaper-ghost': {
                            boxShadow: 'none',
                        },
                        '&.MuiPaper-elevation3': {
                            boxShadow: 'none',
                            backgroundColor: '#f3f3f3',
                        },
                        '&.MuiPaper-elevation7': {
                            boxShadow: 'none',
                            // border: '1px solid #1E75C4',
                            // backgroundColor: '#EEF4FF',
                        },
                        '&.MuiPaper-elevation9': {
                            boxShadow: 'none',
                            // border: '1px solid #1E75C4',
                        },
                    },
                },
            },
            // MuiTextField: {
            //     styleOverrides: {
            //         root: {
            //             // '& label': {
            //             //     color: '#000000',
            //             // },
            //             // '& label.Mui-focused': {
            //             //     color: '#000000',
            //             // },
            //             // '& .MuiInput-underline:after': {
            //             //     borderBottomColor: '#1E75C4',
            //             // },
            //             // '& .MuiOutlinedInput-root': {
            //             //     '& fieldset': {
            //             //         borderColor: '#1E75C4',
            //             //     },
            //                 // '&:hover fieldset': {
            //                 //     borderColor: '#000000',
            //                 // },
            //                 // '&.Mui-focused fieldset': {
            //                 //     borderColor: '#000000',
            //                 // },
            //             },
            //         },
            //     },
            // },
            // MuiFormControl: {
            //     styleOverrides: {
            //         root: {
            //             // '& label': {
            //             //     color: '#000000',
            //             // },
            //             // '& label.Mui-focused': {
            //             //     color: '#000000',
            //             // },
            //             // '& .MuiInput-underline:after': {
            //             //     borderBottomColor: '#1E75C4',
            //             // },
            //             // '& .MuiOutlinedInput-root': {
            //             //     '& fieldset': {
            //             //         borderColor: '#1E75C4',
            //             //     },
            //                 // '&:hover fieldset': {
            //                 //     borderColor: '#000000',
            //                 // },
            //                 // '&.Mui-focused fieldset': {
            //                 //     borderColor: '#000000',
            //                 // },
            //             },
            //         },
            //     },
            // },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        '& .MuiInputBase-root': {
                            borderRadius: '60px', // Задаем радиус скругления
                        }
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        '& .MuiTableCell-root': {
                            backgroundColor: '#1E75C4',
                            color: 'white',
                            borderColor: '#1E75C4'
                        },
                    },
                },
            },
            MuiTablePagination: {
                styleOverrides: {
                    root: {

                        backgroundColor: '#ffffff',
                        boxShadow: '0px -9px 48px -22px rgba(0,0,0,0.55)',

                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&.MuiButton-textBw:hover': {
                            color: '#1E75C4'
                        },
                        '&.MuiButton-containedGhost': {
                            boxShadow: 'none',
                        },
                        containedGhost: {
                            boxShadow: 'none',
                        },
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        '&.MuiIconButton-colorBw:hover': {
                            color: '#1E75C4'
                        },
                        '&.MuiIconButton-colorPrimaryicon': {
                            opacity: 0.5,
                        },
                        '&.MuiIconButton-colorPrimaryicon:hover': {
                            color: '#1E75C4',
                            opacity: 1
                        },
                    },
                },
            },
        },
    });
};

const createDarkTheme = (): Theme => {
    return createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#1E2128',
                paper: '#262930',
            },
            primary: {
                main: '#06FBFE',
            },
            primaryicon: {
                main: '#ffffff',
            },
            ghost: {
                main: '#284D55',
                contrastText: '#06FBFE'
            },
            salmon: {
                main: '#373A40',
                contrastText: '#ffffff',

            },
            bw: {
                main: '#fff',
                contrastText: '#000'
            },
            vip: {
                main: '#fc7900',
                contrastText: '#ffffff'
            }
        },

        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        '&.MuiPaper-ghost': {
                            boxShadow: 'none',
                        },
                        '&.MuiPaper-elevation2': {
                            backgroundColor: '#262930',
                        },
                        '&.MuiPaper-elevation9': {
                            boxShadow: 'none',
                            backgroundColor: '#262930',
                            backgroundImage: 'none'
                        },
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        '& .MuiTableCell-root': {
                            backgroundColor: '#262930',
                        },
                    },
                },
            },
            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#262930',
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&.MuiButton-textBw:hover': {
                            color: '#06FBFE'
                        },
                        '&.MuiButton-containedGhost': {
                            boxShadow: 'none',
                        },
                        containedGhost: {
                            boxShadow: 'none',
                        },
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        '&.MuiIconButton-colorBw:hover': {
                            color: '#06FBFE'
                        },
                        '&.MuiIconButton-colorPrimaryicon': {
                            opacity: 0.7,
                        },
                        '&.MuiIconButton-colorPrimaryicon:hover': {
                            color: '#06FBFE',
                            opacity: 1,
                        },
                    },
                },
            },
        },

    });
};
