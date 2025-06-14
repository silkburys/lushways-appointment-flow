
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
      style={{ 
        background: VOUCHER_COLORS.background, 
        fontFamily: "'Roboto', sans-serif", 
        color: VOUCHER_COLORS.text 
      }}
      className="min-h-screen"
    >
      <VoucherHeader colors={VOUCHER_COLORS} />

      <main className="pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-6xl font-black tracking-tight mb-6"
              style={{
                color: VOUCHER_COLORS.primary,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '-0.01em',
                lineHeight: 1.1
              }}
            >
              MEMBERSHIP VOUCHERS
            </h1>
            <p 
              className="text-xl max-w-3xl mx-auto"
              style={{
                color: VOUCHER_COLORS.text,
                fontFamily: "'Roboto', sans-serif",
                lineHeight: 1.5,
                fontSize: '19px'
              }}
            >
              A wide variety and choice of Free add on's. Approach the receptionist at the nearest branch to know more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
