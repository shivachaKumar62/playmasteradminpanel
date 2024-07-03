import React from "react";
import { isAndroid, isIOS } from "react-device-detect";

const DownloadQR = () => {
  const androidLink = "https://playmaster11.com/Playmaster11.apk";
  const iosLink =
    "https://apps.apple.com/in/app/myteam11-play-fantasy-sports/id1221862854";
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container">
        <div className="max-sm:grid max-sm:grid-cols-1  sm:grid sm:grid-cols-2 py-[96px] max-sm:py-[40px]">
          <div className="flex justify-center  items-center">
            <img src={process.env.PUBLIC_URL + "./images/Group 46.png"} />
          </div>
          <div className="flex justify-start  items-start ">
            <div>
              <div className="max-sm:pt-[24px] max-sm:px-2">
                <p className="font-semibold font-marope  max-sm:text-[26px] sm:text-[32px] leading-8 text-[#071013]">
                  Download the
                </p>
                <p className="font-semibold font-marope  max-sm:text-[26px] sm:text-[32px] leading-10 text-[#071013]">
                  PlayMaster 11 App now!
                </p>
                <p className="font-normal  font-manrope  text-lg pt-[16px] text-[#373737]">
                  Create team, join contests & win exciting cash prizes.
                </p>
              </div>
              <div className="flex gap-x-4 pt-[24px] max-sm:px-2 max-sm:justify-around">
                {/* <a href={"https://playmaster11.com/Playmaster11.apk"} download>
                  <div className="flex justify-center py-[9px] items-center gap-2 bg-[#071013] h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg">
                    <img
                      src={
                        process.env.PUBLIC_URL + "./images/devicon_android.png"
                      }
                    />
                    <div className="flex flex-col ">
                      <span className=" text-xs font-manrope font-normal text-white">
                        Download Our
                      </span>
                      <span className=" font-semibold font-manrope text-white text-base">
                        Android App{" "}
                      </span>
                    </div>
                  </div>
                </a> */}
                {isAndroid && (
                  <a href={androidLink} download>
                    <div className="flex justify-center py-[9px] items-center gap-2 bg-[#071013] h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "./images/devicon_android.png"
                        }
                      />
                      <div className="flex flex-col ">
                        <span className=" text-xs font-manrope font-normal text-white">
                          Download on the
                        </span>
                        <span className=" font-semibold font-manrope text-white text-base">
                          Android App{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                )}
                {isIOS && (
                  <a href={iosLink} download>
                    <div className="flex justify-center py-[9px] items-center gap-2 bg-[#071013] h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "./images/devicon_android.png"
                        }
                      />
                      <div className="flex flex-col ">
                        <span className=" text-xs font-manrope font-normal text-white">
                          Download on the
                        </span>
                        <span className=" font-semibold font-manrope text-white text-base">
                          Ios
                        </span>
                      </div>
                    </div>
                  </a>
                )}
                {!isAndroid && !isIOS && (
                  <a href={iosLink} download>
                    <div className="flex justify-center py-[9px] items-center gap-2 bg-[#071013] h-[56px] sm:w-[184px] max-sm:w-[164px] rounded-lg">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "./images/devicon_android.png"
                        }
                      />
                      <div className="flex flex-col ">
                        <span className=" text-xs font-manrope font-normal text-white">
                          Download on the
                        </span>
                        <span className=" font-semibold font-manrope text-white text-base">
                          Android App{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                )}
                <a href={"https://playmaster11.com/Playmaster11.apk"} download>
                  <div className="flex justify-start items-center gap-2 bg-[#071013] h-[56px] w-[184px] max-sm:w-[164px]  max-sm:px-3 sm:px-6   rounded-lg">
                    <img
                      src={
                        process.env.PUBLIC_URL + "./images/ic_round-apple.png"
                      }
                    />
                    <div className="flex flex-col ">
                      <span className=" text-xs font-manrope font-normal text-white">
                        Download on the
                      </span>
                      <span className=" font-semibold font-manrope text-white text-base">
                        App Store
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex max-sm:flex-col max-sm:items-center pt-[36px] ">
                <img src={process.env.PUBLIC_URL + "./images/scanner.png"} />
                <div className="flex flex-col  pl-[16px] pt-1 max-sm:pt-[16px] ">
                  <span className="font-manrope leading-4 font-semibold text-lg  text-[#071013]">
                    Scan the QR Code to Download the{" "}
                  </span>
                  <span className="font-manrope pt-1 font-semibold text-lg max-sm:text-center  text-[#071013]">
                    <a
                      href={process.env.PUBLIC_URL + "/app-release.apk"}
                      download
                      className="text-blue-500 pr-2 underline"
                    >
                      PlayMaster 11
                    </a>
                    App
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadQR;
