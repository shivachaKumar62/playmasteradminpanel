import React, { useEffect, useRef } from "react";
import Navbar from "../homepage/navbar/Navbar";
import Footer from "../homepage/components/Footer";
import { useLocation } from "react-router-dom";

const Bonus = () => {
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Navbar />
      <div className="container" id="bonusSection">
        <div className="py-[48px]">
          <p>
            Welcome to our Bonus and Vouchers Page Unlock Exciting Rewards with
            Our Bonuses and Vouchers Why Choose Us for Bonuses and Vouchers? At
            Playmaster11, we believe in enhancing your experience not just with
            our products, but also with exclusive bonuses and vouchers designed
            to delight you. Whether you're a loyal customer or a new visitor,
            our bonuses and vouchers are tailored to make your shopping
            experience more rewarding. What We Offer: Exclusive Bonuses: Enjoy
            special bonuses that give you more value for your money. From
            cashback offers to bonus points on purchases, our bonuses are
            designed to reward you every step of the way. Vouchers for Every
            Occasion: Whether it's a birthday, anniversary, or just a regular
            day, our vouchers make the perfect gift. Choose from a variety of
            voucher options and let your loved ones pick their favorite
            products. Flexible Redemption: Easily redeem your bonuses and
            vouchers online or in-store. We've made the process simple and
            convenient so you can start enjoying your rewards without hassle.
            How It Works: Earn Bonuses: Shop and earn bonuses with every
            purchase. The more you shop, the more you earn! Receive Vouchers:
            Keep an eye out for special promotions where you can earn vouchers
            or gift them to someone special. Redeem with Ease: Use your bonuses
            and vouchers towards your next purchase and enjoy the savings!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bonus;
