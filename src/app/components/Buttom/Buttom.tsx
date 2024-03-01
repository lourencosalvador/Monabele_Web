import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttom = tv({
  base: "flex items-center justify-center bg-zinc-50 text-sm font-medium text-zinc-900",
  variants: {
    size: {
      default: "h-[35px] px-4 rounded-[4px]",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type ButtomProps = ComponentProps<"button"> &
  VariantProps<typeof buttom>;

export const Buttom = ({ size, className, ...props }: ButtomProps) => {
  return <button className={buttom({ size, className })} {...props} />;
};
