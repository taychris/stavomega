import Link from "next/link";

const ContactEmailBtn = ({
  children,
  linkProp,
  location,
  email,
}: {
  children: React.ReactNode;
  linkProp: string;
  location: string;
  email: string;
}) => {
  return (
    <Link
      href={linkProp}
      className="flex flex-col items-start p-4 text-white rounded-md h-min bg-secondary_gray"
    >
      <span className="flex items-center gap-2 text-base font-light md:text-xl">
        {children}
        {location}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-xl md:text-2xl">{email}</span>
      </div>
    </Link>
  );
};
export default ContactEmailBtn;
