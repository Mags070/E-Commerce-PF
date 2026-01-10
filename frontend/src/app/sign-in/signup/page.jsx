import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link"
export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="bg-[#8B735E] p-6">
        <div className="flex w-900px h-460px bg-[#8B735E]">
          <div className="w-1/2 bg-[#8B735E] flex items-center justify-center" />
          <div className="w-1/2 bg-[#E6C9A0] px-12 py-10 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-serif text-black mb-2">
                Crafted Roots
              </h1>

              <p className="text-sm text-black mb-4">
                Create Account
              </p>
              <div className="flex gap-3 mb-4">
                <Button 
                  variant="outline"
                  className="flex-1 border border-[#3A2E25] text-xs py-1 rounded bg-white text-black hover:bg-white/90 h-auto"
                >
                  Sign up with Google
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border border-[#3A2E25] text-xs py-1 rounded bg-white text-black hover:bg-white/90 h-auto"
                >
                  Sign up with Email
                </Button>
              </div>
              <div className="text-center text-xs text-black mb-4">
                — OR —
              </div>
              <div className="space-y-3">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-0 border-b border-[#3A2E25] text-sm px-1 py-1 rounded-none placeholder-black text-black focus-visible:ring-0 focus-visible:border-[#3A2E25]"
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-0 border-b border-[#3A2E25] text-sm px-1 py-1 rounded-none placeholder-black text-black focus-visible:ring-0 focus-visible:border-[#3A2E25]"
                />

                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent border-0 border-b border-[#3A2E25] text-sm px-1 py-1 rounded-none placeholder-black text-black focus-visible:ring-0 focus-visible:border-[#3A2E25]"
                />

                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-transparent border-0 border-b border-[#3A2E25] text-sm px-1 py-1 rounded-none placeholder-black text-black focus-visible:ring-0 focus-visible:border-[#3A2E25]"
                />
              </div>
            </div>
            <div>
              
              <Button className="w-full bg-black text-white hover:bg-black/90 text-sm py-2 rounded mt-5 h-auto">
                Create Account
              </Button>
            

              
                <Link href="/sign-in/login">
                  <p className="text-[10px] text-center mt-3 text-black">
                Already have an account?
                </p>
                </Link>
              

              <p className="text-[9px] text-right mt-3 text-black">
                Terms & Conditions
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}