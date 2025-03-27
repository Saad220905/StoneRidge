import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/icons/auth-image.jpg')" }}>
      {/* Static Logo and Name */}
      <div className="absolute top-8 left-8 flex items-center space-x-4">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="StoneRidge logo"
            />
            <h1 className="text-white text-2xl font-semibold">StoneRidge</h1>
        </Link>
      </div>
      
      {/* Translucent Form Container with Independent Scrolling */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 w-full max-w-lg max-h-[80vh] overflow-y-auto">
        {children}
      </div>
    </main>
  );
}