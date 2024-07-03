
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../homepage/components/Footer";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import imagedata from "./imagedata";
import imagedata from "../homepage/imageslider/imagedata";
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import useSmallScreen from "../homepage/components/customcomponent/useSmallScreen";
import Navbar from "../homepage/navbar/Navbar";
import TitleBar from "../homepage/components/customcomponent/TitleBar";
const Privacy = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const isSmallScreen = useSmallScreen();
  const [isSticky, setIsSticky] = useState(false);
  const [showNavbars, setShowNavBars] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
      <div className="container" id="privacySection">
        <div className="py-[48px]">
          <TitleBar
            data="Privacy Policy"
            colors="#ffffff"
            width="336px"
            height="76px"
          />
          {/* <h1 className="font-bold py-4 font-manrope text-xl text-black">
            PRIVACY POLICY
          </h1> */}
          <div className="mt-[36px]">
            <p>
              The privacy policy and personal information safety related to the
              services and Fun Features offered by PlayMaster11 are defined in
              this document.
            </p>
            <p className="py-2">
              "PlayMaster11 is neither associated with nor claims any
              responsibility or official status with any of the official or
              non-official sportsperson or team. Further, the PlayMaster11
              platform is not associated or affiliated with any private or
              government sports leagues/tournaments in any manner unless stated
              by the organization itself.”
            </p>
            <p className="py-2">
              PlayMaster11.com is the forerunning brand of SHIVACHA TECHNOLOGIES
              PRIVATE LIMITED (further referred as “PlayMaster11.com,”
              “PlayMaster11.com” or “PlayMaster11”). PlayMaster11.com is
              basically a fanatsy sports portal which enables its users to play
              online fantasy sports game.
            </p>
            <p className="py-2">
              The individuals using the services or Fun Features provided by
              PlayMaster11, or participating in the any of the program(s) or
              contest(s) organised by PlayMaster11 is bound to comply by these
              Privacy policies defined by PlayMaster11.
            </p>
            <p className="py-2">
              PlayMaster11.com ensures to maintain and protect the privacy of
              the individuals using the services, Fun Features and contest(s)
              offered by PlayMaster11.
            </p>
            <p className="py-2">
              PlayMaster11 offers a variety of Fun Features to enhance the user
              experience which can be studied in details in the
              <span className="font-bold text-black text-xl px-2">
                “About Us”
              </span>{" "}
              section of our website. The individuals using the Fun Features and
              services provided by PlayMaster11 are required to create and
              register an account with PlayMaster11 in order to avail the
              services offered by PlayMaster11.
            </p>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              REGISTRATION
            </h1>
            <p className="py-2">
              The individuals wishing to use the services, Fun Features and
              participate in the contest(s) organised by PlayMaster11, need to
              complete the registration process of PlayMaster11.com.
            </p>
            <p className="py-2">
              PlayMaster11 registration process requires the user to submit and
              verify certain documents for providing personal and contact
              information to the PlayMaster11 platform. The documents required
              for creating and registering an account with PlayMaster11 include:
            </p>
            <ul className="list-disc max-sm:px-4 ">
              <li>ID</li>
              <li>Email</li>
              <li>Mobile Number</li>
              <li>Password</li>
              <li>Date of birth</li>
            </ul>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              USER INVITATIONS
            </h1>
            <p className="py-2">
              The individuals using the services and Fun Features provided by
              PlayMaster11 can invite other individuals who can be either
              non-registered or already registered users of PlayMaster11 using
              their email address or Facebook usernames for participating in any
              of the Fun Features or contest (a) organised by PlayMaster11.
            </p>
            <p className="py-2">
              Any questions or clarifications with respect to this Policy can be
              sent to PlayMaster11.com at support@PlayMaster11.com or by
              normal/physical mail addressed to: Shivacha Technologies Pvt.
              Ltd., Fno -203,tower-a4,sec-107, Signature Global Solera,
              Industrial Estate (gurgaon), Gurgaon, Industrial Estate, Haryana,
              India, 122007. The personal or contact information provided by the
              users can be used by PlayMaster11 to either contact the user or to
              invite the user to register with PlayMaster11.com and participate
              in the Online Fantasy Sports Games/Fun Features offered. In order
              to avail the services provided by PlayMaster11, the users will
              have to comply with the Privacy Policy and the Terms and
              Conditions for participation in any of the Contest(s), Program(s)
              and Fun Features offered by PlayMaster11.
            </p>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              USE OF INFORMATION:
            </h1>
            <p className="py-2">
              The user information collected and stored by PlayMaster11 is
              primarily used by PlayMaster11 to provide its services and Fun
              Features to the users. The user information collected by
              PlayMaster11 is associated with the contest(s), online fantasy
              sports games or Fun Features that the user wishes to play or
              participate.
            </p>
            <p className="py-2">
              Further, the collected information can also be used for the
              following purposes:
            </p>
            <ul className="list-disc max-sm:px-4 ">
              <li>
                For offering information demanded by the users regarding Fun
                Features, program(s) and contest(s) organised by PlayMaster11.
              </li>
              <li>Email</li>
              <li>
                To enhance the user-experience and Fun Features offered to our
                users.
              </li>
              <li>
                For informing or notifying our users about any sort of changes,
                modifications or improvements to our website, services or Fun
                Features that may affect our service. The user information
                collected and stored by PlayMaster11 can also be shared with
                advertisers or third parties to get to know about the site
                visitors and site traffic.
              </li>
              <li>
                for sending promotional communications such as messages,
                emailers etc. to users
              </li>
              <li>
                PlayMaster11 reserves all the rights to disclose or share the
                personal information provided by the user to PlayMaster11 with
                third parties in order to promote fraud protection and reduce
                the credit risk to minimal levels, providing services requested
                by the User, complying with legal process, and ensuring security
                related to our services.
              </li>
            </ul>
            <p className="py-2">
              PlayMaster11 reserves all the rights to disclose or share the
              personal information provided by the user to PlayMaster11 with
              third parties in order to promote fraud protection and reduce the
              credit risk to minimal levels, providing services requested by the
              User, complying with legal process, and ensuring security related
              to our services.
            </p>
            <p className="py-2">
              PlayMaster11 ensures its users to notify them prior using their
              personal or contact information (like username, email address) for
              any purpose. In an event wherein any user does not want
              PlayMaster11 to use or share the user data, the users will have
              the opportunity to withhold their consent for their use other than
              as listed above.
            </p>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              COLLECTING INFORMATION/USE OF COOKIES:
            </h1>
            <p className="py-2">
              An HTTP cookie (also called web cookie, Internet cookie, browser
              cookie or simply cookie), is a small piece of data sent from a
              website and stored in the user's web browser while the user is
              browsing. Every time the user loads the website, the browser sends
              the cookie back to the server to notify the user's previous
              activity.
            </p>
            <p className="py-2">
              PlayMaster11 shall use cookies and similar electronic tools in
              order to collect user information for enabling us to provide
              services and Fun Features to the users. A unique number called
              User Identification (User ID) is assigned to the web browser of
              the user in order to assist PlayMaster11 in understanding the
              individual interests of different users. Despite assigning User ID
              or unique numbers to different users availing the services and Fun
              Features provided by PlayMaster11, PlayMaster11.com has no way to
              know or decide who the User is. The user cannot be identified
              until and unless he/she voluntarily identifies himself/herself
              through the registration process.
            </p>
            <p className="py-2">
              A cookie can be defined as a piece of data stored on the hard
              drive of the user’s computer system that enables PlayMaster11 to
              recognize the user, and the path user follows while visiting
              PlayMaster11.com from one page to other. The utilization of
              cookies assists PlayMaster11 in customizing the website as per the
              interests of different users helping PlayMaster11 to understand
              how different users use the services and Fun Features provided by
              PlayMaster11 alongside playing the Fantasy Games, such that the
              information can be used for enhancing the services, website, Fun
              Features and Contest(s) provided/organised by PlayMaster11.
            </p>
            <p className="py-2">
              The cookies used by PlayMaster11 do not save, store or scan any
              personal information from the computer system of the user. The
              personal information stored in the form of cookies is attained
              through the user’s act, which can be defined as a user’s own input
              on a website's form. In an event wherein the third-party
              advertisers associated with PlayMaster11 assign their own cookies
              on the computer system of a user when a user
              intentionally/unintentionally clicks on their ad banners,
              PlayMaster11 shall not be held responsible or liable.
            </p>
            <p className="py-2">
              In an event wherein an individual using the services or Fun
              Features provided by PlayMaster11 visits www.PlayMaster11.com,
              then the web servers associated with PlayMaster11.com will
              automatically collect limited information relative to the computer
              system of the user, including User's IP address, (User's IP
              address is a numerical label assigned to each device participating
              in a computer network that uses the Internet Protocol for
              communication. This number allows computers attached to the
              Internet know where to send data to the User -- such as the web
              pages viewed by the User. It is similar to that someone needs your
              mailing address to send you a letter). The IP address of the
              user’s computer system is not responsible for sharing any sort of
              personal information of the user. The user information collected
              by PlayMaster11 is used for delivering or providing the content
              and services demanded by the users. In addition, this information
              helps PlayMaster11 in enhancing or upgrading the services, Fun
              Features or website of PlayMaster11 in alignment with the user
              interests. Further, the collected or stored information helps
              PlayMaster11 to analyze the site traffic and to let advertisers
              know the geographic locations of PlayMaster11.com's visitors which
              ultimately signifies popularity.
            </p>
            <p className="py-2">
              There are various links and redirecting URLs’ to the third-party
              website on PlayMaster11.com. The third-party websites have
              different privacy policies defined that are beyond the control of
              PlayMaster11 and in this regard, PlayMaster11 shall not be held
              responsible for any loss, or inadequate usage of user information.
              In an event wherein any user clicks on the redirecting URLs to
              third party websites and leaves the PlayMaster11.com's servers
              (the User can check the URL shown in the location bar of User's
              browser to know where he/she is or to know the location) the usage
              of any information provided by the user will be governed by the
              privacy policy of the site’s operator which the user is visiting
              which might differ from the privacy policies defined by
              PlayMaster11. In an event, the user is unable to visit the privacy
              policy page from the homepage of the site being visited by the
              user, then the User may contact the site directly for more
              information.
            </p>
            <p className="py-2">
              By using the PlayMaster11 platform and providing your contact
              information, you agree that PlayMaster11 may use your contact
              details to communicate about app updates, promotional offers and
              other brand communications via email, SMS, phone or other means of
              communication.
            </p>
            <p className="py-2">
              The user information collected and stored by PlayMaster11.com can
              be shared with the third-party advertisers associated with
              PlayMaster11 to assist them to understand the preferences of the
              users who visit the website and also confirm the value of
              advertising on PlayMaster11.com. The user information shared by
              PlayMaster11 with the third-party advertisers associated with
              PlayMaster11.com is usually in the form of aggregated statistics
              of traffic on various pages within PlayMaster11.com.
            </p>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              INFORMATION SECURITY:
            </h1>
            <p className="py-2">
              All the user information collected and stored by
              PlayMaster11.com’s web servers is the one which the user
              voluntarily submits. In addition, information submitted by the
              user is safely and securely stored within the
              PlayMaster11.com-controlled database. The databases used by
              PlayMaster11.com for storing the user information are protected by
              a firewall. The access to such servers is strictly limited and is
              password-protected in order to ensure a safe and secure storage of
              the user’s personal information. However, PlayMaster11 does not
              guarantee the security of the databases due to the fact that
              despite adopting various effective security measures, no security
              system is impenetrable or inaccessible. In addition to this, the
              user information can be obstructed amid the transfer of the
              information over the internet. Further, any sort of user
              information shared by the user amid the time of discussion over
              the site is public and can be easily accessed by anyone with
              Internet access.
            </p>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              Privacy Policy Updates
            </h1>
            <p className="py-2">
              PlayMaster11.com holds all the rights to review, modify or change
              the privacy policies of the site with changes or modification in
              the context of the internet policies. However, the usage of user
              information collected by PlayMaster11.com will stay consistent
              with the policy under which the information was collected,
              regardless of what the new policy may be.
            </p>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              Third-party app & data sharing
            </h1>
            <p className="py-2">
              PlayMaster11.com comprises of third-party advertisers that provide
              ads to the users at the time of their visit to PlayMaster11.com.
              These third-party advertisers might use the user information
              (excluding personal details like name, address, phone number etc.)
              for analyzing and tracking the user visits to this and other
              websites, in order to understand the user interests, and then
              provide goods, services and other advertisements on the basis of
              user interests. PlayMaster11 shall not reveal, share or disclose
              the personal information or the identity of the user collected at
              the time of registration with these third-party advertisers.
              Several fraudulent emails, websites, blogs etc. often including
              the photos, logos, links, content or any other information
              associated with PlayMaster11, may or are circulating on the
              Internet and claim to be from or associated with PlayMaster11.com.
              Such fraudulent emails, websites, blogs etc. might often ask the
              users to share their personal details including (but not limited
              to) like login name, password etc. In addition, these fraudulent
              websites, emails, blogs etc. might even demand the credit or debit
              card details of the user by convincing the users that they have
              won any winnings or Cash Bonus. Such emails, blogs, websites etc.
              are not associated with PlayMaster11 in any manner, and
              PlayMaster11 shall not be held responsible in an event any of the
              users reply to such emails or blogs or share any information with
              them. PlayMaster11.comstrongly recommends the users not to trust,
              and respond to such ails, blogs, websites etc. and also not to
              share any credit /debit card details with them.
            </p>
            <p className="py-2">
              Any doubts or comments with respect to this Privacy Policy can be
              sent to PlayMaster11.com at support@PlayMaster11.com or by
              normal/physical mail addressed to: Shivacha Technologies Pvt. Ltd.
            </p>
            <span className="font-bold py-4 font-manrope text-sm text-black">
              Fno -203,tower-a4,sec-107, Signature Global Solera, Industrial
              Estate (gurgaon), Gurgaon, Industrial Estate, Haryana, India,
              122007.
            </span>
            <h1 className="font-bold py-4 font-manrope text-xl text-black">
              COLLECTING USER INFORMATION FROM SOCIAL MEDIA PLATFORMS
            </h1>
            <p className="py-2">
              We at PlayMaster11 collect certain user information from social
              media platforms such as Facebook and Google in order to help the
              users create an account on the PlayMaster11 platform. The
              information collected by PlayMaster11 is stored in the database of
              PlayMaster11 and further displayed in the Profile section of the
              user in order to provide an identification of the user to both the
              platform authorities and other users of the site. The information
              collected from the aforementioned social mentioned platforms
              include:
            </p>
            <p className="py-2">
              <span className="font-bold py-4 font-manrope text-sm text-black">
                {" "}
                Id
              </span>{" "}
              : The “Id” here refers to a unique identification number assigned
              to each of the users availing the services of these social media
              platforms. The ID collected by the PlayMaster11 platform is used
              to identify the user visiting and availing the services provided
              on PlayMaster11 platform.
            </p>
            <p className="py-2">
              <span className="font-bold py-4 font-manrope text-sm text-black">
                {" "}
                Email Id
              </span>{" "}
              : The email id of the user using Facebook and Google services is
              collected by PlayMaster11 as soon as the user registers on the
              platform using either of the social media platforms. The email id
              collected by PlayMaster11 from such social media platforms is used
              to be displayed in the user profile section of the individual
              using PlayMaster11 services.
            </p>
            <p className="py-2">
              <span className="font-bold py-4 font-manrope text-sm text-black">
                {" "}
                First Name & Last Name
              </span>{" "}
              : PlayMaster11 also collects the First name and the last name of
              the individual registering on PlayMaster11 through the
              aforementioned social media platforms. The first name and last
              name collected is also used to be displayed in the user profile
              section of the individual to validate the user as a verified user
              of PlayMaster11.
            </p>
            <p className="py-2">
              <span className="font-bold py-4 font-manrope text-sm text-black">
                {" "}
                DATE OF BIRTH
              </span>{" "}
              : The PlayMaster11 platform additionally collects the Date of
              Birth of the user when the individual registers on the platform
              using either Facebook or Google. The Date of Birth collected by
              PlayMaster11 is used to identify the age of the user and testify
              whether the user registering with the platform is an adult &
              liable to use the services provided on the platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy
