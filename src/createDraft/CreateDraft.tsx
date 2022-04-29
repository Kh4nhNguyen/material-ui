import * as React from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    MenuItem,
    ButtonGroup,
    Button
} from "@mui/material";
import {styled} from '@mui/system';


const CreateDraft = () => {
    return (
        <>
            <Box component="form" noValidate
                 sx={{
                     width: '920px',
                     height:'909px',
                     backgroundColor: 'white',
                     display: 'flex',
                     flexDirection: 'column',
                     margin: 'auto',
                     padding: '32px',
                     borderRadius:'12px',
                 }}
            >
                <Box>
                    <Grid container spacing={{sx: 2, md: 2}}>
                        <Grid item xs={4}
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                        >
                            <Typography variant="h5" fontSize='17px'>
                                Title
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                placeholder='e. g. Rotation Sphere'
                            />
                        </Grid>
                        <Grid item xs={4}
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                        >
                            <Typography variant="h5">
                                Description
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                placeholder='e. g. A short movie of rotatiing Sphere.'
                                multiline
                                rows={5}
                            />
                        </Grid>
                        <Grid item xs={4}
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                        >
                            <Typography variant="h5">
                                Blockchain
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                placeholder=''
                                select
                                defaultValue={1}
                            >
                                <MenuItem value={1}>Etheriem / Main Network</MenuItem>
                                <MenuItem>2</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                        >
                            <Typography variant="h5">
                                Creator Address
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                placeholder='e. g. 0x111111111111111111111'
                            />
                        </Grid>
                        <Grid item xs={4}
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                        >
                            <Typography variant="h5">
                                Number of copies
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <ButtonGroup variant="contained" aria-label="primary button group" sx={{
                                boxShadow:'none',
                            }}>
                                <Button sx={
                                    {
                                        color: '#0000008A',
                                        background: '#00000014',
                                        padding:'0px',
                                        borderRadius: '50%!important',
                                        borderRight:'0px!important',
                                        width:'32px!important',
                                        height:'32px!important'
                                    }
                                }>
                                    -
                                </Button>
                                <Button sx={
                                              {
                                                  color: '#0000008A',
                                                  background: '#00000014',
                                                  padding:'0px',
                                                  borderRadius: '8px!important',
                                                  borderRight:'0px!important',
                                                  width:'32px!important',
                                                  height:'32px!important'
                                              }
                                          }>1</Button>
                                <Button sx={
                                    {
                                        color: '#0000008A',
                                        background: '#00000014',
                                        padding:'0px',
                                        borderRadius: '50%!important',
                                        borderRight:'0px!important'
                                    }
                                }>+</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={4}
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                        >
                            <TextField

                                fullWidth
                                placeholder=''
                                select
                                defaultValue={1}
                            >
                                <MenuItem value={1}>Advanced Oprtions</MenuItem>
                                <MenuItem>2</MenuItem>
                            </TextField>

                        </Grid>
                        <Grid item xs={8}>
                        </Grid>
                        <Grid item xs={4}
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                        >
                            <Typography variant="h5"
                                        display='flex'
                                        flexDirection='row'>
                                Properties
                                <Typography variant='h6'>(optional)</Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                placeholder=''
                                label={'size'}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                placeholder=''
                                label={'1440 x 820 px'}
                            />
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                placeholder='key'

                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                placeholder='value'

                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default CreateDraft