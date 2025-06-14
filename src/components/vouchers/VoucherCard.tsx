
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
    primary: string;
    accent: string;
    peach: string;
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
        border: `2px solid ${colors.primary}`,
        borderRadius: '16px',
        boxShadow: isExpanded ?
          "0 12px 28px 0 rgba(106, 5, 127, 0.15), 0 4px 12px 0 rgba(106, 5, 127, 0.08)" :
          "0 4px 12px 0 rgba(106, 5, 127, 0.08)",
        minHeight: isExpanded ? 450 : 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <CardHeader
        className="text-center py-4 rounded-t-[14px]"
        style={{
          background: colors.peach,
          color: colors.text,
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.02em"
        }}
      >
        <div>{voucher.duration}</div>
      </CardHeader>
      <CardContent
        className={`flex flex-col text-center ${isExpanded ? "py-12 md:py-14 min-h-[380px] md:min-h-[420px]" : "py-8"}`}
        style={{
          background: colors.card,
          borderRadius: "0 0 14px 14px",
          overflowWrap: "anywhere",
          color: colors.text
        }}
      >
        <div
          className="text-4xl font-black mb-3 break-words"
          style={{
            color: colors.primary,
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: 1.1,
            letterSpacing: "-0.01em"
          }}
        >
          AED {voucher.price.toLocaleString()}
        </div>
        <CardTitle
          className="text-2xl font-bold mb-4 break-words"
          style={{
            color: colors.text,
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: 1.2,
            letterSpacing: "0.01em"
          }}
        >
          {voucher.title}
        </CardTitle>
        <div
          className="text-lg font-semibold mb-5"
          style={{
            color: colors.primary,
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: '0.02em'
          }}
        >
          MEMBERSHIP DETAILS
        </div>
        <div className="space-y-3 mb-6 flex-1" style={{ fontFamily: "'Roboto', sans-serif", color: colors.text, fontSize: '17px', lineHeight: 1.5 }}>
          {voucher.details.map((detail, index) => (
            <p key={index} className="break-words whitespace-pre-line">
              {detail}
            </p>
          ))}
        </div>
        <Button
          className="w-full font-bold py-3 px-6 rounded-lg border-0 shadow-lg text-lg transition-all duration-200"
          style={{
            background: colors.accent,
            color: "#FFFFFF",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.01em",
            transform: "translateY(0px)"
          }}
          onClick={() => onPayNow(voucher.price)}
          onMouseOver={e => {
            e.currentTarget.style.background = colors.primary;
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 20px 0 rgba(106, 5, 127, 0.2)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = colors.accent;
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "0 4px 12px 0 rgba(255, 107, 107, 0.15)";
          }}
        >
          PAY NOW
        </Button>
      </CardContent>
    </Card>
  );
};

export default VoucherCard;
