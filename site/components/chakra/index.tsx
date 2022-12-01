"use client";

import {
  BoxProps,
  Box as ChakraBox,
  Text as ChakraText,
  TextProps,
  ListProps,
  List as ChakraList,
  ListItemProps,
  ListItem as ChakraListItem,
  Button as ChakraButton,
  ButtonProps,
  Flex as ChakraFlex,
  FlexProps,
  Icon as ChakraIcon,
  IconProps,
  forwardRef,
} from "@chakra-ui/react";

export const Box = forwardRef<BoxProps, "div">((props: BoxProps, ref) => (
  <ChakraBox ref={ref} {...props} />
));
export const Flex = forwardRef<FlexProps, "div">((props, ref) => (
  <ChakraFlex ref={ref} {...props} />
));
export const Text = forwardRef<TextProps, "p">((props, ref) => (
  <ChakraText ref={ref} {...props} />
));
export const List = forwardRef<ListProps, "ul">((props, ref) => (
  <ChakraList ref={ref} {...props} />
));
export const ListItem = forwardRef<ListItemProps, "li">((props, ref) => (
  <ChakraListItem ref={ref} {...props} />
));
export const Button = forwardRef<ButtonProps, "button">((props, ref) => (
  <ChakraButton ref={ref} {...props} />
));
export const Icon = forwardRef<IconProps, "i">((props, ref) => (
  <ChakraIcon ref={ref} {...props} />
));
