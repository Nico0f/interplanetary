import { border, Checkbox, Container, Stack } from '@chakra-ui/react'
import CustomIcon from './icon'
import { OptionsProps, Agency, LaunchSystem, Outcome, LaunchSite } from '../interfaces/interfaces'

export default function Options({ view, info, filters, changeFilters }: OptionsProps) {

    const display_bodies = info.bodies.map((e: string) => (
        <Checkbox name='bodies' icon={<CustomIcon />} key={e} colorScheme='teal' defaultChecked={!filters.bodies.includes(e)} value={e} onChange={changeFilters}>{e}</Checkbox>
    ))

    const display_agencies = info.agencies.map((e: Agency) => (
        <Checkbox name='agency' icon={<CustomIcon />} key={e.agencyid.toString()} colorScheme='teal' defaultChecked={!filters.agency.includes(e.agency)} value={e.agency} onChange={changeFilters}>{e.agency}</Checkbox>
    ))

    const display_location = info.launchsite.map((e: LaunchSite) => (
        <Checkbox name='location' icon={<CustomIcon /> } key={e.launchlocationid.toString()} colorScheme='teal' defaultChecked={!filters.location.includes(e.location)} value={e.location} onChange={changeFilters}>{e.location}</Checkbox>
    ))

    const display_launchsystem = info.launchsystem.map((e: LaunchSystem) => (
        <Checkbox name='launchsystem' icon={<CustomIcon />}  key={e.launchsystemid.toString()} colorScheme='teal' defaultChecked={!filters.launchsystem.includes(e.launchsystem)} value={e.launchsystem} onChange={changeFilters}>{e.launchsystem}</Checkbox>
    ))

    const display_outcomes = info.outcomes.map((e: Outcome) => (
        <Checkbox name='outcome' icon={<CustomIcon />}  key={e.outcomeid.toString()} colorScheme='teal' defaultChecked={!filters.outcome.includes(e.outcome)} value={e.outcome} onChange={changeFilters}>{e.outcome}</Checkbox>
    ))

    return (
        <Stack spacing={4} direction='column' color={"white"} sx={{border: "solid white 1px", borderRadius: "9px", padding: "9px", width: "400px", height: "280px", overflowY: "scroll"}}>
            {view === 'body' ? display_bodies : null}
            {view === 'agency' ? display_agencies : null}
            {view === 'site' ? display_location : null}
            {view === 'system' ? display_launchsystem : null}
            {view === 'outcome' ? display_outcomes : null}
        </Stack>
    )
}