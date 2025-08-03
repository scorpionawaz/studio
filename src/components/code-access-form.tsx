"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Rocket, ShieldAlert, Lock, Unlock } from "lucide-react";

interface CodeAccessFormProps {
  accessCode: string;
  sourceCodeUrl?: string;
}

export default function CodeAccessForm({
  accessCode,
  sourceCodeUrl,
}: CodeAccessFormProps) {
  const [inputCode, setInputCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sourceCodeUrl) {
        toast({
            title: "No Source Code",
            description: "A source code URL has not been provided for this project.",
            variant: "destructive",
        });
        return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      if (inputCode === accessCode) {
        setIsUnlocked(true);
        toast({
          title: "Access Granted",
          description: "You can now view the source code.",
        });
      } else {
        toast({
          title: "Access Denied",
          description: "The access code you entered is incorrect.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
      setInputCode("");
    }, 1000);
  };

  if (isUnlocked && sourceCodeUrl) {
    return (
      <div className="space-y-4 text-center">
        <Unlock className="h-12 w-12 text-green-500 mx-auto" />
        <h3 className="font-semibold text-lg text-primary">Code Unlocked!</h3>
        <p className="text-muted-foreground text-sm">You have successfully gained access.</p>
        <Button asChild className="w-full">
          <Link href={sourceCodeUrl} target="_blank">
            <Rocket className="mr-2 h-4 w-4" />
            Go to Source Code
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2">
        <Lock className="h-5 w-5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Enter access code to view source.
        </p>
      </div>
      <Input
        type="password"
        placeholder="Access Code"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        disabled={isSubmitting}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Verifying..." : "Get Source Code"}
      </Button>
    </form>
  );
}
