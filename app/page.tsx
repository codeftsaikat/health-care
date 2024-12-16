import Image from "next/image";
import logo from "@/public/favicon.ico";
import onboarding from "@/public/assets/images/onboarding-img.png";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP verification and passkeyModal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center mb-12">
            <Image className="h-10 w-fit" src={logo} alt="HealthCare" />
            <p className="text-xl font-semibold">HealthCare</p>
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-end text-dark-600 xl:text-left">
              © 2024 HealthCare
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image 
      className="side-image max-w-[50%]"
      src={onboarding}
      alt="image not found"
      />
    </div>
  );
}
