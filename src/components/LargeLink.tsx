import { CaretRight, IconProps } from "phosphor-react";

interface LargeLinkProps {
  link: string;
  title: string;
  description: string;
  logo: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  logoSize?: number;
}

export function LargeLink(props: LargeLinkProps) {
  const Logo = props.logo;
  const size = props.logoSize ? props.logoSize : 40;

  return (
    <>
      <a
        href={props.link}
        className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors group"
      >
        <div className="bg-green-700 h-full  p-6 flex items-center">
          <Logo size={size} />
        </div>
        <div className="py-6 leading-relaxed">
          <strong className="text-2xl">{props.title}</strong>
          <p className="text-sm text-gray-200 mt-2">{props.description}</p>
        </div>
        <div className="h-full p-6 flex items-center group-hover:text-blue-500">
          <CaretRight size={24} />
        </div>
      </a>
    </>
  );
}
