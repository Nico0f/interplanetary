import { Box, Center, Container, Icon, Flex, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton, Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin, FaSuitcase } from 'react-icons/fa'

export default function Header() {

    return (
        <Box width={"100%"} backgroundColor={"#708d9d"}>
            <Flex>
                <Box>
                </Box>
                <Spacer />
                <Box>
                    <img style={{ margin: "4px",marginLeft: '0px' , width: "450px" }} src="https://res.cloudinary.com/dgcsnhguo/image/upload/v1674234549/Interplanetary/Interplanetary_images/logo/logo2_xeqrit.png" alt="logo" />
                </Box>
                <Spacer />
                <Flex align={'center'}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                        <Link href='https://github.com/Nico0f' isExternal>
                            <MenuItem icon={<Icon as={FaGithub} boxSize={6} />} >Github</MenuItem>
                        </Link>
                        <Link href='https://github.com/Nico0f/interplanetary' isExternal>
                            <MenuItem icon={<Icon as={FaGithub} boxSize={6} />} >This project's repo</MenuItem>
                        </Link>
                        <Link href='https://www.linkedin.com/in/franconicoletti/' isExternal>
                            <MenuItem icon={<Icon as={FaLinkedin} boxSize={6} />} >LinkedIn</MenuItem>
                        </Link>
                        <Link href='https://www.franconicoletti.com/' isExternal>
                            <MenuItem icon={<Icon as={FaSuitcase} boxSize={6} />} >Portfolio</MenuItem>
                        </Link>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    )
}