import Link from "next/link";

const ContactBtn = ({
  children,
  linkProp,
  location,
  phoneNumber,
}: {
  children: React.ReactNode;
  linkProp: string;
  location: string;
  phoneNumber: string;
}) => {
  return (
    <Link
      href={linkProp}
      className="flex flex-col flex-wrap items-start p-4 text-white rounded-md bg-primary"
    >
      <span className="flex items-center gap-2 text-base font-light md:text-xl">
        {children}
        {location}
      </span>
      <span className="text-xl md:text-2xl">{phoneNumber}</span>
    </Link>
  );
};
export default ContactBtn;
