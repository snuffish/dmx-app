import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

function valueText(value: number) {
    return `${value}°C`;
}

type ChannelController = {
    channel: number
    name: string
    updateEvent: Function
    initValue?: number
}

export default function ChannelController({
    channel,
    name,
    updateEvent,
    initValue
}: ChannelController) {
    const [value, setValue] = useState(0)

    const onChangeValue = (e: any) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (initValue) setValue(initValue)
    }, [])

    useEffect(() => {
        updateEvent(channel, value)
    }, [value])

    return (
        <Stack sx={{ height: 300 }} spacing={1} direction="column">
            <Typography>Ch {channel}</Typography>
            <Typography>{value}</Typography>
            <Slider
                aria-label={`Channel ${channel}`}
                orientation='vertical'
                getAriaValueText={valueText}
                valueLabelDisplay='auto'
                max={255}
                defaultValue={initValue ?? 0}
                onChange={onChangeValue}
            />
            <Typography>{name}</Typography>
        </Stack>
    )
}