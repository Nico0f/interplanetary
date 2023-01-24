import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Filters(props: any) {


    return (
        <>
            <Stack spacing={5} direction='column' align='center' w={80}>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => props.setView('body')}>
                    Planet / Asteroid / Comet
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => props.setView('agency')}>
                    Agency
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => props.setView('site')}>
                    Launch Site
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => props.setView('system')}>
                    Launch System
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => props.setView('outcome')}>
                    Outcome
                </Button>
            </Stack>
        </>
    )
}