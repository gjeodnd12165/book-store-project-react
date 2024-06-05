import React, { useEffect } from 'react'
import Button from '../common/Button'

interface Props {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" as const;

function FindAddressButton({ onCompleted }: Props) {
  // Load script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);
  
  // Handler
  const handleOpen = () => {
    new window.daum.Postcode({
      onComplete: (data: { address: string }) => {
        onCompleted(data.address);
      }
    }).open()
  }

  // Input


  return (
    <div>
      <Button 
      type='button'
      size='medium' 
      schema='normal' 
      onClick={handleOpen}>
        주소 찾기
      </Button>
    </div>
  )
}

export default FindAddressButton