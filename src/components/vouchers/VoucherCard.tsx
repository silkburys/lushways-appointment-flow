
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface VoucherCardProps {
  voucher: {
    id: number;
    title: string;
    price: number;
    duration: string;
    details: string[];
  };
  isExpanded: boolean;
  colors: {
    teal: string;
    gold: string;
    card: string;
    text: string;
  };
  onPayNow: (amount: number) => void;
}

const VoucherCard = ({ voucher, isExpanded, colors, onPayNow }: VoucherCardProps) => {
  return (
    <Card
      className={`transition-shadow ${isExpanded ? "expanded-voucher-card" : ""}`}
      style={{
        background: colors.card,
        border: `2px solid ${colors.teal}`,
        borderRadius: '14px',
        boxShadow: isExpanded ?
          "0 10px 24px 0 rgba(74, 144, 138, 0.13), 0 2px 8px 0 rgba(68, 63, 63, 0.09)" :
          "0 2px 8px 0 rgba(74, 144, 138, 0.07)",
        minHeight: isExpanded ? 430 : 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <CardHeader
        className="text-center py-3 rounded-t-[10px]"
        style={{
          background: colors.gold,
          color: colors.text,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.01em"
        }}
      >
        <div>{voucher.duration}</div>
      </CardHeader>
      <CardContent
        className={`flex flex-col text-center ${isExpanded ? "py-12 md:py-14 min-h-[360px] md:min-h-[400px]" : "py-8"}`}
        style={{
          background: colors.card,
          borderRadius: "0 0 10px 10px",
          overflowWrap: "anywhere",
          color: colors.text
        }}
      >
        <div
          className="text-3xl font-bold mb-2 break-words"
          style={{
            color: colors.teal,
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.1,
          }}
        >
          AED {voucher.price.toLocaleString()}
        </div>
        <CardTitle
          className="text-xl font-semibold mb-3 break-words"
          style={{
            color: colors.text,
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.2,
            letterSpacing: "0.02em"
          }}
        >
          {voucher.title}
        </CardTitle>
        <div
          className="text-base font-semibold mb-4"
          style={{
            color: colors.teal,
            fontFamily: "'Open Sans', sans-serif",
            letterSpacing: '0.03em'
          }}
        >
          MEMBERSHIP DETAILS
        </div>
        <div className="space-y-2 mb-6" style={{ fontFamily: "'Open Sans', sans-serif", color: colors.text, fontSize: '16px', lineHeight: 1.5 }}>
          {voucher.details.map((detail, index) => (
            <p key={index} className="break-words whitespace-pre-line">
              {detail}
            </p>
          ))}
        </div>
        <Button
          className="w-full font-semibold py-2 px-6 rounded-md border-0 shadow-md text-base transition-colors"
          style={{
            background: colors.gold,
            color: "#fff",
            fontFamily: "'Open Sans', sans-serif",
            letterSpacing: "0.01em"
          }}
          onClick={() => onPayNow(voucher.price)}
          onMouseOver={e => (e.currentTarget.style.background = colors.teal)}
          onMouseOut={e => (e.currentTarget.style.background = colors.gold)}
        >
          PAY NOW
        </Button>
      </CardContent>
    </Card>
  );
};

export default VoucherCard;
