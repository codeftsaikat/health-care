import Image from "next/image";
import logo from '@/public/favicon.ico';

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
            <Image src={logo} alt="HealthCare"/>
      </div>
      </section>
    </div>
  );
}
