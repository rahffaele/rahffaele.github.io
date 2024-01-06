import Image from "next/image";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Header = () => {
  const name = "Raffaele Amietta";
  const description: React.ReactNode = (
    <p>
      Multidisciplinary designer, focused on interaction and experience,
      currently @{" "}
      <a
        href="https://maind.supsi.ch/master-interaction-design/"
        target="_blank"
      >
        Master of Arts in Interaction Design, SUPSI
      </a>
      .
    </p>
  );
  const alert = {
    title: "Onto the next!",
    description: "I'm looking for a curricular internship opportunity starting September, 2024. Get in touch!"   
  };

  return (
  <div>
    <div className="py-4">
      <Image
        src="/images/pfp.jpeg"
        alt="profile pic"
        width={60}
        height={60}
        className="rounded-xl"
      />
    </div>
    <h5 className="text-md font-medium">
      {name}
    </h5>
    <div>
      {description}
      <br />
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>{alert.title}</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          {alert.description}
        </AlertDescription>
      </Alert>
    </div>
  </div>
  );
};

export default Header;