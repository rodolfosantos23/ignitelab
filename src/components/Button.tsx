import { IconProps } from "phosphor-react";

interface ButtonProps {
  link: string;
  variant: "success" | "info";
  text: string;
  logo: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  logoSize?: number;
}

export function Button(props: ButtonProps) {
  const Logo = props.logo;
  const size = props.logoSize ? props.logoSize : 20;

  return (
    <span>
      {props.variant === "info" && (
        <a
          href={props.link}
          className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
        >
          <Logo size={size} />
          {props.text}
        </a>
      )}

      {props.variant === "success" && (
        <a
          href={props.link}
          className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
        >
          <Logo size={size} />
          {props.text}
        </a>
      )}
    </span>
  );
}
