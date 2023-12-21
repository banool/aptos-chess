import { Box, Icon, Flex, Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

interface HoverComponentProps {
  children: ReactNode;
  link: string;
}

export const HoverComponent: React.FC<HoverComponentProps> = ({
  children,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      pos="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box filter={isHovered ? "blur(2px)" : "none"} transition="0.1s">
        {children}
      </Box>

      {isHovered && (
        <Link to={link}>
          <Flex
            pos="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            justifyContent="center"
            alignItems="center"
            transition="0.1s"
            zIndex="10"
          >
            <Icon
              as={FiArrowRightCircle}
              color="black"
              textShadow="0px 0px 8px white"
              w={10}
              h={10}
            />
          </Flex>
        </Link>
      )}
    </Box>
  );
};
