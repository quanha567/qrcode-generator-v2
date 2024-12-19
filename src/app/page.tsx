"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Textarea,
} from "@/components";
import { generateQrCode } from "@/lib";
import Head from "next/head";
import Image from "next/image";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, pending] = useActionState(
    generateQrCode,
    "https://www.qrcode-monkey.com/img/default-preview-qr.svg"
  );

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <Card className="lg:w-[70vw]">
          <CardHeader>
            <CardTitle>Input Your Link</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid lg:grid-cols-2 gap-4" action={formAction}>
              <div>
                <Textarea
                  name="url"
                  placeholder="https://facebook.com"
                  rows={10}
                />
              </div>
              <div className="px-4">
                <Image src={state} alt="qr-code" width={500} height={500} />
                <Button>{pending ? "Loading..." : "Create QR Code"}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
