import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import  { MenuItems } from './Menu';
import { useLocation, useNavigate } from 'react-router';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { IconButton } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Props = {
    state: boolean,
    setState: any
}
export default function AnchorTemporaryDrawer({ state, setState }: Props) {
    const path = useLocation()
    const navigate = useNavigate()
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            <a href="/" className="w-full flex justify-center py-[20px]">
                <img src="/sublogo.png" className="h-[100px]" alt="" />
            </a>

            {MenuItems.map((item: any) =>

                <ListItem className={path.pathname == item.link ? 'bg-primary text-white' : ''} key={item.title} onClick={() => navigate(item.link)} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <IconButton color={path.pathname == item.link ? 'bw' : 'primary'}>
                                {item.icon}
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>

            )}

            <Divider />

            <ListItem onClick={() => navigate('/admin')} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <IconButton>
                            <AdminPanelSettingsIcon />
                        </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={'Админ панель'} />
                </ListItemButton>
            </ListItem>
        </Box>
    );

    return (
        <Drawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer(false)}
        >
            {list('left')}
        </Drawer>

    );
}