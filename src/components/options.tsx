import { border, Checkbox, Container, Stack } from '@chakra-ui/react'
import CustomIcon from './icon'

export default function Options(props: any) {

    const display_bodies = props.info.bodies.map((e: any) => (
        <Checkbox icon={<CustomIcon />} key={e} checked={true} colorScheme='teal' defaultChecked>{e}</Checkbox>
    ))

    const display_agencies = props.info.agencies.map((e: any) => (
        <Checkbox icon={<CustomIcon />} key={e.agencyid} checked={true} colorScheme='teal' defaultChecked>{e.agency}</Checkbox>
    ))

    const display_location = props.info.launchsite.map((e: any) => (
        <Checkbox icon={<CustomIcon /> } key={e.launchlocationid} colorScheme='teal' defaultChecked>{e.location}</Checkbox>
    ))

    const display_launchsystem = props.info.launchsystem.map((e: any) => (
        <Checkbox icon={<CustomIcon />}  key={e.launchsystemid} colorScheme='teal' defaultChecked>{e.launchsystem}</Checkbox>
    ))

    const display_outcomes = props.info.outcomes.map((e: any) => (
        <Checkbox icon={<CustomIcon />}  key={e.outcomeid} colorScheme='teal' defaultChecked>{e.outcome}</Checkbox>
    ))

    return (
        <Stack spacing={4} direction='column' color={"white"} sx={{border: "solid white 1px", borderRadius: "9px", padding: "9px", width: "400px", height: "280px", overflowY: "scroll"}}>
            {props.view === 'body' ? display_bodies : null}
            {props.view === 'agency' ? display_agencies : null}
            {props.view === 'site' ? display_location : null}
            {props.view === 'system' ? display_launchsystem : null}
            {props.view === 'outcome' ? display_outcomes : null}
        </Stack>
    )
}