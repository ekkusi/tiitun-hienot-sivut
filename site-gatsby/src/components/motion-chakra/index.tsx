import * as React from "react";
import { TextProps, Text, BoxProps, Box } from "@chakra-ui/react";
import { HTMLMotionProps, motion } from "framer-motion";

type Merge<P, T> = Omit<P, keyof T> & T;
export type MotionTextProps = Merge<TextProps, HTMLMotionProps<"p">>;
export const MotionText: React.FC<MotionTextProps> = motion(Text);

export type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<"div">>;
export const MotionBox: React.FC<MotionBoxProps> = motion(Box);
