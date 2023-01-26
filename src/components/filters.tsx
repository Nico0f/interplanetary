import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Filters({ setView }: any) {


    return (
        <>
            <Stack spacing={5} direction='column' align='center' w={80}>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => setView('body')}>
                    Planet / Asteroid / Comet
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => setView('agency')}>
                    Agency
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => setView('site')}>
                    Launch Site
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => setView('system')}>
                    Launch System
                </Button>
                <Button colorScheme='teal' size='md' width='100%' rightIcon={<ArrowForwardIcon />} justifyContent={"space-between"} onClick={() => setView('outcome')}>
                    Outcome
                </Button>
            </Stack>
        </>
    )
}