import { useCallback } from "react";
import QrReader from "react-qr-scanner";

interface Props {
  handleScanResult: (handleScanResult: string) => void;
}

function MCRPaymentScanQr({ handleScanResult }: Props) {
  const handleScan = useCallback((data: any) => {
    if (data && data.text) {
      handleScanResult(data.text);
    }
  }, []);

  const handleError = useCallback((err: Error) => {
    console.error(err);
  }, []);

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="flex flex-col items-center gap-4 justify-center my-4">
      <QrReader
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
}

export default MCRPaymentScanQr;
