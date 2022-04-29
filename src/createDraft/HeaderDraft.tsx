import * as React from 'react'
import {Box, Button, Typography} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Props {
    width: string
}

const HeaderDraft: React.FC<Props> = (props) => {
    return (
        <>
            <Box
                sx={{
                    width: props.width,
                    height: '72px',
                    background: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0px 9px 16px rgba(0, 0, 0, 0.06), 0px 2.01027px 3.57381px rgba(0, 0, 0, 0.03), 0px 0.598509px 1.06402px rgba(0, 0, 0, 0.0161557)'
                }}
            >
                <Box sx={{
                    width: '186px',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '0 10px',
                    justifyContent: 'space-between'
                }}>
                    <svg width="72" height="29.1" viewBox="0 0 94 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M39.7014 10V38.8202H33.4281V20.0047L25.3507 32.3151H25.1867L17.1913 20.1282V38.8202H11V10H17.8063L25.3507 22.1868L32.8951 10H39.7014ZM50.2559 16.2787V20.4473H45.3357V16.2787H50.2559ZM50.1329 22.2692V38.8202H45.4587V22.2692H50.1329ZM69.622 38.8202V28.1054C69.622 26.1908 69.13 24.6881 68.1459 23.597C67.1823 22.506 65.8088 21.9605 64.0252 21.9605C63.4307 21.9605 62.8976 22.0325 62.4261 22.1766C61.9546 22.3207 61.5241 22.5163 61.1345 22.7633C60.7451 23.0104 60.3863 23.2986 60.0582 23.6279C59.7507 23.9367 59.4637 24.2661 59.1972 24.616V22.2693H54.523V38.8202H59.1972V29.5875C59.1972 28.4759 59.4535 27.6421 59.966 27.0864C60.4991 26.5099 61.2166 26.2218 62.1186 26.2218C63.0206 26.2218 63.7177 26.5099 64.2097 27.0864C64.7017 27.6421 64.9477 28.4759 64.9477 29.5875V38.8202H69.622ZM82.9388 34.3737V38.1409C82.4468 38.4291 81.9035 38.6555 81.3089 38.8202C80.7144 39.0055 80.0276 39.0981 79.2486 39.0981C78.5311 39.0981 77.875 39.0158 77.2805 38.8511C76.7065 38.707 76.2042 38.4394 75.7737 38.0482C75.3636 37.6571 75.0356 37.1527 74.7896 36.5351C74.5641 35.897 74.4514 35.0942 74.4514 34.1266V26.2834H72.4833V22.2692H74.4514V18.0388H79.1256V22.2692H83.0003V26.2834H79.1256V33.3547C79.1256 34.4251 79.6279 34.9603 80.6324 34.9603C81.4525 34.9603 82.2213 34.7648 82.9388 34.3737Z"
                              fill="#151717"/>
                    </svg>
                    <Typography sx={{
                        width: '76px',
                        height: '19px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '19px',
                        color:'black'
                    }}>
                        Kyuzan-0
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '417px',
                    height: '60px',
                    justifyContent: 'space-between',
                }}>
                    <Button sx={{
                        width: '100px',
                        height: '43px',
                        borderRadius: '22px',
                        padding: '13px 27px 13px 27px',
                        background: 'linear-gradient(125.79deg, #B3C9BC 0.49%, #508189 96.18%)',
                        color: 'white'
                    }}>Create</Button>
                    <Box sx={{
                        width: '177px',
                        height: '60px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: '#FEF7D5',
                        }}/>
                        <Box sx={{
                            width: '94px',
                            height: '39px'
                        }}>
                            <Typography sx={{
                                width: '72px',
                                height: '19px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '16px',
                                lineHeight: '19px',
                                color:'black'
                            }}>0.85 ETH</Typography>
                            <Typography sx={{
                                width: '74px',
                                height: '15px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '12px',
                                lineHeight: '15px',
                                color:'black'
                            }}>0xuD...2ewm</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: '#CBA4A0',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        color:'white'
                    }}
                    >S</Typography>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="black" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M0 30.1H30V0.0999998H0V30.1Z" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_10110_35128" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_10110_35128" width="64" height="64" xlinkHref="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                    <ArrowDropDownIcon sx={{
                        color:'black'
                    }}/>
                </Box>
            </Box>
        </>
    )
}

export default HeaderDraft