import timmy from "../assets/tim.webp";
import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { useLocation } from "wouter";
import { MotionFlex } from "./flex";

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut"
  }
};

export const StartMenu = () => {
  const [, setLoc] = useLocation();

  return (
    <>
      <Menu>
        <MenuButton as={Flex}>
          <MotionFlex
            animate={{
              y: ["-10%", "0%"]
            }}
            transition={bounceTransition}
          >
            <Image src={timmy} w="10" alt="Tim" />
          </MotionFlex>
        </MenuButton>
        <MenuList bg="#111" _hover={{ bg: "#111" }}>
          <MenuItem
            onClick={() => setLoc("/ie/blank")}
            bg="#111"
            _hover={{ bg: "#222" }}
          >
            Timternet Explorer
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
