import { border, Checkbox, Container, Stack } from '@chakra-ui/react'
import CustomIcon from './icon'
import { OptionsProps } from '../interfaces/interfaces'

export default function Options({ view, info, filters, changeFilters }: OptionsProps, props: any) {

    const display_bodies = info.bodies.map((e: any) => (
        <Checkbox name='bodies' icon={<CustomIcon />} key={e} colorScheme='teal' defaultChecked={!filters.bodies.includes(e)} value={e} onChange={changeFilters}>{e}</Checkbox>
    ))

    const display_agencies = info.agencies.map((e: any) => (
        <Checkbox name='agency' icon={<CustomIcon />} key={e.agencyid} colorScheme='teal' defaultChecked={!filters.agency.includes(e.agency)} value={e.agency} onChange={changeFilters}>{e.agency}</Checkbox>
    ))

    const display_location = info.launchsite.map((e: any) => (
        <Checkbox name='location' icon={<CustomIcon /> } key={e.launchlocationid} colorScheme='teal' defaultChecked={!filters.location.includes(e.location)} value={e.location} onChange={changeFilters}>{e.location}</Checkbox>
    ))

    const display_launchsystem = info.launchsystem.map((e: any) => (
        <Checkbox name='launchsystem' icon={<CustomIcon />}  key={e.launchsystemid} colorScheme='teal' defaultChecked={!filters.launchsystem.includes(e.launchsystem)} value={e.launchsystem} onChange={changeFilters}>{e.launchsystem}</Checkbox>
    ))

    const display_outcomes = info.outcomes.map((e: any) => (
        <Checkbox name='outcome' icon={<CustomIcon />}  key={e.outcomeid} colorScheme='teal' defaultChecked={!filters.outcome.includes(e.outcome)} value={e.outcome} onChange={changeFilters}>{e.outcome}</Checkbox>
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