import {
    Box,
    Button,
    Checkbox, Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import * as React from "react";
import {useState} from "react";

const Login = () => {
    const [hidePas,setHidePas] = useState<boolean>(true)
    return (
        <>
            <Container maxWidth='xs'>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#e1eff6',
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <Typography component="h1" variant="h5" color='blue'>
                        Sign up
                    </Typography>
                    <FormControl>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        helperText="Please enter your first name"
                                        id="demo-helper-text-aligned"
                                        label="Fisrt Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        helperText="Please enter your last name"
                                        id="demo-helper-text-aligned"
                                        label="Last Name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        helperText="Please enter your email"
                                        id="demo-helper-text-aligned"
                                        label="Email Address"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type={hidePas?'password':'text'}
                                        helperText="Please enter your password email"
                                        id="demo-helper-text-aligned"
                                        label="Password"
                                    />
                                </Grid>
                            </Grid>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onClick={()=>setHidePas(!hidePas)}/>} label="Hiện mật khẩu" />
                            </FormGroup>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={()=>{}}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </FormControl>
                </Box>
            </Container>
        </>
    )
}

export  default Login