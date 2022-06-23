interface ButtonProps {
  link: string;
  variant: "success" | "info";
  text: string;
  logo: any;
}

export function Button(props: ButtonProps) {
  const Logo = props.logo;

  return (
    <span>
      {props.variant === "info" && (
        <a
          href="#"
          className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
        >
          <Logo size={20} />
          {props.text}
        </a>
      )}

      {props.variant === "success" && (
        <a
          href="#"
          className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
        >
          <Logo size={20} />
          {props.text}
        </a>
      )}
    </span>
  );
}
