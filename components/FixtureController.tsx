import { styled } from '@mui/material/styles';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from "react";
import ChannelController from "./ChannelController";

type FixtureSettings = {
    channels: Array<{
        number: number
        name: string
    }>
}

type FixtureControllerProps = FixtureSettings

type FixtureState = {
    [key: number]: number
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function FixtureController({
    channels
}: FixtureControllerProps) {
    const [channelState, setChannelState] = useState<FixtureState>(channels.reduce((prev, curr): any => ({...prev, [curr.number]: 0}), {}))

    const onFixtureChannelUpdate = (channel: number, value: number) => {
        setChannelState({...channelState, [channel]: value})
    }

    useEffect(() => {
        fetch('/api/dmx', {
            method: 'POST',
            body: JSON.stringify(channelState)
        })
    }, [channelState])

    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {channels.map((item: any) => {
            return (
            <Grid xs={2}>
                <Item>
                    <ChannelController
                        updateEvent={onFixtureChannelUpdate}
                        channel={item.number}
                        name={item.name}
                    />
                </Item>
            </Grid>
            )
        })}
      </Grid>
    </Box>
        // <Stack spacing={10} direction='row'>
        //     {channels.map(item => (
        //         <ChannelController
        //             updateEvent={onFixtureChannelUpdate}
        //             channel={item.number}
        //             name={item.name}
        //         />
        //     ))}
        // </Stack>
    )
}