import {AppBar, Box, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Autocomplete} from "@react-google-maps/api";
import SearchIcon from '@material-ui/icons/Search';

import  useStyle from './styles'
export function Header() {
    const classes = useStyle();
    return (
        <AppBar position={"static"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box style={{display:'flex'}}>
                    <Typography variant='h6' className={classes.title}>
                        Explore New
                    </Typography>
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder='Search...' classes={{root:classes.inputRoot, input:classes.inputInput}}/>
                        </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>
        </AppBar>
    )
}