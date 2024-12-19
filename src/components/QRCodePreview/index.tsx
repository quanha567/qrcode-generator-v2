import Image from "next/image";
import { Button } from "../ui";

export const QRCodePreview = () => {
  return (
    <div className="px-4">
      <Image
        src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"
        alt="qr-code"
        width={500}
        height={500}
      />
      <Button>Create QR Code</Button>
    </div>
  );
};
