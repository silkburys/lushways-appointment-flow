
import VoucherHeader from '../components/vouchers/VoucherHeader';
import VoucherFooter from '../components/vouchers/VoucherFooter';
import VoucherCard from '../components/vouchers/VoucherCard';
import { vouchersData, expandedPrices } from '../data/vouchersData';
import { VOUCHER_COLORS } from '../constants/voucherColors';

const Vouchers = () => {
  const handleBookNow = (amount: number) => {
    window.open(`https://lushways.com/payment/pay.php?amount=${amount}&type=membership`, '_blank');
  };

  return (
    <div
      style={{ background: VOUCHER_COLORS.light, fontFamily: "Open Sans, sans-serif", color: VOUCHER_COLORS.text }}
      className="min-h-screen"
    >
      <VoucherHeader colors={VOUCHER_COLORS} />

      <main className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="text-center mb-12">
            <h1 
              className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4"
              style={{
                color: VOUCHER_COLORS.teal,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.02em',
              }}
            >
              MEMBERSHIP VOUCHERS
            </h1>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{
                color: VOUCHER_COLORS.text,
                fontFamily: "Open Sans, sans-serif",
                lineHeight: 1.6
              }}
            >
              A wide variety and choice of Free add on's. Approach the receptionist at the nearest branch to know more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {vouchersData.map((voucher) => {
              const isExpanded = expandedPrices.includes(voucher.price);
              return (
                <VoucherCard
                  key={voucher.id}
                  voucher={voucher}
                  isExpanded={isExpanded}
                  colors={VOUCHER_COLORS}
                  onPayNow={handleBookNow}
                />
              );
            })}
          </div>
        </div>
      </main>

      <VoucherFooter colors={VOUCHER_COLORS} />
    </div>
  );
};

export default Vouchers;
